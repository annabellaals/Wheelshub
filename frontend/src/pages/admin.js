// The Admin component handles administrative functionality including viewing user messages

// Libs
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Stack, Button } from "@mui/joy";
import theme from "../themes";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Define the API endpoint URL
const API_URL = process.env.REACT_APP_API_URL;

const Admin = () => {

  // For data
  const navigate = useNavigate();

  var [messages, setMessages] = useState(null);
  var [error, setError] = useState(null);

  // Get messages on component mount
  useEffect(() => {

    const fetchMessages = async () => {

      try {

        const response = await fetch(`${ API_URL }/super/messages`, {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ localStorage.getItem("token") }`
          },
          
        });

        // If unauthorized, redirect to login
        if (response.status === 403) {
          
          // Render error
          setError("Unauthorized - Superuser access required");

          return;

        }

        if (response.status === 401) {
          
          // Render error
          navigate("/login");

          return;

        }

        // Get deals data
        const data = await response.json();

        setMessages(data.messages);

      } catch (error) {

        console.error("Error fetching messages:", error);

      }
    };

    fetchMessages();

  }, []);

  // Render error
  if (error) {

    return <Card variant="outlined" sx={{ maxWidth: "500px", mx: "auto", p: 4, my: 10, textAlign: 'center' }}>

      <Typography level="h4" sx={{ mb: 2 }}>Access Denied</Typography>
      <Typography level="body-md" sx={{ mb: 3 }}>You do not have permission to access this page. Only administrators can view this section.</Typography>

      <Button variant="solid" sx={{ bgcolor: theme.colors.primary }} onClick={() => navigate('/')}>
        Back to Home
      </Button>

    </Card>

  }

  // Show loader
  if (!messages) {

    return <Box sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}>

        <Typography level="h2" sx={{ color: theme.colors.primary }}>Wheels Hub</Typography>

      </motion.div>
    </Box>
  }

  const formatDate = (dateString) => {

    const date = new Date(dateString);

    const options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString(undefined, options);

  };

  return <Box sx={{ px: 20, py: 10 }}>

    {/* Title */}
    <Stack direction="row" alignItems="flex-start">

      {/* Dynamic title based on user type */}
      <Typography level="h5" sx={{ fontSize: "24px", fontWeight: "700", mb: 6, mr: 1 }}>Your Messages</Typography>

      {/* Count */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.primary, color: "white", borderRadius: "8px", px: 1.5, py: 1, fontSize: "14px", fontWeight: "700" }}>
        
        { String(messages.length).padStart(2, "0") }
        
      </Box>

    </Stack>

    {/* Messages list */}
    <Stack spacing={4}>

      {
        
        // Render
        messages.map((message) => <Card key={message.id} variant="outlined" sx={{ p: 4, cursor: "pointer" }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              <Box>

                <Typography level="h4" sx={{ mb: 0.5 }}>{message.name}</Typography>

                <Typography level="body-sm" color="neutral">{message.email}</Typography>

                <Typography level="body-md" sx={{ mt: 4, color: 'neutral.700', lineHeight: 1.5 }}>

                  {message.message}

                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>

                  <Typography level="body-xs" sx={{ color: 'neutral.500' }}>

                    Received on {formatDate(message.created_at)}

                  </Typography>

                </Stack>

              </Box>
              
            </Box>

          </Card>
          
        )

      }

    </Stack>

  </Box>
};

export default Admin;
