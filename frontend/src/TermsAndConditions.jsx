import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

export default function TermsAndConditions() {
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>
                Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph>
                Last updated: 01/27/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" paragraph>
                Welcome to DevShield ("the App"). By accessing or using the App, you agree to these Terms and Conditions ("Terms"). If you do not agree, do not use the App.
            </Typography>
            <Typography variant="h6" gutterBottom>1. Use of the App</Typography>
            <Typography variant="body1">
                - The App is provided "as is" and "as available." We do not guarantee uninterrupted access or functionality.<br />
                - You must use the App only for lawful purposes and in compliance with these Terms.
            </Typography>
            <Typography variant="h6" gutterBottom>2. User Responsibilities</Typography>
            <Typography variant="body1">
                - You agree to provide accurate and complete information during registration.<br />
                - You are responsible for maintaining the confidentiality of your account credentials.<br />
                - You are responsible for any activities conducted through your account.
            </Typography>
            <Typography variant="h6" gutterBottom>3. Prohibited Actions</Typography>
            <Typography variant="body1">
                - Unauthorized access or use of another user's account.<br />
                - Reverse-engineering, modifying, or distributing the App without our consent.<br />
                - Uploading malicious code or interfering with the App's operation.<br />
                - Using the App to conduct illegal or unauthorized activities.
            </Typography>
            <Typography variant="h6" gutterBottom>4. Calendar Access</Typography>
            <Typography variant="body1">
                - By granting calendar access, you consent to our processing of your calendar data as outlined in our Privacy Policy.<br />
                - You may revoke calendar access at any time through your account settings.<br />
                - We are not responsible for inaccuracies or disruptions caused by third-party calendar integrations.
            </Typography>
            <Typography variant="h6" gutterBottom>5. Intellectual Property</Typography>
            <Typography variant="body1">
                - All content, features, and intellectual property in the App are owned by DevShield.<br />
                - You may not reproduce, distribute, or create derivative works of the App without prior written consent.
            </Typography>
            <Typography variant="h6" gutterBottom>6. Limitation of Liability</Typography>
            <Typography variant="body1">
                - We are not liable for any indirect, incidental, or consequential damages resulting from your use of the App.<br />
                - Our maximum liability for direct damages will not exceed the amount you paid for the App (if any).<br />
                - Your use of the App is at your own risk.
            </Typography>
            <Typography variant="h6" gutterBottom>7. Privacy Policy</Typography>
            <Typography variant="body1">
                - Please review our <a href="/privacy-policy" style={{ color: '#0088FE' }}>Privacy Policy</a> to understand how we collect, use, and protect your data.
            </Typography>
            <Typography variant="h6" gutterBottom>8. Third-Party Services</Typography>
            <Typography variant="body1">
                - The App may integrate with third-party services such as Google Calendar.<br />
                - Your use of these services is governed by their respective terms and conditions.<br />
                - We are not responsible for their functionality, content, or actions.
            </Typography>
            <Typography variant="h6" gutterBottom>9. Dispute Resolution</Typography>
            <Typography variant="body1">
                - Any disputes arising from these Terms will be resolved through binding arbitration in Colorado, in accordance with the rules of the American Arbitration Association.<br />
                - You waive your right to participate in class-action lawsuits.
            </Typography>
            <Typography variant="h6" gutterBottom>10. Indemnification</Typography>
            <Typography variant="body1">
                - You agree to indemnify and hold harmless DevShield, its officers, employees, and affiliates from any claims, damages, or expenses arising out of your use of the App, breach of these Terms, or violation of applicable laws.
            </Typography>
            <Typography variant="h6" gutterBottom>11. Refund Policy</Typography>
            <Typography variant="body1">
                - All payments made for the App are non-refundable, unless required by applicable law.
            </Typography>
            <Typography variant="h6" gutterBottom>12. Modification of Services</Typography>
            <Typography variant="body1">
                - We reserve the right to modify, suspend, or discontinue any features of the App at any time without notice.
            </Typography>
            <Typography variant="h6" gutterBottom>13. Governing Law</Typography>
            <Typography variant="body1">
                - These Terms are governed by the laws of the United States of America and Colorado.<br />
                - Any legal action must be filed in the courts of Colorado.
            </Typography>
            <Typography variant="h6" gutterBottom>14. Entire Agreement</Typography>
            <Typography variant="body1">
                - These Terms, together with our Privacy Policy, constitute the entire agreement between you and DevShield regarding the use of the App and supersede all prior agreements or understandings.
            </Typography>
            <Typography variant="h6" gutterBottom>15. Force Majeure</Typography>
            <Typography variant="body1">
                - We are not liable for delays or failures in performance resulting from events beyond our reasonable control, including acts of God, natural disasters, governmental actions, or interruptions in telecommunications.
            </Typography>
            <Typography variant="h6" gutterBottom>16. Contact Information</Typography>
            <Typography variant="body1">
                For questions, contact us at <a href="mailto:support@devshield.org" style={{ color: '#0088FE' }}>support@devshield.org</a>.
            </Typography>
        </Container>
    );
}
