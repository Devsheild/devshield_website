import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade'; // For rotating text animation
import { styled } from '@mui/material/styles';

import DemoInput from './DemoInput';
import shield from '../assets/shield.png';

const ImageBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  backgroundImage: `url(${shield})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

/**
 * RotatingText: cycles through an array of statements with a fade-in/out effect.
 * Adjust the timings as needed to create your desired pacing.
 */
function RotatingText() {
  // const statements = [
  //   'We help enterprises be more productive.',
  //   'We are launching a series of products to help enterprises.',
  //   'MeetingFreeFriday (Early trial available now!)',
  //   'Offloader AI for automating tedious tasks.',
  //   'Calendar-aware Slackbot (launching soon).',
  // ];
  const statements = [
    'DevShield: bridging language gaps in healthcare.',
    'Real-time interpretation & transcription to reduce burnout.',
    'Automated EHR documentation for better patient care.',
    'Spend less time on paperwork, more time with patients.',
    'Transforming healthcare workflows through HIPAA-compliant AI.'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFadeIn(false);

      // After fade-out completes (500ms), switch text and fade back in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % statements.length);
        setFadeIn(true);
      }, 500);
    }, 3000); // Show each statement for 3s before fading out

    return () => clearInterval(interval);
  }, [statements.length]);

  return (
    <Fade in={fadeIn} timeout={500}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          color: 'text.secondary',
        }}
      >
        {statements[currentIndex]}
      </Typography>
    </Fade>
  );
}

export default function HeroVideo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          alignItems: { xs: 'center', sm: 'center', md: 'left' },
          pt: { xs: 14, sm: 14, md: 0 },
          pb: { xs: 8, sm: 12, md: 0 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
            width: { xs: '100%', sm: '70%' },
          }}
        >
          {/* Top tagline */}
          <Typography
            variant="h6"
            sx={{
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              color: 'text.secondary',
              width: { sm: '100%', md: '100%' },
            }}
          >
           Giving clinicians time to care, and patients a voice to be heard.
          </Typography>

          {/* Big title line 1 */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'row' },
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              fontSize: {
                xs: 'clamp(2rem, 10vw, 2rem)',
                sm: 'clamp(3rem, 10vw, 2rem)',
                md: 'clamp(3rem, 10vw, 3.5rem)',
              },
            }}
          >
            Boosting&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              HealthCare
            </Typography>
          </Typography>

          {/* Big title line 2 */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'row' },
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              fontSize: {
                xs: 'clamp(2rem, 10vw, 2rem)',
                sm: 'clamp(3rem, 10vw, 2rem)',
                md: 'clamp(3rem, 10vw, 3.5rem)',
              },
            }}
          >
            Unleashing&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Potential
            </Typography>
          </Typography>

          {/* Rotating text replaces the bullet list */}
          <RotatingText />

          {/* Sign-up form (DemoInput) */}
          <DemoInput />
        </Stack>

        {/* Hero Image */}
        <ImageBox />
      </Container>
    </Box>
  );
}