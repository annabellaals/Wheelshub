// The Privacy Policy component outlines how WheelsHub handles user data and privacy
// It provides detailed information about data collection, usage, and user rights

// Libs
import React from "react";
import { Box, Typography } from "@mui/joy";
import theme from "../themes";

const Privacy = () => {
  return (
    <Box sx={{ padding: { xs: '30px 20px', md: '100px' }, maxWidth: '900px', margin: '0 auto' }}>
      
      <Box sx={{ mb: 8 }}>
        <Typography level="h2" sx={{ mb: 4, color: theme.colors.primary }}>
          Privacy Policy
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          At WheelsHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and 
          safeguard your information when you use our automotive marketplace platform. Please read this privacy policy 
          carefully. By using our service, you consent to the practices described in this policy.
        </Typography>

        {/* Section 1 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Information We Collect</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We collect personal identification information including your name, email address, and phone number. This allows us to verify your identity and enable communication between users.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Your account credentials are collected and securely stored to protect access to your account. We also maintain records of your transaction information and history to provide you with a complete overview of your activities on the platform.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          When listing vehicles, we collect detailed vehicle information to help buyers make informed decisions. Additionally, we store communications between users to facilitate smooth transactions and resolve any potential disputes.
        </Typography>

        {/* Section 2 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong> How We Use Your Information</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We use your information to facilitate transactions between buyers and sellers, ensuring a smooth and efficient marketplace experience. Our platform relies on accurate user data to verify identities and prevent fraudulent activities that could harm our community.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Your information enables us to process payments securely through our trusted payment processors. We also use your contact details to send important transaction updates and service notifications to keep you informed about your activities on the platform.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Additionally, we analyze user data to continuously improve our services and enhance the overall user experience. This helps us better understand your needs and optimize our platform accordingly.
        </Typography>

        {/* Section 3 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>How We Protect Your Information</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. This includes encrypted data transmission, secure server storage, and regular security audits.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Access to your personal information is restricted to authorized personnel who need it to operate, develop, or improve our services. We maintain strict internal policies governing data handling and regularly train our staff on security best practices.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but continuously work to enhance our protective measures.
        </Typography>

        {/* Section 4 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Information Sharing and Disclosure</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We share your information with other users only as necessary to facilitate transactions. For example, when you list a vehicle, certain details become visible to potential buyers, and when you make a bid, the seller can view your contact information.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We may share data with trusted third-party service providers who assist us in operating our platform, conducting our business, or servicing you. These partners are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          We may also disclose your information when required by law or if we believe that disclosure is necessary to protect our rights, comply with a judicial proceeding, court order, or legal process served on our platform.
        </Typography>

        {/* Section 5 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Your Rights and Choices</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          You have the right to access, update, or delete your personal information at any time through your account settings. You can also request a copy of the personal data we hold about you or ask us to correct any inaccurate information.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          You can choose to opt-out of certain communications, though some service-related messages are necessary for the proper functioning of your account and cannot be opted out of.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          If you wish to delete your account entirely, you can contact our support team. Please note that some information may be retained for legal or legitimate business purposes even after account deletion.
        </Typography>

        {/* Section 6 */}
        <Typography level="body-md" sx={{ mb: 3, mt: 6 }}>
          <strong>Updates to This Policy</strong>
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "last modified" date.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Your continued use of WheelsHub after such modifications will constitute your acknowledgment of the modified Privacy Policy and agreement to abide and be bound by it. We encourage you to periodically review this Privacy Policy to stay informed about how we protect your information.
        </Typography>

        {/* Last Modified Date */}
        <Typography level="body-md" sx={{ mt: 6, color: 'text.secondary' }}>
          Last modified: November 15, 2024
        </Typography>

      </Box>
    </Box>
  );
};

export default Privacy;
