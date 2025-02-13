// The Bids component displays a list of all bids placed by the current user.
// It shows bid details including the car listing, bid amount, and bid status.
// Users can view and track all their placed bids in one centralized place.
// The component provides an overview of the user's bidding activity on the platform.

// Libs
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Stack, Button } from "@mui/joy";
import theme from "../themes";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Define the API endpoint URL
const API_URL = process.env.REACT_APP_API_URL;

const Bids = () => {

  // For data
  const navigate = useNavigate();

  var [bids, setBids] = useState(null);

  // Get bids on component mount
  useEffect(() => {

    const fetchBids = async () => {

      try {

        const response = await fetch(`${ API_URL }/user/bids`, {

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

        setBids(data.bids);

      } catch (error) {

        console.error("Error fetching bids:", error);

      }
    };

    fetchBids();

  }, []);

  // Show loader
  if (!bids) {

    return <Box sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}>

        <Typography level="h2" sx={{ color: theme.colors.primary }}>Wheels Hub</Typography>

      </motion.div>
    </Box>
  }

  if (bids.length === 0) {

    return <Card variant="outlined" sx={{ maxWidth: "500px", mx: "auto", p: 4, my: 10, textAlign: 'center' }}>

      <Typography level="h4" sx={{ mb: 2 }}>You haven't placed any bids yet</Typography>
      <Typography level="body-md" sx={{ mb: 3 }}>Get started by placing your first bid</Typography>

      <Button variant="solid" sx={{ bgcolor: theme.colors.primary }} onClick={() => navigate('/')}>
        Browse Deals
      </Button>

    </Card>

  }

  return <Box sx={{ px: 20, py: 10 }}>

    {/* Title */}
    <Stack direction="row" alignItems="flex-start">

      {/* Dynamic title based on user type */}
      <Typography level="h5" sx={{ fontSize: "24px", fontWeight: "700", mb: 6, mr: 1 }}>Your Bids</Typography>

      {/* Count */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.primary, color: "white", borderRadius: "8px", px: 1.5, py: 1, fontSize: "14px", fontWeight: "700" }}>
        
        { String(bids.length).padStart(2, "0") }
        
      </Box>

    </Stack>

    {/* Deals list */}
    <Stack spacing={4}>

      {
        
        // Render
        bids.map((bid) => <Card key={bid.id} variant="outlined" sx={{ p: 4, cursor: "pointer" }} onClick={() => navigate(`/view/${bid.deal}`)}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

              <Box>

                <Typography level="h4" sx={{ mb: 0.5 }}> {bid.make} – {bid.model}</Typography>

                <Typography level="body-sm" color="neutral" sx={{ textTransform: "capitalize" }}>{bid.body_type}</Typography>

              </Box>

              <Stack spacing={1} sx={{ textAlign: 'right' }}>

                <Typography level="h4">$ { Number(bid.amount).toLocaleString() }</Typography>

                <Typography level="body-sm" color="neutral">Listed at $ { Number(bid.price).toLocaleString() }</Typography>

              </Stack>

            </Box>

          </Card>
          
        )

      }

    </Stack>

  </Box>
};

export default Bids;
