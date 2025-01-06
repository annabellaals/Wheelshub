from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings


def send_purchase_confirmation(user_email, customer_name, order_number, total_amount):
    html_message = render_to_string('purchase_conformation_email.html', {
        'customer_name': customer_name,
        'order_number': order_number,
        'purchase_date': "",
        'total_amount': total_amount,
        'shop_url': "",
        'current_year': 2025
    })

    plain_message = strip_tags(html_message)

    email = EmailMessage(
        subject='Your Purchase Confirmation',
        body=plain_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[user_email]
    )
    email.content_subtype = 'html'
    email.send()
