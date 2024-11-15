import React, { useState } from "react";
import { Box, Alert, CircularProgress, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import ConfirmationSection from "../components/ViewListing/ConfirmationSection";
import FormSection from "../components/ViewListing/FormSection";

const Contact = () => {

  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Store data about a bid
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: "", message: "" });

  // Form field configurations
  const contactFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      sm: 12
    },
    {
      name: 'email', 
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      sm: 12
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'What would you like to tell us?',
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

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
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
    setSubmitStatus({ show: true, type: "success", message: "Submitting your message..." });

    // Prepare data for submission
    const bidData = {

      name: formData.name ? formData.name.toLowerCase() : "",
      email: formData.email ? formData.email.toLowerCase() : "",
      message: formData.message ? formData.message.toLowerCase() : ""

    };

    // Send request to server
    try {

      const response = await fetch(`https://api.web3forms.com/submit`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message, access_key: process.env.REACT_APP_EMAIL_KEY })

      });

      // Convert to json
      const data = await response.json();

      // Check if response is ok
      if (response.ok) {

        setSubmitStatus({ show: true, type: "success", message: "Message sent successfully" });

        // Reset form
        setFormData({ name: "", email: "", message: "" })

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

    <Box sx={{ gap: 2, mb: 4, mt: 5 }}>

      <Typography level="h2" sx={{ mb: 1 }}>Contact</Typography>

      <Typography level="body2">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</Typography>

    </Box>

    <FormSection
      title="Details"
      subtitle="Provide your details and we'll get back to you as soon as possible."
      fields={contactFields}
      formData={formData}
      errors={errors}
      onInputChange={handleInputChange}
    />

    <ConfirmationSection
      onSubmit={handleSubmit}
      step=" "
      isAgreed={isAgreed}
      message="By placing a bid, you agree to the terms and conditions"
      setIsAgreed={setIsAgreed}
    />

  </Box>
};

export default Contact;