import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function PrivacyPolicy() {
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                Last updated: 01/27/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" paragraph>
                DevShield ("we," "our," or "us") values your privacy and is committed to protecting your personal data.
                This Privacy Policy outlines how we collect, use, and safeguard your information when you use our app.
            </Typography>
            <Typography variant="h6" gutterBottom>1. Information We Collect</Typography>
            <Typography variant="body1">
                <strong>Authentication Data:</strong> We collect your email address and other profile information necessary to authenticate your account via third-party login providers.
            </Typography>
            <Typography variant="body1">
                <strong>Calendar Data:</strong> With your explicit consent, we access your calendar data (e.g., event details, times, and attendees) to provide core app functionalities, including scheduling insights and features like "Meeting-Free Friday." We do not collect or store calendar data without your permission.
            </Typography>
            <Typography variant="body1">
                <strong>Usage Data:</strong> We collect information about how you interact with the app, such as features used, actions taken, and preferences set (e.g., enabling "Meeting-Free Friday").
            </Typography>
            <Typography variant="body1">
                <strong>Device Information:</strong> We may collect data about your device, including operating system, browser type, and app version, to ensure compatibility and improve user experience.
            </Typography>
            <Typography variant="h6" gutterBottom>2. How We Use Your Information</Typography>
            <Typography variant="body1">
                - To authenticate and provide secure access to your account.<br />
                - To process and analyze calendar data for productivity insights and scheduling recommendations, including implementing "Meeting-Free Friday" and similar features.<br />
                - To improve our app’s features, functionality, and overall user experience.<br />
                - To send notifications related to app updates, feature changes, or account security.
            </Typography>
            <Typography variant="h6" gutterBottom>3. Meeting-Free Friday</Typography>
            <Typography variant="body1">
                - When enabled, the "Meeting-Free Friday" feature helps you block Fridays on your calendar for focused work or personal time.<br />
                - The feature adjusts your calendar settings with your explicit permission. You can enable, modify, or disable this feature at any time.<br />
                - Any changes made through this feature will only be applied to your connected calendar and will not affect others' schedules unless explicitly shared by you.
            </Typography>
            <Typography variant="h6" gutterBottom>4. Data Sharing</Typography>
            <Typography variant="body1">
                - We do not sell or rent your personal data to third parties.<br />
                - We may share your information with trusted service providers or partners strictly for purposes related to the app’s operation, under legally binding agreements that ensure your data is protected.<br />
                - We may disclose data if required to comply with legal obligations, enforce our terms, or protect the rights and safety of DevShield or others.
            </Typography>
            <Typography variant="h6" gutterBottom>5. Data Retention</Typography>
            <Typography variant="body1">
                - Your data is retained only as long as necessary to provide our services, fulfill the purposes outlined in this Privacy Policy, or comply with legal obligations.<br />
                - Calendar data is stored temporarily and processed in real time, after which it is deleted unless required for providing specific features.
            </Typography>
            <Typography variant="h6" gutterBottom>6. Your Rights</Typography>
            <Typography variant="body1">
                - You can withdraw consent for calendar access at any time through the app settings/contacting support.<br />
                - You can request access to, correction of, or deletion of your personal data by contacting us at admin@devshield.org.<br />
                - You have the right to restrict processing or object to specific uses of your data, where applicable.
            </Typography>
            <Typography variant="h6" gutterBottom>7. Security</Typography>
            <Typography variant="body1">
                - We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction.<br />
                - However, no system is completely secure. You are responsible for safeguarding your account credentials.
            </Typography>
            <Typography variant="h6" gutterBottom>8. Changes to This Policy</Typography>
            <Typography variant="body1">
                - We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting.<br />
                - If significant changes are made, we will notify you via email or an in-app notification.
            </Typography>
            <Typography variant="h6" gutterBottom>9. Contact Us</Typography>
            <Typography variant="body1">
                If you have any questions or concerns about this Privacy Policy or your data, please contact us at <a href="mailto:admin@devshield.org" style={{ color: '#0088FE' }}>admin@devshield.org</a>.
            </Typography>
        </Container>
    );
}
