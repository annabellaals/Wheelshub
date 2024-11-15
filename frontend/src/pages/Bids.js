// The Bids component displays a list of all bids created by the current user.
// It shows bid details including the associated listing, bid amount, and status.
// Users can view their bid history and track the status of their active bids.
// The component provides a centralized view of the user's bidding activity.

// Libs
import React from "react";
import { Box, Typography, Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: 3, px: 2, }}>
      
      <Typography level="h1" color="primary">
        404
      </Typography>
      
      <Typography level="h4">
        Looks like you've taken a wrong turn
      </Typography>
      
      <Typography level="body-md" textAlign="center" sx={{ mb: 2 }}>
        The page you're looking for has driven off somewhere else.
      </Typography>

      <Button variant="solid" color="primary" size="lg" onClick={() => navigate('/')}>
        Back to Home
      </Button>

    </Box>
  );
};

export default Bids;
