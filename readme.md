# WheelsHub

Wheelhub would be an online marketplace, focus solely on buying and selling of cars, usability, secure transactions, effective communications, and no classified ads. It addresses the two specific pain points of the online car marketplaces as follows:

1. Quality data aggregation
2. A safe, authentic community of users

In traditional listings, missing or undependable information usually leads to wasted time and fuzzy expectations when purchasing. Diving down this path with enhanced data gathering, we make it so easy for sellers to log comprehensive details such as car health and any other critical details, and therefore, make the buyers find listings that give them the full picture and confidently make their decisions.

Safety is also another major aspect. The fee is charged both when making a bid. This limits the spammer and low-quality lead, ensuring a safe and reliable environment for our users. We can assure our sellers that the bids they receive are from genuine buyers, and we can assure our buyers that listings are genuine with real information behind each listing. Better data collection and a safe, spam-free marketplace help buyers and sellers connect meaningfully, with trust and confidence at every step.

This separates us from the general space of marketplaces. We are creating a niche space where every feature and function is made to support the experience of buying and selling a car.

### User Goals

Transparency is the main purpose of this platform. Therefore this keeps the users in control of every step, giving them an outcome that they desire. Here are a few key goals that this platform will acheive for both sellers and buyers:

1. Data drive appraoch: 
    
    Sellers and buyers could hold and track all active listings, bids, and interactions in view-a fully transparent and organized transaction process.
    
2. Seller Control: 
    
    Listings are controlled by sellers, as well as selling price communication with serious buyers after a bid is submitted, making it a very simple process.
    
3. Targeted Search of Buyers: 
    
    Buyers can filter cars according to make, model year, price and many more advanced filters.
    
4. Direct Communication: 
    
    Bidding facilitates the connecting of buyers and sellers directly, hence making a direct, reliable approach to negotiating communications possible.
    

### Platform owner’s goals

This marketplace, therefore, is an economically sustainable business model for the owner of the platform, with multiple revenue streams and the possibility of achieving a known community in the automotive sphere.

Core benefits for the website owner include:

1. Recurring Lead Fees: 
    
    Any listing as well as any bid takes a fee, thereby creating consistent revenue from active, engaged users.
    
2. Building a Trusted Community: 
    
    The reputation of the marketplace developed through security and data quality in the platform builds up as a trusted community of car buyers and sellers.
    
3. Data-Driven Growth: 
    
    Data gathered in terms of user behavior, trends in the buyer's bidding, and other areas provide insight that would be greatly beneficial for the owner in improving user experience, tailoring features, and strategic growth in business.
    

### Core Features

Here are the key features that we would need to build

1. Create Listings: 
    
    Sellers can easily post car listings with essential details, including car health data and pricing.
    
2. View Listings: 
    
    Both buyers and sellers can browse listings, seeing all available cars with clear, organized information.
    
3. Search Functionality: 
    
    Buyers can refine searches using filters like manufacturer, year, price range, and condition, making it easier to find the right car.
    
4. Bidding and Acceptance: 
    
    Buyers can place bids, and sellers can review bids and directly engage with buyers to close deals.
    

### Functionality Areas

This platform will include several distinct functionality areas to support user needs and drive community growth:

1. Marketplace Functionality: 
    
    The primary e-commerce component where listings, searching, and bidding take place.
    
2. Community Enablement: 
    
    By creating a trusted space for local car exchanges, the platform can evolve into a supportive community that attracts regular buyers and sellers.
    
3. Payment Integration: 
    
    Ensuring seamless transactions for lead generation fees and potential future functionality like payment processing for car sales.
    

### Mockups

I used Figma to create the mockups for this project. Here is the link to figma file: https://www.figma.com/design/kInDOvazNAyYKS5nwnAlcy/WheelsHub?node-id=0-1&t=P6yzeWO12BQDMHUs-1

### Project Planning

