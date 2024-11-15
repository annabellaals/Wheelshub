import React, { useState } from "react";
import { Box, Alert, CircularProgress, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import ConfirmationSection from "../components/ViewListing/ConfirmationSection";
import FormSection from "../components/ViewListing/FormSection";
import { useParams } from "react-router-dom";

// API configuration
const API_URL = process.env.REACT_APP_API_URL;

const PlaceBid = () => {

  // State management
  const navigate = useNavigate();

  // Get ID from URL parameters
  const { id: dealId } = useParams(); 

  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Store data about a bid
  const [formData, setFormData] = useState({ amount: "", contact: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: "", message: "" });

  // Form field configurations
  const bidFields = [
    {
      name: "amount",
      label: "Amount",
      placeholder: "Enter your bid amount",
      type: "text",
      sm: 12
    },
    {
      name: "message",
      label: "Message",
      placeholder: "Enter your message for the seller",
      type: "textarea",
      sm: 12
    },
    {
      name: "contact",
      label: "Contact",
      placeholder: "Enter your contact information",
      type: "text",
      sm: 12
    }
  ];

  // Form handling functions
  const handleInputChange = (name, value) => {

    // Set form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // And clear errors
    if (errors[name]) {

      setErrors((prev) => ({ ...prev, [name]: "" }));

    }

  };

  const validateForm = () => {

    // Function will validate the form data
    const newErrors = {};

    if (!formData.amount) newErrors.amount = "Amount is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = async () => {

    // Check if user agreed to terms
    if (!isAgreed) {

      setSubmitStatus({ show: true, type: "danger", message: "You must agree to the terms and conditions before submitting." });

      return;

    }

    // Form validation
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);
      setSubmitStatus({show: true, type: "danger", message: "Please fill in all required fields" });

      return;
    }

    // Show loading spinner and submission message
    setLoading(true);
    setSubmitStatus({ show: true, type: "success", message: "Submitting your listing..." });

    // Prepare data for submission
    const bidData = {

      amount: formData.amount ? formData.amount.toLowerCase() : "",
      contact: formData.contact ? formData.contact.toLowerCase() : "",
      message: formData.message ? formData.message.toLowerCase() : ""

    };

    // Send request to server
    try {

      const response = await fetch(`${ API_URL }/deals/${dealId}/bids/`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        body: JSON.stringify(bidData)

      });

      // Convert to json
      const data = await response.json();

      // Check if response is ok
      if (response.ok) {

        setSubmitStatus({ show: true, type: "success", message: "Bid created successfully" });

        // Open in same tab rather than new window
        window.location.href = data.redirect_url;
      } 
      else {

        const errorMessage = data?.detail || "Failed to create bid. Please try again.";

        setSubmitStatus({ show: true, type: "danger", message: errorMessage });

      }

    } 
    catch (error) {

      setSubmitStatus({ show: true, type: "danger", message: "An error occurred. Please try again." });

    } 
    finally {

      setLoading(false); // Hide loading spinner

    }

  };

  // Component render
  return <Box sx={{ maxWidth: "800px", minWidth: "300px", mx: "auto", p: 3, width: "90%", minHeight: "100vh" }}>

    {
    
      submitStatus.show && 

        <Alert color={submitStatus.type === "success" ? "success" : "danger"} sx={{ mb: 2 }} onClose={() => setSubmitStatus({ show: false, type: "", message: "" })}>
        
        {submitStatus.message}

      </Alert>

    }

    {/* Show loading spinner */}
    {
    
      loading &&

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>

          <CircularProgress />

        </Box>

    }

    <Box sx={{ gap: 2, mb: 4 }}>

      <Typography level="h2" sx={{ mb: 1 }}> Create Bid</Typography>

      <Typography level="body2">Place a bid on the car you're interested in</Typography>

    </Box>

    <FormSection
      title="Bid Details"
      subtitle="Provide information about your bid"
      fields={bidFields}
      step="Step 1 of 2"
      formData={formData}
      errors={errors}
      onInputChange={handleInputChange}
    />

    <ConfirmationSection
      onSubmit={handleSubmit}
      step="Step 2 of 2"
      isAgreed={isAgreed}
      message="By placing a bid, you agree to the terms and conditions"
      setIsAgreed={setIsAgreed}
    />

  </Box>
};

export default PlaceBid;