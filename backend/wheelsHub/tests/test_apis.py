from django.contrib.auth.models import Group
from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
from uuid import uuid4
from wheelsHub.models import Deal


class DealTestCase(TestCase):
    def setUp(self):
        deal = Deal(
            id=uuid4(),  # Generates a new UUID for the deal
            seller=uuid4(),  # You would likely want to link to a seller from your user model
            title="2020 Toyota Corolla for Sale",
            description="A well-maintained 2020 Toyota Corolla with low mileage, in excellent condition.",
            price=15000.00,  # Price of the car
            make="Toyota",
            model="Corolla",
            year=2020,
            mileage=25000,  # Mileage in kilometers
            condition="Used",  # Condition of the car
            location="New York, NY",
            fuel_type="gasoline",
            transmission="automatic",
            body_type="sedan",
            engine_capacity=1.8,  # Engine capacity in liters
            image="https://example.com/image.jpg",  # URL to the image
            status="active",  # The current status of the deal
            created_at=timezone.now()  # Date and time of creation
        )
        # Save the deal to the database
        deal.save()

        self.deal = deal

    def test_deal_status_code(self):
        url = reverse('deals')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_deal_data_fetch(self):
        url = reverse('deals')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['success'], True)

    def test_deal_content(self):
        url = reverse('deals')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['deals'][0]['id'], str(self.deal.id))