| Sprint | Category | Task Description | Priority | Story Points | Dependencies |
| --- | --- | --- | --- | --- | --- |
| Sprint 1: Project Setup|  |  |  |  |  |
|  | Infrastructure | Set up Git repository and project structure | High | 2 | None |
|  | Backend | Initialize Django project and configure settings | High | 3 | None |
|  | Frontend | Set up React project with Create React App | High | 2 | None |
|  | Database | Configure PostgreSQL with Neon | High | 3 | None |
|  | DevOps | Set up initial Heroku deployment pipeline | Medium | 5 | Repository setup |
| Sprint 2: Authentication|  |  |  |  |  |
|  | Backend | Implement user model and JWT authentication | High | 5 | Django setup |
|  | Backend | Create register/login API endpoints | High | 5 | User model |
|  | Frontend | Design and implement login page | High | 3 | React setup |
|  | Frontend | Design and implement registration page | High | 3 | React setup |
|  | Testing | Write authentication unit tests | Medium | 3 | Auth implementation |
| Sprint 3: Deal Management|  |  |  |  |  |
|  | Backend | Create Deal model and migrations | High | 3 | Auth system |
|  | Backend | Implement CRUD APIs for deals | High | 5 | Deal model |
|  | Frontend | Create deal listing page | High | 5 | Deal APIs |
|  | Frontend | Implement deal creation form | High | 5 | Deal APIs |
|  | Frontend | Add deal search and filtering | Medium | 8 | Deal listing page |
| Sprint 4: Bidding System  |  |  |  |  |
|  | Backend | Create Bid model and migrations | High | 3 | Deal system |
|  | Backend | Implement bid placement API | High | 5 | Bid model |
|  | Backend | Set up Stripe integration for bid payments  | High | 8 | Bid API |
|  | Frontend | Create bid placement interface     | High | 5 | Bid APIs |
|  | Frontend | Implement bid listing and management               | High | 5 | Bid APIs |
| Sprint 5: User Features|  |  |  |  |  |
|  | Backend | Implement user profile management   | Medium | 5 | Auth system |
|  | Frontend | Create user dashboard   | Medium | 8 | Profile APIs |
|  | Frontend | Add user profile editing   | Medium | 5 | Profile APIs |
|  | Backend | Implement user activity tracking  | Low | 5 | User system |
| Sprint 6: Testing & Polish|  |  |  |  |  |
|  | Testing | Comprehensive backend testing   | High | 8 | All backend features |
|  | Testing | Frontend integration testing  |  |  | All frontend features |
|  |  UI/UX  | Mobile responsiveness optimization  |  |  | Frontend components |
|  | DevOps | Production deployment setup | High | 6 | All features   |
| Sprint7: Documentation & Launch|  |  |  |  |  |
|  | Docs | API documentation | Medium | 3 | All APIs |
|  | Docs | User documentation | Medium | 3 | All features |
|  | Testing | Final QA and bug fixes | High | 5 | All features |
|  | DevOps | Production launch | High | 3 | All previous tasks |

### Technology Stack

For our platform, the choice of stack for construction is a combination of scalability, flexibility, as well as user-friendliness because it assures reliability with high performance and less development time.

1. Frontend
    
    Therefore, we have decided to use **Create React App** as our frontend's starting point. It is a simple, well-supported framework for building React applications that comes with a pre-configured build setup, thereby saving us immense time on setup and configuration so that we can focus more on feature building.
    
    For styling and UI components, we used **MUI Joy UI**, which is the most popular and professional component library in terms of a modern, customizable design system. We thus quickly could install a clean and responsive user interface making the platform intuitive and aesthetically pleasing to use for our users.
    
2. Backend
    
    We use **Django**, a high-level Python web framework, for the backend. The built-in authentication, admin tools, and full ORM (Object-Relational Mapping) in Django enable efficient and powerful ways of handling user interactions, data management, and their respective backend logics. Moreover, Django supports some of the best security features known that ensure safe interaction with the user's data.
    
3. Database
    
    We have chosen an open-source relational database called **PostgreSQL** for data storage. PostgreSQL is known to provide a high level of performance and supports complex queries. This will be a good fit for this application since the data involved in tracking car listings, bids, and user interactions will continue to grow.
    
    And we are running/ hosting our database on **Neon**, that is a cloud-native, scalable solution of PostgreSQL. This enables us to significantly reduce the overhead of managing our infrastructure while ensuring our database scales with the growth of our platform.
    
