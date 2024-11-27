from django.contrib.auth.models import Group
from django.test import TestCase
from django.utils import timezone
from uuid import uuid4

from wheelsHub.models import Deal, Bid, SupportQuery, Newsletter


class DealModelTestCase(TestCase):
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

    def test_deal_creation(self):
        self.assertEqual(self.deal.title, "2020 Toyota Corolla for Sale")
        self.assertEqual(self.deal.price, 15000.00)
        self.assertEqual(self.deal.status, "active")
        self.assertEqual(self.deal.make, "Toyota")

    def test_deal_str_method(self):
        self.assertEqual(str(self.deal), "2020 Toyota Corolla for Sale")

    def test_deal_saving(self):
        user = Deal.objects.get(title="2020 Toyota Corolla for Sale")
        self.assertTrue(user.make, "Toyota")
        self.assertTrue(user.fuel_type, "gasoline")

    def test_deal_update(self):
        self.deal.title = 'Updated title'
        self.deal.save()
        updated_deal = Deal.objects.get(title='Updated title')
        self.assertEqual(updated_deal.title, 'Updated title')

    def test_deal_deletion(self):
        self.deal.delete()
        with self.assertRaises(Deal.DoesNotExist):
            Deal.objects.get(id=self.deal.id)


class SupportQueryModelTestCase(TestCase):
    def setUp(self):
        # Create a new support query instance
        support_query = SupportQuery(
            id=uuid4(),  # Generates a new UUID for the support query
            name="John Doe",
            email="john.doe@example.com",
            message="I am having an issue with my account.",
            status="open",  # Default status
            priority="medium",  # Default priority
            created_at=timezone.now()  # Date and time of creation
        )
        # Save the support query to the database
        support_query.save()
        self.support_query = support_query

    def test_support_query_creation(self):
        # Test that the support query is created with the correct details
        self.assertEqual(self.support_query.name, "John Doe")
        self.assertEqual(self.support_query.email, "john.doe@example.com")
        self.assertEqual(self.support_query.message, "I am having an issue with my account.")
        self.assertEqual(self.support_query.status, "open")
        self.assertEqual(self.support_query.priority, "medium")

    def test_support_query_str_method(self):
        # Test the string representation of the support query (should be the name)
        self.assertEqual(str(self.support_query), "John Doe")

    def test_support_query_saving(self):
        # Test if the support query is correctly saved to the database
        query = SupportQuery.objects.get(id=self.support_query.id)
        self.assertEqual(query.name, "John Doe")
        self.assertEqual(query.email, "john.doe@example.com")
        self.assertEqual(query.status, "open")
        self.assertEqual(query.priority, "medium")

    def test_support_query_update(self):
        # Test updating the status and priority of the support query
        self.support_query.status = "resolved"
        self.support_query.priority = "high"
        self.support_query.save()

        updated_query = SupportQuery.objects.get(id=self.support_query.id)
        self.assertEqual(updated_query.status, "resolved")
        self.assertEqual(updated_query.priority, "high")

    def test_support_query_deletion(self):
        # Test deleting the support query from the database
        self.support_query.delete()
        with self.assertRaises(SupportQuery.DoesNotExist):
            SupportQuery.objects.get(id=self.support_query.id)

    def test_support_query_status_choices(self):
        # Test that the status field has the correct choices
        valid_statuses = ['open', 'in_progress', 'resolved', 'closed']
        for status in valid_statuses:
            query = SupportQuery.objects.create(
                id=uuid4(),
                name="Jane Doe",
                email="jane.doe@example.com",
                message="I can't access my account.",
                status=status,
                priority="medium",
                created_at=timezone.now()
            )
            self.assertIn(query.status, valid_statuses)

    def test_support_query_priority_choices(self):
        # Test that the priority field has the correct choices
        valid_priorities = ['low', 'medium', 'high', 'urgent']
        for priority in valid_priorities:
            query = SupportQuery.objects.create(
                id=uuid4(),
                name="Alice Smith",
                email="alice.smith@example.com",
                message="I'm facing an issue with payment.",
                status="open",
                priority=priority,
                created_at=timezone.now()
            )
            self.assertIn(query.priority, valid_priorities)

    def test_invalid_priority(self):
        # Test if an invalid priority value raises an error
        with self.assertRaises(ValueError):
            SupportQuery.objects.create(
                id=uuid4(),
                name="Invalid Priority",
                email="invalid@example.com",
                message="This should not work.",
                status="open",
                priority="invalid_priority",  # Invalid priority
                created_at=timezone.now()
            )

    def test_query_ordering(self):
        # Test that queries are ordered by creation date (descending)
        query1 = SupportQuery.objects.create(
            id=uuid4(),
            name="Query 1",
            email="query1@example.com",
            message="First query",
            status="open",
            priority="low",
            created_at=timezone.now() - timezone.timedelta(days=1)  # Older query
        )
        query2 = SupportQuery.objects.create(
            id=uuid4(),
            name="Query 2",
            email="query2@example.com",
            message="Second query",
            status="in_progress",
            priority="high",
            created_at=timezone.now()  # Newer query
        )

        # Ensure the queries are ordered by created_at in descending order
        queries = SupportQuery.objects.all()
        self.assertEqual(queries[0], query2)  # Newest query should be first
        self.assertEqual(queries[1], query1)  # Older query should be second


