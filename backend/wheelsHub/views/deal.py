# Libs
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Q
import uuid


# Import db models 
from ..models import Deal, Bid
from django.contrib.auth.models import User

# Extras
from ..serializers import DealSerializer

# Get all deals
@api_view(['GET', 'POST'])
def deals(request):

    # Query deal
    if request.method == "GET":

        # Get query parameters
        title = request.GET.get('title', '')
        make = request.GET.get('make', '')
        year = request.GET.get('year')
        price_min = request.GET.get('price_min')
        price_max = request.GET.get('price_max')
        transmission = request.GET.get('transmission')
        location = request.GET.get('location', '')

        # Initialize query
        query = Q()

        # Filter based on title
        if title:

            query &= Q(title__icontains=title)
            
        # Filter based on make
        if make:

            query &= Q(make__icontains=make)
            
        # Filter based on year
        if year:

            query &= Q(year=year)
            
        # Filter based on price range
        if price_min and price_max:

            query &= Q(price__gte=price_min) & Q(price__lte=price_max)

        elif price_min:

            query &= Q(price__gte=price_min)

        elif price_max:

            query &= Q(price__lte=price_max)
            
        # Filter based on transmission
        if transmission:

            query &= Q(transmission=transmission)
            
        # Filter based on location
        if location:

            query &= Q(location__icontains=location)

        # Request server to get all deals
        deals = Deal.objects.filter(query)

        # Serialize data because it needs to converted from python object to json
        serializer = DealSerializer(deals, many=True)

        # Return json response
        return Response({ "success": True, "deals": serializer.data })

    # Create a deal
    elif request.method == "POST":

        # Validate auth
        if not request.user.is_authenticated:

            return Response({ "success": False }, status=401)

        # Get data from request
        data = request.data

        # Add details 
        data['seller'] = request.user.id 
        data["status"] = "active"

        # Get the data from frontend
        serializer = DealSerializer(data=data)
        
        # Validate data
        if serializer.is_valid():

            # Create a new deal
            deal = serializer.save()  

            # Return id
            return Response({ "success": True, "deal": str(deal.id) })
        
        # Invalid
        return Response({ "success": False, "errors": serializer.errors }, status=400)

# Get deal by id
@api_view(['GET'])
def get_deal_by_id(request, deal_id):

    try:

        # Send request to db
        deal = Deal.objects.get(id=deal_id)

        # Serialize the object, because python objects cannot be passed without first converting them to dict
        serializer = DealSerializer(deal)

        # Get the seller details
        seller = User.objects.get(id=deal.seller)

        # Init bids
        bids = []  

        # Convert current user id into uuid
        user = uuid.UUID(int=request.user.id) if request.user.id is not None else False

        # Check if seller
        is_seller = deal.seller == user
        
        # Get the bids
        data = Bid.objects.filter(deal=deal.id).exclude(status='pending')

        # Resolve bid information with bidder name
        for bid in data:

            # We will fetch all bids, but if this user is not the seller
            # then we will only return the bids that this user has placed
            if bid.buyer != user and not is_seller:
                
                continue

            # Get user
            buyer = User.objects.get(id=bid.buyer)

            # Add info to bids
            bids.append({ 
                
                "id": bid.id, 
                "amount": bid.amount, 
                "message": bid.message, 
                "status": bid.status, 
                "buyer_contact": bid.contact if bid.status == "accepted" or not is_seller else f"{bid.contact[0]}{'*' * (len(bid.contact) - 2)}{bid.contact[-1]}", 
                "buyer": bid.buyer, 
                "buyer_name": f"{buyer.first_name} {buyer.last_name}",
                "created_at": bid.created_at
    
            })

        # Return json
        return Response({ "success": True, "is_seller": is_seller, "deal": serializer.data, "seller": f"{ seller.first_name } { seller.last_name }", "bids": bids })

    except Deal.DoesNotExist:

        # Failed to get the data
        return Response({ "success": False }, status=404)
    
# Get deals of a user
@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def user_deals(request):

    # Request server to get all deals
    deals = Deal.objects.filter(seller= request.user.id)

    # Serialize data because it needs to converted from python object to json
    serializer = DealSerializer(deals, many=True)

    # Return json response
    return Response({ "success": True, "deals": serializer.data })


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user_deal(request, deal_id):
    try:
        deal = Deal.objects.get(id=deal_id, seller= request.user.id)
        deal.delete()

        return Response({
            "success": True,
            "message": "Deal deleted successfully."
        }, status=status.HTTP_204_NO_CONTENT)

    except Deal.DoesNotExist:
        return Response({
            "success": False,
            "message": "Deal not found."
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user_deal(request, deal_id):
    try:
        deal = Deal.objects.get(id=deal_id,seller= request.user.id)
        serializer = DealSerializer(deal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success": True,
                "message": "Deal updated successfully.",
                "deal": serializer.data
            }, status=status.HTTP_200_OK)

        return Response({
            "success": False,
            "message": "Invalid data.",
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    except Deal.DoesNotExist:
        return Response({
            "success": False,
            "message": "Deal not found."
        }, status=status.HTTP_404_NOT_FOUND)