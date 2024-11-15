// The Privacy Policy component outlines how WheelsHub handles user data and privacy
// It provides detailed information about data collection, usage, and user rights

// Libs
import React from "react";
import { Box, Typography } from "@mui/joy";
import theme from "../themes";

const Terms = () => {
  return (
    <Box sx={{ padding: { xs: '30px 20px', md: '100px' }, maxWidth: '900px', margin: '0 auto' }}>
      
      <Box sx={{ mb: 8 }}>
        <Typography level="h2" sx={{ mb: 4, color: theme.colors.primary }}>
          Terms of Service
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Welcome to WheelsHub. By accessing or using our automotive marketplace platform, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services. If you do not agree with any part of these terms, you may not use our platform.
        </Typography>

        {/* Section 1 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Account Registration and Usage</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
        </Typography>

        {/* Section 2 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Listing and Transaction Rules</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          When listing vehicles, you must provide accurate and complete information about the vehicle's condition, history, and ownership. False or misleading listings are prohibited and may result in account termination.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          All transactions must be conducted through our platform. Attempts to circumvent our system or avoid platform fees are prohibited and may result in account suspension.
        </Typography>

        {/* Section 3 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>User Conduct and Prohibited Activities</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Users must not engage in fraudulent activities, harassment, or any behavior that disrupts the platform's operation or other users' experience.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Prohibited activities include: spam, unauthorized data collection, attempting to access other users' accounts, and posting illegal or prohibited content.
        </Typography>

        {/* Section 4 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Fees and Payments</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We charge fees for certain services on our platform. All applicable fees will be clearly disclosed before any transaction. You agree to pay all fees and applicable taxes associated with your use of our services.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Payment terms are binding, and failure to pay may result in account suspension and collection actions.
        </Typography>

        {/* Section 5 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Disclaimer and Limitation of Liability</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Our platform is provided "as is" without warranties of any kind. We are not responsible for the accuracy of vehicle listings or the conduct of users on our platform.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
        </Typography>

        {/* Section 6 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Modifications to Terms</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our platform. Your continued use of WheelsHub after any changes indicates your acceptance of the modified terms.
        </Typography>

        {/* Last Modified Date */}
        <Typography level="body-md" sx={{ mt: 6, color: 'text.secondary' }}>
          Last modified: November 15, 2024
        </Typography>

      </Box>
    </Box>
  );
};

export default Terms;
