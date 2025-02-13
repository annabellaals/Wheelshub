from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import redirect
import os

# Import db models 
from ..models import Bid, Deal

# Extras
from ..serializers import BidSerializer

# For payment
import stripe

from ..utils import send_purchase_confirmation

# Stripe secret API key.
stripe.api_key = os.getenv("STRIPE_KEY")

# Url for backend
backend = os.getenv("BACKEND_URL")
frontend = os.getenv("FRONTEND_URL")

# Create a bid
@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def create_bid(request, deal_id):

    # Get data
    amount = request.data.get('amount')
    message = request.data.get('message', '')
    contact = request.data.get('contact', '')

    # Validate required fields
    if not amount or not contact:

        return Response({ "success": False, "message": "Amount and contact number is required" }, status=422)

    try:
        # Check if the deal exists (optional but recommended)
        deal = Deal.objects.get(id=deal_id)

        # Create a new bid instance
        bid = Bid(deal=deal.id, buyer=request.user.id, amount=amount, contact=contact, message=message, status='pending')

        # Save the bid to the database
        bid.save()

        # Then create a checkout session for processing payment
        checkout_session = stripe.checkout.Session.create(

            line_items=[
                {
                    # Provide the exact Price ID for placing a bid
                    'price': os.getenv("STRIPE_PLACE_BID"),
                    'quantity': 1,
                }
            ],
            mode='payment',
            success_url = f"{ backend }/webhook/bids/{ bid.id }/activate/?session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url = frontend,
        )
        try:
            send_purchase_confirmation(
                user_email=contact,
                customer_name=request.user.username,
                order_number=str(deal.id),
                total_amount=amount
            )
        except Exception as e:
            print(e)

        # Return bid id
        return Response({ "success": True, "bid": bid.id, "redirect_url": checkout_session.url })

    except Deal.DoesNotExist:

        return Response({ "success": False }, status=404)

    except Exception as e:
        print(str(e))


# Request unclocking a bid
@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def unlock_bid(request, bid_id):

    try:
        # Get bid
        bid = Bid.objects.get(id=bid_id)

        # Then create a checkout session for processing payment
        checkout_session = stripe.checkout.Session.create(

            line_items=[
                {
                    # Provide the exact Price ID for accepting a bid
                    'price': os.getenv("STRIPE_ACCEPT_BID"),
                    'quantity': 1,
                }
            ],
            mode='payment',
            success_url = f"{ backend }/webhook/bids/{ bid.id }/accept/?session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url = frontend,
        )

        # Return bid id
        return Response({ "success": True, "redirect_url": checkout_session.url })

    except Deal.DoesNotExist:

        return Response({ "success": False }, status=404)

    
# Get bids of a user
@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def user_bids(request):

    # Request server to get all deals
    bids = Bid.objects.filter(buyer= request.user.id)

    # Serialize data because it needs to converted from python object to json
    serializer = BidSerializer(bids, many=True)

    # Initialize array to store enhanced bid data
    data = []

    # For each bid, fetch the associated deal details
    for bid in bids:

        try:

            # Get the deal associated with this bid
            deal = Deal.objects.get(id=bid.deal)
            
            # Add deal details to bid data
            data.append({
                
                # Append existing bid data
                **serializer.data[list(bids).index(bid)],

                # Add deal data
                'make': deal.make,
                'model': deal.model, 
                'price': deal.price,
                'body_type': deal.body_type
                
            })

        except Deal.DoesNotExist:

            # Move on
            continue

    # Return json response
    return Response({ "success": True, "bids": data })

# Webhook to activate bid
@api_view(['GET'])
def activate_bid(request, bid_id):

    try:
        # Get bid
        bid = Bid.objects.get(id=bid_id)

        # Set status to placed
        bid.status = "placed"

        # Save the bid to the database
        bid.save()

        # Redirect user to frontend 
        return redirect(f"{ frontend }/view/{ bid.deal }")

    except Bid.DoesNotExist:

        return Response({ "success": False }, status=404)
    

# Webhook to accept bid
@api_view(['GET'])
def accept_bid(request, bid_id):

    try:
        # Get bid
        bid = Bid.objects.get(id=bid_id)

        # Set status to placed
        bid.status = "accepted"

        # Save the bid to the database
        bid.save()

        # Redirect user to frontend 
        return redirect(f"{ frontend }/view/{ bid.deal }")

    except Bid.DoesNotExist:

        return Response({ "success": False }, status=404)