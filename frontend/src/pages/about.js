// The About component displays information about WheelsHub and its services.
// It provides details about the company's mission, values, and key features.

// Libs
import React from "react";
import { Box, Typography } from "@mui/joy";
import theme from "../themes";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <Box sx={{ padding: { xs: '30px 20px', md: '100px' }, maxWidth: '900px', margin: '0 auto' }}>
      
      {/* About Section */}
      <Box sx={{ mb: 8 }}>

        <Typography level="h2" sx={{ mb: 4, color: theme.colors.primary }}>
          About
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          WheelsHub is dedicated to revolutionizing the car buying and selling experience. We provide a secure, 
          transparent, and convenient platform for automotive transactions, ensuring both buyers and sellers can trade with confidence.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Founded in 2023, our mission is to create a trustworthy marketplace where automotive enthusiasts and everyday buyers
          can connect directly with sellers. We understand that purchasing a vehicle is a significant decision, which is why
          we've built our platform with security and transparency at its core.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Our team of automotive experts and technology professionals work tirelessly to ensure every transaction on WheelsHub
          is smooth, secure, and satisfactory for all parties involved. We leverage cutting-edge technology to provide
          real-time updates, secure payment processing, and comprehensive vehicle information.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Our key features include:
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography level="body-md" sx={{ mb: 6 }}>
            <strong>Secure Payment Processing</strong><br/><br/>
            Our payment system is built with security as the top priority. We've integrated with Stripe, a leading payment processor, to ensure every transaction is protected. Multiple payment methods are supported to provide flexibility for our users. For high-value purchases, we offer an escrow service that adds an extra layer of protection by holding funds until both parties are satisfied with the transaction.
          </Typography>

          <Typography level="body-md" sx={{ mb: 6 }}>
            <strong>Verified Listings and Trusted Sellers</strong><br/><br/>
            Trust is fundamental to our marketplace. Every seller goes through a comprehensive verification process before they can list vehicles. Our rating and review system provides transparency and accountability, while detailed seller profiles and transaction histories help buyers make informed decisions. We believe in creating a community of trusted automotive enthusiasts.
          </Typography>

          <Typography level="body-md" sx={{ mb: 6 }}>
            <strong>Real-time Bidding System</strong><br/><br/>
            We've engineered a sophisticated bidding system that operates in real-time. Buyers receive instant updates on auction progress and automated notifications when they're outbid. Our anti-sniping protection ensures fair competition by preventing last-second bid tactics, giving everyone a reasonable chance to participate in auctions they're interested in.
          </Typography>

          <Typography level="body-md" sx={{ mb: 6 }}>
            <strong>Vehicle History Reports</strong><br/><br/>
            Transparency in vehicle history is crucial for informed purchasing decisions. Each listing includes comprehensive reports detailing accident history, maintenance records, and ownership timeline. Our mileage verification system helps prevent fraud and ensures accuracy. We believe buyers deserve complete information about their potential purchases, helping them make confident decisions.
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ mb: 8 }}>

        <Typography level="body-md" sx={{ mb: 4 }}>
          <strong>Business Address:</strong><br /><br />
          WheelsHub Inc.<br />
          123 Auto Plaza Drive<br />
          Suite 200<br />
          San Francisco, CA 94105<br />
          United States
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          <strong>Contact Details:</strong><br /><br />
          Email: support@wheelshub.com<br />
          Phone: (555) 123-4567<br />
          Hours: Monday - Friday, 9:00 AM - 6:00 PM PST
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          For customer support inquiries, please visit our <Link to="/contact"><strong>Contact</strong></Link> page or email us directly. We aim to respond to all inquiries within 24 business hours.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