class NewsletterModelTestCase(TestCase):
    def setUp(self):
        # Create a new newsletter subscription
        newsletter = Newsletter(
            id=uuid4(),
            email="subscriber@example.com",
            is_active=True,
            subscribed_at=timezone.now()
        )
        # Save the newsletter subscription to the database
        newsletter.save()
        self.newsletter = newsletter

    def test_newsletter_creation(self):
        # Test that the newsletter subscription is created with the correct details
        self.assertEqual(self.newsletter.email, "subscriber@example.com")
        self.assertEqual(self.newsletter.is_active, True)

    def test_newsletter_str_method(self):
        # Test the string representation of the newsletter subscription
        self.assertEqual(str(self.newsletter), "subscriber@example.com")

    def test_newsletter_saving(self):
        # Test if the newsletter subscription is correctly saved to the database
        subscription = Newsletter.objects.get(id=self.newsletter.id)
        self.assertEqual(subscription.email, "subscriber@example.com")
        self.assertEqual(subscription.is_active, True)

    def test_newsletter_update(self):
        # Test updating the newsletter subscription status
        self.newsletter.is_active = False
        self.newsletter.save()

        updated_subscription = Newsletter.objects.get(id=self.newsletter.id)
        self.assertEqual(updated_subscription.is_active, False)

    def test_newsletter_deletion(self):
        # Test deleting the newsletter subscription from the database
        self.newsletter.delete()
        with self.assertRaises(Newsletter.DoesNotExist):
            Newsletter.objects.get(id=self.newsletter.id)

    def test_unique_email_validation(self):
        # Test that the email field enforces uniqueness
        Newsletter.objects.create(
            email="another.subscriber@example.com",
            is_active=True,
            subscribed_at=timezone.now()
        )
        with self.assertRaises(Exception):  # IntegrityError for unique constraint violation
            Newsletter.objects.create(
                email="subscriber@example.com",  # Same email as the first one
                is_active=True,
                subscribed_at=timezone.now()
            )

    def test_newsletter_ordering(self):
        # Create two additional subscriptions with different subscription times
        subscription1 = Newsletter.objects.create(
            id=uuid4(),
            email="older.subscriber@example.com",
            is_active=True,
            subscribed_at=timezone.now() - timezone.timedelta(days=2)  # Older subscription
        )
        subscription2 = Newsletter.objects.create(
            id=uuid4(),
            email="newer.subscriber@example.com",
            is_active=True,
            subscribed_at=timezone.now()  # Newer subscription
        )

        # Ensure the newsletters are ordered by `subscribed_at` in descending order
        newsletters = Newsletter.objects.all()
        self.assertEqual(newsletters[0], subscription2)  # Newest subscription should be first
        self.assertEqual(newsletters[1], subscription1)  # Older subscription should be second

    def test_newsletter_is_active_default(self):
        # Test that the default `is_active` is True when not specified
        new_subscription = Newsletter.objects.create(
            id=uuid4(),
            email="default.active.subscriber@example.com",
            subscribed_at=timezone.now()
        )
        self.assertTrue(new_subscription.is_active)

    def test_invalid_email(self):
        # Test that an invalid email raises an error
        with self.assertRaises(ValueError):
            Newsletter.objects.create(
                id=uuid4(),
                email="invalid-email",  # Invalid email format
                is_active=True,
                subscribed_at=timezone.now()
            )