4. Payment Processing
    
    We process all payments through **Stripe**, the most trusted service that accepts multiple kinds of payments, including credit/debit cards and digital wallets. We're going to use stripe checkout for faster integration.
    
5. Deployment
Heroku is the choice for deploying our application. It is straightforward and developer-friendly, and we'd be able to focus on application features rather than infrastructure. Heroku has support for automatic scaling, and is quite seamless to integrate into our stack. This makes the deployment and maintaining of the platform very straightforward.

Designing our choices throughout the stack for maximum speed in development, scalability, and security while being minimal overhead.

### Project Structure

For this project, we are adopting a **monorepo** structure to keep both the frontend and backend in a single repository. This approach simplifies managing the codebase, version control, and ensures all project components are in sync.

The structure will be organized into two main directories: **frontend** and **backend**. Each directory will contain the necessary setup and code for its respective part of the application.

```jsx
/root

  /frontend (React app)
  
  /backend
  
    /venv (Virtual environment for python)
    
    /backend (Django core directory for settings)
    
    /wheelshub (Django app for our api
```

In the frontend directory, we will create a React project using **Create React App**. This will serve as the main frontend application for our platform. To get started this is the command that we will run

```bash
npx create-react-app wheelshub
```

This will generate the necessary project files and folder structure for the React application. All UI components, pages, and assets related to the React frontend will be placed here. For our project, we will structure it like this

```jsx
/frontend (React app)
  
  /node_modules (Contains all npm packages and dependencies)
  
  /public (Static files, including index.html (entry point))
  
  /src (Source code directory for the React app)
  
    /assets (Static assets like images, icons, etc.)
    
    /components (Reusable UI components)
    
    /fonts (Custom font files)
    
    /pages (Individual pages for different routes)
```

To start the frontend, you can simply run this command in the project directory. Running this command will run the server and load the app at `http://localhost:3000` link.

```
npm start
```

For the backend directory, we will set up a Django environment. Here is step by step process of creating a bootstrapping the backend:

1. Create Virtual Environment: 
    
    We will first create a **virtual environment** to isolate our Python dependencies. Running this command will create a `venv` directory, where all the necessary dependencies for Django will be installed.
    
    ```bash
    python -m venv venv
    ```
    
2. Install Django: 
    
    Once the virtual environment is set up, we can install Django by activating the virtual environment and running:
    
    ```bash
    source venv/bin/activate  
    pip install django
    ```
    
3. Create Django App: 
    
    In the backend, we will create a Django project and an app manage the core functionalities of the platform (such as authentication, database models, etc.). To create the Django app:
    
    ```bash
    django-admin startproject backend
    cd backend
    python manage.py startapp wheelshub
    ```
    
    Django project is structure to give you one core directory for managing the overall server, settings and other configurations. This is the entry point of the application. Then Django apps let you map urls to views and models. So most of our work happens inside the Django app folder.
    

### User Flows

**Home page / Fetching Deals**

In this user flow, we focus on how the Home page retrieves and displays car deals to the users when they land on the application. This is the default homepage for all users. Everyone lands on this page when they first open our platform. The main goal is to load a list of popular car deals, allowing users to browse and filter cars based on their preferences. This interaction involves several components from the frontend to the backend.

1. Frontend (`Home.js`)
    
    When the Home component loads, it uses axios to make a `GET` request to `/deals/` to get the car deals. This request includes any filters the user has set.
    
    The frontend manages UI states like loading, pagination, and displays each deal in a grid format using the `CarCard` component.
    
2. Backend (`deals`)
    
    The backend handles the `/deals/` route, querying the `Deal` model to retrieve active deals from the database. Here is how this api url works in curls
    
    ```bash
    curl -X GET "API_URL/deals/" -G -d "location=City" -d "price_min=10000" -d "price_max=20000"
    ```
    
    The Deal model includes essential fields such as `title`, `price`, `make`, `model`, and `location`. Only deals with the status `active` are sent back in the response. Example response structure from backend:
    
    ```json
    {
    	"success: true,
      "deals": [
        {
          "id": "uuid",
          "title": "Toyota Corolla",
          "price": 15000,
          "make": "Toyota",
          "model": "Corolla",
          "year": 2021,
          "mileage": 10000,
          "location": "City",
          ...
        }
      ]
    }
    ```
    
