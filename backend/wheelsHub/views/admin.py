# Libs
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

# Models
from ..models import SupportQuery
from django.contrib.auth.models import User

# Create a new support query
@api_view(['POST'])
def create_message(request):

    try:
        # Extract data from request
        name = request.data.get('name')
        email = request.data.get('email') 
        message = request.data.get('message')
        priority = request.data.get('priority', 'medium')

        # Validate required fields
        if not all([name, email, message]):

            return Response({ "success": False, 'error': 'Name, email and message are required'}, status=status.HTTP_400_BAD_REQUEST)

        # Create support query
        query = SupportQuery.objects.create( name=name, email=email, message=message, priority=priority )

        return Response({ "success": True, "message": "Support query created successfully", "id": query.id }, status=status.HTTP_201_CREATED)

    except Exception as e:

        return Response({ "success": False, 'error': str(e) }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_messages(request):

    # Check if user is superuser
    if not request.user.is_staff:

        return Response({"success": False, "error": "Unauthorized - Superuser access required"}, status=status.HTTP_403_FORBIDDEN)

    try:

        # Get all messages ordered by created date
        messages = SupportQuery.objects.all().order_by('-created_at')

        # Format response
        messages_data = [{
            'id': str(msg.id),
            'name': msg.name,
            'email': msg.email,
            'message': msg.message,
            'status': msg.status,
            'priority': msg.priority,
            'created_at': msg.created_at
        } for msg in messages]

        return Response({ "success": True, "messages": messages_data }, status=status.HTTP_200_OK)

    except Exception as e:
        
        return Response({ "success": False, 'error': str(e) }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    
