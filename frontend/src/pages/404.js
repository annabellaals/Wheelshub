// The NotFound component displays a 404 error page when users navigate to non-existent routes.
// It provides a simple interface with an error message and a button to return to the home page.
// The component uses Joy UI components for consistent styling with the rest of the application.

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

export default NotFound;
