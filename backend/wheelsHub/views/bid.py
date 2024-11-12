# Libs
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import redirect

# Import db models 
from ..models import Bid, Deal

# For payment
import stripe

# Stripe secret API key.
stripe.api_key = 'sk_test_51QK3J9ITNyBNaHGFGVp5qm249mhD6Vj9YqaywqHPccAWzbPWInf7K1ghcLpUneaLuzsiJswf0DHMFZrm6yHfUYlt00RZvUEIIR'

# Url for backend
backend = "http://localhost:8000"
frontend = "http://localhost:3000"

# Create a bid
@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def create_bid(request, deal_id):

    # Get data
    amount = request.data.get('amount')
    message = request.data.get('message', '')

    # Validate required fields
    if not amount:

        return Response({ "success": False, "message": "Amount is required" }, status=422)

    try:
        # Check if the deal exists (optional but recommended)
        deal = Deal.objects.get(id=deal_id)

        # Create a new bid instance
        bid = Bid(deal=deal.id, buyer=request.user.id, amount=amount, message=message, status='pending')

        # Save the bid to the database
        bid.save()

        # Then create a checkout session for processing payment
        checkout_session = stripe.checkout.Session.create(

            line_items=[
                {
                    # Provide the exact Price ID for placing a bid
                    'price': 'price_1QK3TbITNyBNaHGFy9Ubp2Ou',
                    'quantity': 1,
                }
            ],
            mode='payment',
            success_url = f"{ backend }/bids/{ bid.id }/?session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url = frontend,
        )

        # Return bid id
        return Response({ "success": True, "bid": bid.id, "redirect_url": checkout_session.url })

    except Deal.DoesNotExist:

        return Response({ "success": False }, status=404)

# Activate bid
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
        return redirect(f"{ frontend }/deal?={ bid.deal }")

    except Bid.DoesNotExist:

        return Response({ "success": False }, status=404)