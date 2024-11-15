// The Deals component displays a list of all car listings posted by the current user.
// It shows listing details including the car make/model, price, and specifications.
// Users can view and manage their posted car listings in one centralized place.
// The component provides an overview of the user's selling activity on the platform.

// Libs
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Stack, Button } from "@mui/joy";
import theme from "../themes";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Define the API endpoint URL
const API_URL = process.env.REACT_APP_API_URL;

const Deals = () => {

  // For data
  const navigate = useNavigate();

  var [deals, setDeals] = useState(null);

  // Get deals on component mount
  useEffect(() => {

    const fetchDeals = async () => {

      try {

        const response = await fetch(`${ API_URL }/user/deals`, {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ localStorage.getItem("token") }`
          },
          
        });

        // If unauthorized, redirect to login
        if (response.status === 401) {
          
          navigate("/login");

          return;

        }

        // Get deals data
        const data = await response.json();

        setDeals(data.deals);

      } catch (error) {

        console.error("Error fetching deals:", error);

      }
    };

    fetchDeals();

  }, []);

  // Show loader
  if (!deals) {

    return <Box sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}>

        <Typography level="h2" sx={{ color: theme.colors.primary }}>Wheels Hub</Typography>

      </motion.div>
    </Box>
  }

  if (deals.length === 0) {

    return <Card variant="outlined" sx={{ maxWidth: "500px", mx: "auto", p: 4, my: 10, textAlign: 'center' }}>

      <Typography level="h4" sx={{ mb: 2 }}>You haven't created any deals yet</Typography>
      <Typography level="body-md" sx={{ mb: 3 }}>Get started by creating your first listing</Typography>

      <Button variant="solid" sx={{ bgcolor: theme.colors.primary }} onClick={() => navigate('/create')}>
        Create Listing
      </Button>

    </Card>

  }

  return <Box sx={{ px: 20, py: 10 }}>

    {/* Title */}
    <Stack direction="row" alignItems="flex-start">

      {/* Dynamic title based on user type */}
      <Typography level="h5" sx={{ fontSize: "24px", fontWeight: "700", mb: 6, mr: 1 }}>Your Deals</Typography>

      {/* Count */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.primary, color: "white", borderRadius: "8px", px: 1.5, py: 1, fontSize: "14px", fontWeight: "700" }}>
        
        { String(deals.length).padStart(2, "0") }
        
      </Box>

    </Stack>

    {/* Deals list */}
    <Stack spacing={4}>

      {
        
        // Render
        deals.map((deal) => <Card key={deal.id} variant="outlined" sx={{ p: 4, cursor: "pointer" }} onClick={() => navigate(`/view/${deal.id}`)}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

              <Box>

                <Typography level="h4" sx={{ mb: 0.5 }}> {deal.make} – {deal.model}</Typography>

                <Typography level="body-sm" color="neutral" sx={{ textTransform: "capitalize" }}>{deal.body_type}</Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>

                  <Typography level="body-sm">⛽️ {deal.engine_capacity}</Typography>

                  <Typography level="body-sm">⚙️ {deal.transmission}</Typography>

                </Stack>

              </Box>

              <Typography level="h4">$ { Number(deal.price).toLocaleString() }</Typography>

            </Box>

          </Card>
          
        )

      }

    </Stack>

  </Box>
};

export default Deals;
