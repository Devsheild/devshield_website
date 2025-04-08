import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HowItWorksCard from './HowItWorksCard';
import './Timeline.css'

// const howItWorksData = [
//     {
//         header: "1. Download our application within EHR ",
//         text: "Deploy our Google Workspace app with a few clicks."
//     },
//     {
//         header: "2. Pulse Surveys (Optional)",
//         text: "Every day, engineers will receive a small popup featuring a single question, measuring their happiness and gathering suggestions."
//     },
//     {
//         header: "3. Data collection",
//         text: "Our platform carefully analyzes every calendar invite, enforcing best practices like redirects to office hours and protecting focus time."
//     },
//     {
//         header: "4. AI-powered insight generation",
//         text: "From this wealth of data, our AI model generates curated insights, enabling informed decision-making at its best. But wait, there's more."
//     }
// ];
const howItWorksData = [
    {
      header: "1. Download DevShield in Your EHR",
      text: "Quickly install DevShield within your existing EHR system. Our solution is designed for easy setup, so you can start protecting patient data right away."
    },
    {
      header: "2. Real-Time Interpretation & Transcription",
      text: "DevShield bridges language barriers and documentation gaps by automatically translating conversations and generating accurate, on-the-fly transcriptions."
    },
    {
      header: "3. Automated Summaries",
      text: "Each patient encounter is summarized in concise, clinically relevant notes that can be uploaded directly to the EHR—saving providers from manual charting."
    },
    {
      header: "4. Streamlined Documentation & Billing",
      text: "DevShield supports additional workflow tasks like pre-authorization and billing documentation. Spend less time on paperwork and more time caring for patients."
    }
  ];
export default function HowItWorks() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: 'hsl(220, 30%, 2%)',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    {/* <Typography component="h2" variant="h4">
                        How it works
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        We providing seamless integration with Google workspace, daily surveys, and advanced analytics&mdash;ensuring you have complete visibility at all times.
                    </Typography> */}
                    <Typography component="h2" variant="h4">
                        How It Works
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        DevShield seamlessly integrates with your EHR system, offering real-time interpretation, transcription, 
                        and automated summaries. By bridging language gaps and reducing administrative burdens, we free 
                        clinicians to focus on delivering better patient care.
                        </Typography>
                </Box>


                <div class="timeline">
                    <div class="timeline__component">
                        <div class="timeline__date timeline__date--right"></div>
                    </div>
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                    </div>
                    <HowItWorksCard
                        header={howItWorksData[0].header}
                        text={howItWorksData[0].text}
                    />
                    <HowItWorksCard
                        header={howItWorksData[1].header}
                        text={howItWorksData[1].text}
                    />
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                    </div>
                    <div class="timeline__component">
                        <div class="timeline__date"></div>
                    </div>
                    <div class="timeline__component">
                        <div class="timeline__date timeline__date--right"></div>
                    </div>
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                    </div>
                    <HowItWorksCard
                        header={howItWorksData[2].header}
                        text={howItWorksData[2].text}
                    />
                    <HowItWorksCard
                        header={howItWorksData[3].header}
                        text={howItWorksData[3].text}
                    />
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                        <div class="timeline__point timeline__point--bottom"></div>
                    </div>
                    <div class="timeline__component timeline__component--bottom">
                        <div class="timeline__date"></div>
                    </div>
                </div>

            </Container>
        </Box>
    );
}
