from django.contrib import admin
from django.urls import include, path
from wheelsHub import views


# Patch our app routes here
urlpatterns = [

    # Get deals list and search
    # And post route to create a new deal (protected)
    path('deals/', views.deals, name='deals'),

    # Get one deal, returns bid if the user is seller
    path('deals/<uuid:deal_id>/', views.get_deal_by_id, name='get_deal_by_id'),

    # Create a new bid on a deal (protected)
    path('deals/<uuid:deal_id>/bids/', views.create_bid, name='create_bid'),

    # Unlock a bid (protected)
    path('bids/<uuid:bid_id>/unlock/', views.unlock_bid, name='unlock_bid'),

    # Routes for users
    path('user/bids/', views.user_bids, name='get_user_bids'),
    path('user/deals/', views.user_deals, name='get_user_deals'),

    # Admin routes
    path('super/messages/', views.get_messages, name='get_messages'),
    path('super/messages/create/', views.create_message, name='create_message'),
    path('super/newsletter/subscribe/', views.subscribe_newsletter, name='subscribe_newsletter'),

    # Accept and activate a bid (hidden routes for callback)
    path('webhook/bids/<uuid:bid_id>/accept/', views.accept_bid, name='accept_bid'),
    path('webhook/bids/<uuid:bid_id>/activate/', views.activate_bid, name='activate_bid'),

    # Auth routes
    path('auth/register/', views.register_user, name='register'),
    path('auth/login/', views.login_user, name='login'),
    path('auth/user/', views.get_user, name='get_user'),
    
    # Default routes
    path('admin/', admin.site.urls),
]
