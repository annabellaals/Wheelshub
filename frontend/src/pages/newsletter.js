import React, { useState } from "react";
import { Box, Alert, CircularProgress, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import ConfirmationSection from "../components/ViewListing/ConfirmationSection";
import FormSection from "../components/ViewListing/FormSection";

const API_URL = process.env.REACT_APP_API_URL;

const Newsletter = () => {

  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Store data about a bid
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: "", message: "" });

  // Form field configurations
  const newsletterFields = [
    {
      name: 'email', 
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
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

    if (!formData.email) newErrors.email = "Email is required";

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
    setSubmitStatus({ show: true, type: "success", message: "Submitting your request..." });

    // Send request to server
    try {

      const response = await fetch(`${ API_URL }/super/newsletter/subscribe/`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email: formData.email })

      });

      // Convert to json
      const data = await response.json();

      // Check if response is ok
      if (response.ok) {

        setSubmitStatus({ show: true, type: "success", message: "Subscribed successfully" });

        // Reset form
        setFormData({ name: "", email: "", message: "" })

      } 
      else {

        const errorMessage = data?.detail || "Failed to create subscription. Please try again.";

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

    <Box sx={{ gap: 2, mb: 4, mt: 5 }}>

      <Typography level="h2" sx={{ mb: 1 }}>Newsletter</Typography>

      <Typography level="body2">Get the latest news and updates from WheelsHub.</Typography>

    </Box>

    <FormSection
      title="Details"
      subtitle="Provide your email to subscribe to our newsletter and get the latest news and updates."
      fields={newsletterFields}
      formData={formData}
      errors={errors}
      onInputChange={handleInputChange}
    />

    <ConfirmationSection
      button="Subscribe"
      onSubmit={handleSubmit}
      step=" "
      isAgreed={isAgreed}
      message="By sending a message, you agree to the terms and conditions"
      setIsAgreed={setIsAgreed}
    />

  </Box>
};

export default Newsletter;