3. Database
    
    The `deals` table stores all car listings, with details such as `make`, `model`, `price`, and `transmission`. Here is the schema of this table
    
    | Column | Type | Description |
    | --- | --- | --- |
    | id | UUID | Primary key, unique identifier for each deal. Gets auto generated |
    | seller | UUID | Id of the seller posting the car. Foreign key of users model |
    | title | TEXT | Listing title |
    | description | TEXT | Detailed description of the deal |
    | price | DECIMAL | Car price |
    | make | TEXT | Car manufacturer |
    | model | TEXT | Car model |
    | year | INTEGER | Manufacture year |
    | mileage | INTEGER | Car mileage |
    | condition | TEXT | Condition (e.g., New, Used) |
    | location | TEXT | Sale location |
    | fuel_type | TEXT | Fuel type |
    | transmission | TEXT | Transmission type (e.g., Automatic, Manual) |
    | body_type | TEXT | Car body type |
    | engine_capacity | DECIMAL | Engine capacity in liters |
    | image | TEXT | Image URL |
    | status | TEXT | Status of the deal (e.g., Active, Sold, Closed) |
    | created_at | TIMESTAMP | Timestamp when the listing was created, set automatically |

**View Deal**

The `ViewListing` page in React fetches and displays detailed information about a specific deal, including the car's details, pricing, and bid history. This is a dynamic page and all the deals are accessible through frontend through `/view/dealId` Users can place bids or accept existing ones based on their role as the seller or buyer.

1. Frontend (`ViewListing.js`)
    
    When the page loads, we take the dynamic `dealId` and send a get request to server on `/deals/dealId` to get the deal details. The page displays deal details in a card layout, which includes the car’s image, title, description, and key details like type, capacity, and fuel type. Based on the user’s role (buyer or seller), different UI elements are shown. Sellers can see all bids, while buyers only see their own bids. The "Place Bid" button is only visible to buyers who are not the seller. Sellers can accept a bid and unlock the buyer's contact information. For each bid, a "lock" icon appears if the bid is not yet accepted.
    
2. Backend (`get_deal_by_id`)
    
    The backend handles the `/deals/dealId` route, querying the `Deal` model to retrieve the deal from the database. Here is how this api url works in curls
    
    ```bash
    curl -X GET "API_URL/deals/dealId" 
    ```
    
    This route uses the User model and Deal model together to return data based on the current user role. Here are key fields that this route returns
    
    ```json
    {
    	"success": true,
      "deal": {}, // An object, data for the deal
    	"is_seller": true, // True if the currently logged in user is the seller of the deal fetched
    	"seller": "Seller Name", // Always gets returned to identify the details of the seller
    	
    	// Array of bids placed on this deal
    	// For seller, all the bids are returned
    	// For buyer, only the deals that the currently 
    	// logged in user gets returned
    	"bids": [{
    		
    		"id": "uuid",
    		"amount": 7000,
    		"message": "This is a message from buyer",
    		"status": "placed", // Could be pending (for payment pending), placed and accepted (viewed by the seller)
    		"buyer_contact": "12345", // Masked if bid is not accepted by the seller
    		"buyer": "uuid",
    		"buyer_name": "Name",
    		"created_at": "date"
    		
    	}]
    }
    ```
    

**Authentication Pages**

A very important component of this entire application is to securely authenticate users. This give the bidders and seller security and also gives us a way to validate users and makes this a better platform for everyone. For this project, we are extending the authentication provided by the Django. We will authenticate users with username and password approach and use `jwt` based secure tokens for access. 

There are two key pages module on the frontend: **Sign Up** and **Login**. These functionalities are implemented using API views that handle user registration and login processes. Below are the details of each page:

The backend handles registration of a new user with register end point `/auth/register` route, querying the `User` model to create a new user. The `register_user` user view, accepts user data in the request body, validates the data and saves the user to the database if the data is valid. Here is a curl equivalent of this route

```bash
curl -X POST "API_URL/auth/register" -H "Content-Type: application/json" -d '{ "first_name": "name", "last_name": "name", "username": "newuser", "password": "pass" }' 
```

The backend handles login requests with another route `/auth/login` and returns a secure token for use with other api requests. Here is a sample request to this route

