import React from "react";
import {
  Box,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/joy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import themes from "../themes";

const Footer = () => {
  // Simulated data coming from the backend
  const aboutLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "My Bids", href: "/bids" },
    { label: "My Deals", href: "/deals" }
  ];

  const communityLinks = [
    { label: "Events", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Podcast", href: "#" },
    { label: "Invite a friend", href: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61568960128214" },
    { label: "Instagram", href: "https://www.instagram.com/wheelshubcardealer/?hl=en" },
    { label: "X", href: "https://x.com/oblivity16965" }
  ];

  return (
    <Box
      sx={{
        padding: { xs: "30px 20px", md: "100px" },
        bgcolor: "#FFFFFF",
      }}
    >
      {/* Top Row with Headings */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          justifyContent: "space-between",
          mb: 4,
          alignItems: "flex-center",
        }}
      >
        {/* WheelsHub Heading */}
        <Box sx={{ maxWidth: "30%" }}>
          {/* Logo */}
          <Typography
            level="h2"
            sx={{
              marginRight: 4,
              color: themes.colors.primary,
              fontWeight: "bold",
            }}
          >
            WheelsHub
          </Typography>

          {/* Subheading */}
          <Typography level="body2" color="text.secondary" sx={{ mt: 2 }}>
            Providing affordable car buying and selling services with secure and
            convenient transactions.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5 }}>

            <Typography level="body2" color="text.secondary" sx={{ mb: 5 }}>
              Accepted Payment Methods:
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <img 
                src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
                alt="Visa"
                style={{ height: 15 }}
              />
              <img
                src="/images/mastercard.svg"
                alt="Mastercard" 
                style={{ height: 30 }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
              <Typography level="body2" color="text.secondary" sx={{ mr: 1 }}>
                Payments facilitated by
              </Typography>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                alt="Stripe"
                style={{ height: 20 }}
              />
            </Box>

          </Box>
        </Box>

        {/* Right Section Container */}
        <Box
          sx={{
            display: "flex",
            marginLeft: "auto",
            gap: 20,
            maxWidth: "70%",
            alignItems: "flex-start",
          }}
        >
          {/* Socials Heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              level="h6"
              color="text.secondary"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Socials
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="neutral"
                  underline="none"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* About Heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              level="h6"
              color="text.secondary"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="neutral"
                  underline="none"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Accordion for smaller screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ mb: 2 }}>About</Typography>{" "}
            {/* Added margin-bottom */}
          </AccordionSummary>
          <AccordionDetails>
            {aboutLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="neutral"
                underline="none"
                sx={{ display: "block", mb: 2 }}
              >
                {link.label}
              </Link>
            ))}
          </AccordionDetails>
          <Divider />
        </Accordion>

        <Accordion
          sx={{
            mt: 2,
            "&:hover": {
              bgcolor: "transparent",
              color: "inherit", // Keeps the color the same on hover
              textDecoration: "none", // No underline or decoration on hover
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                mb: 2,
              }}
            >
              Socials
            </Typography>{" "}
          </AccordionSummary>
          <AccordionDetails>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="neutral"
                underline="none"
                sx={{ display: "block", mb: 2 }}
              >
                {link.label}
              </Link>
            ))}
          </AccordionDetails>
          <Divider />
        </Accordion>
      </Box>

      {/* Bottom Copyright and Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "none" },
          justifyContent: "space-between",
          borderTop: "1px solid #e0e0e0",
          paddingTop: 2,
          mt: 2,
        }}
      >
        <Typography level="body2" color="text.secondary">
          © 2024 WheelsHub. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "none" },
            gap: { xs: 0, md: 3 },
          }}
        >
          <Link href="/privacy" color="neutral" underline="none">
            <Typography level="body2" color="text.secondary">
              Privacy & Policy
            </Typography>
          </Link>
          <Link href="/terms" color="neutral" underline="none">
            <Typography level="body2" color="text.secondary">
              Terms & Condition
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
