import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
  id="faq"
  sx={{
    pt: { xs: 4, sm: 12 },
    pb: { xs: 8, sm: 16 },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
  }}
>
  <Typography
    component="h2"
    variant="h4"
    sx={{
      color: 'text.primary',
      width: { sm: '100%', md: '60%' },
      textAlign: { sm: 'left', md: 'center' },
    }}
  >
    Frequently asked questions
  </Typography>
  <Box sx={{ width: '100%' }}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <Typography component="h3" variant="subtitle2">
          How does DevShield help with language barriers in healthcare?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          DevShield uses real-time AI-powered interpretation and transcription to help providers communicate with patients in over 100 languages—no human interpreter required.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2d-content"
        id="panel2d-header"
      >
        <Typography component="h3" variant="subtitle2">
          Can DevShield integrate with our existing EHR system?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          Yes! DevShield integrates with major EHR systems like Epic, automatically uploading summaries and transcriptions into the patient record.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3d-content"
        id="panel3d-header"
      >
        <Typography component="h3" variant="subtitle2">
          Is patient data secure with DevShield?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          Absolutely. DevShield is built with a HIPAA-first architecture and is pursuing SOC II certification. Data is encrypted and kept in isolated environments per customer.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4d-content"
        id="panel4d-header"
      >
        <Typography component="h3" variant="subtitle2">
          Do clinicians need to chart after a patient interaction?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          No! DevShield transcribes and summarizes the encounter in real time, auto-generating notes that can be reviewed and submitted to the EHR.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5d-content"
        id="panel5d-header"
      >
        <Typography component="h3" variant="subtitle2">
          Can DevShield assist with billing and pre-authorizations?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          Yes. DevShield prepares the documentation necessary for billing and insurance pre-authorizations, reducing time spent on backend paperwork.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
</Container>
  );
}