```bash
curl -X POST "API_URL/auth/login" -H "Content-Type: application/json" -d '{ "username": "newuser", "password": "pass" }'
```

The `login_user` view handles this request in the backend and authenticates the user using Django's `authenticate` method. If valid, generates an access token using `AccessToken.for_user`. This token is set to expire in one day but this setting be configured by `settings.py` file in the root of the project by editing the `SIMPLE_JWT` configurations. In subsequent request to the server, this token can be passed in the authorization header as token bearer.

**Create A New Deal**

The Create New Deal functionality allows users to create new property listings in the system. This process involves a frontend form component that collects listing details and communicates with a Django backend API endpoint. 

1. Frontend (`CreateListing.js`)
    
    This is a secure page and on the frontend, this page can be accessed from `/create` route. This page first checks for user authentication and redirects user to login page is required. Otherwise this page loads a form. The form captures essential property details like title, description, price, and location. The frontend validates this data to ensure all required fields are properly filled before proceeding. After submission, the form does data validation and sends a POST request to the backend's `/deals/` endpoint. Then we redirect user to the deal view page.
    
2. Backend (`deals`)
    
    When the backend receives a POST request at the `/deals/` endpoint, it first validates the authentication token from the request headers to ensure the user is authorized. If the token is valid, the Django server processes the incoming property data through model serializers, which validate the data structure and types. The validated data is then used to create a new Deal model instance in the database. After successful database creation, the server responds with a 201 Created status and returns the newly created deal id. Here is sample response
    
    ```json
    { "success": true, "dealId": "uuid" }
    ```
    

**Creating Bid**

From the view a deal page, a user can place a bid. The bid placement system allows users to make offers on vehicle listings through a secure, integrated payment flow using Stripe. Here's how the different components interact:

1. Frontend (`PlaceBid.js`)
    
    When the user clicks the place bid button on the view deal page, the user gets redirecting to place bid page at `/bid/dealId` url on the frontend. This page first check the authentication status of the user and then loads a form. This form collects bid amount, a message and the user contact address. When a bid is submitted, the frontend makes an authenticated POST request to `/deals/dealId/bids/` route. Authentication is handled via JWT tokens in the Authorization header. 
    
2. Backend (`create_bid`)
    
    The backend validates the request and creates a pending bid record. Integrates with Stripe to create a checkout session. Returns a redirect URL to the Stripe payment page. Here is sample response form this api route.
    
    ```json
    { "success": true, "redirect_url": "stripe checkout page url" }
    ```
    
3. Stripe flow
    
    From backend we initiate a stripe checkout flow. We send a price id (of the service that we are selling, here place bid price id is provided) and a webhook url to stripe. User is redirected to Stripe's checkout page and upon successful payment, Stripe triggers a webhook `webhook/bids/bidId/activate/` . This webhook validates the bid and the confirm the status of the payment and redirect user to the frontend on view deal page.
    
    The listing page automatically reflects new bids. Sellers can see buyer contact information after accepting bids. 
    
4. Database
    
    The `bids` table stores bids with reference to the `dealId` and the user id as `buyer`. Here is the complete schema of this model.
    
    | Field | Type | Description |
    | --- | --- | --- |
    | id | UUID | Primary key, automatically generated |
    | deal | UUID | Reference to the vehicle listing |
    | buyer | UUID | Reference to the bidding user |
    | amount | Decimal | Bid amount |
    | message | TEXT | Optional message to seller |
    | contact | TEXT | Buyer's contact information |
    | status | TEXT | Status of bid (pending/ placed/ accepted) |
    | created_at | DateTime | Timestamp of bid creation |

**Accept Bid**

The bid acceptance system enables sellers to unlock buyer contact information through a secure payment flow using Stripe. Here's how the acceptance flow works:

1. Frontend (`ViewListing.js`)
    
    On the view listing page, the sellers see a list of received bids on their listing. Each bid displays; buyer name, bid amount and buyer contact. But the contact number is initially masked. This is meant to create a business model around the platform, but along with that, it also servers a very important purpose; it aligns the incentive of buyers and sellers. Buyers pay so that sellers receive high quality leads. And sellers have to pay so that they are very sure that they are not abusing the platform to get contact address of buyers. This way, we protect our users and create more reliable platform. When a seller clicks to unlock a bid, the frontend makes an authenticated POST request to `/bids/bidId/unlock/`
    
2. Backend (`unlock_bid`)
    
    The backend validates the seller's ownership of the listing and creates a Stripe checkout session for the unlock fee. And we return a redirect URL to the Stripe payment page.
    
3. Stripe flow
    
    Seller is redirected to Stripe's checkout page and upon successful payment, Stripe triggers a webhook `webhook/bids/bidId/accept/` . This webhook validates the bid and the deal and changes the status of the bid placed to `accepted`. Afterwards the user is redirected to the view deal page on the frontend and buyer’s contact information becomes visible to the user.

### Deployment Guideline

This document outlines the steps to deploy your Django application, including database setup, Heroku deployment, Stripe integration, and ongoing maintenance. There are two core objectives, setup the database and deploy the site to Heroku for disribution.

For database, we are using **Neon**. Neon offers a serverless PostgreSQL database that scales automatically, making it an ideal choice for modern applications. Here's how to set up and configure it with Django.

1. Create a Neon Account: Sign up at [neon.tech](https://neon.tech/) and log in to access the dashboard.

2. Create a New Project: From the dashboard, create a new project. Once completed, Neon will provide:

    - A database connection string.
    - The database name.
    - User credentials (username and password)
3. Retrieve Connection Details: Copy the connection string and credentials for later use in your Django application.

4. Configure Django: Open your `settings.py` file and replace `<database_name>`, `<username>`, `<password>`, `<host>`, and `<port>` with the values provided by Neon.

    
    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': '<database_name>',
            'USER': '<username>',
            'PASSWORD': '<password>',
            'HOST': '<host>',
            'PORT': '<port>'
        }
    }
    ```
    
5. Ensure that the required dependencies are included in your `requirements.txt` file:

    
    ```
    psycopg2-binary
    ```
    
6. Run migrations to apply the database schema:
    
    ```bash
    python manage.py migrate
    ```
    

Next step is deploying our app to **Heroku** for production access. Our project utilizes a monorepo structure with two separate applications (e.g., frontend and backend). Below is a step-by-step guide to deploy these apps using Heroku.

1. Install and Log in to Heroku CLI: Ensure the Heroku CLI is installed.

    
    ```bash
    heroku login
    ```
    
2. Create Heroku Applications: For each application (frontend and backend), create a separate Heroku app:

    
    ```bash
    heroku create wheels-hub --remote heroku-frontend
    
    heroku create wheels-hub-backend --remote heroku-backend
    ```
    
3. Next to deploy the application, we will use git subtree feature to push the subfolders to heroku

    
    ```json
    git subtree push --prefix frontend heroku-frontend main
    
    git subtree push --prefix backend heroku-backend main
    ```
    
4. Also, to setup environment variable, this is the command, or we can also use the Heroku dashboard for this

    
    ```json
    heroku config:set VAR_NAME=value --app <app-name>
    ```
    

Finally to get logs and monitor and manage our application over time, these some of the important considerations

1. Monitor Logs: Use the Heroku CLI to monitor logs:

    
    ```bash
    heroku logs --tail --app <app-name>
    ```
    
2. Track Database Performance: Regularly check Neon's dashboard for metrics such as query performance and active connections.

3. Stripe Activity: Monitor payments and webhook events in the Stripe dashboard.

4. Alerts and Metrics: Set up alerts for error rates, response times, and other key metrics on Heroku.

### Framework & Package Descriptions:

Backend:

Django: Main web framework for building the backend

djangorestframework: For building REST APIs

django-cors-headers: Handles Cross-Origin Resource Sharing (CORS)

python-dotenv & django-environ: Environment variable management

psycopg2-binary: PostgreSQL database adapter

djangorestframework-simplejwt: JWT authentication

drf-yasg: API documentation generator

Frontend:

react: Core React library

react-dom: React rendering for web

@reduxjs/toolkit & react-redux: State management

axios: HTTP client for API requests

react-router-dom: Client-side routing

These packages provide the essential functionality needed for a Django-React application while keeping dependencies minimal. Additional packages can be added based on specific project requirements.