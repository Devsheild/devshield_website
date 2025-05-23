import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Chip as MuiChip } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GoogleIcon from '@mui/icons-material/Google';
import TimelineIcon from '@mui/icons-material/Timeline';
import StethoscopeIcon from '@mui/icons-material/MedicalInformation';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import thermal from '../assets/feedback.png';
import solar from '../assets/ai.png';
import deploy from '../assets/google.png';
import iso from '../assets/dashboard.png';
import mari from '../assets/mari.png';
// const items = [
//   {
//     icon: <StethoscopeIcon />,
//     title: 'Anonymous Feedback',
//     description:
//       'Our anonymous survey application fosters openness and trust, enabling engineers to share concerns without fear of retaliation.',
//     imageLight: `url(${thermal})`,
//   },
//   {
//     icon: <PsychologyIcon />,
//     title: 'AI-Powered Analysis',
//     description:
//       'Deep calendar analysis hunting for unnecessary time sinks. Advanced AI analyzes calendar invites in real-time, protecting developer focus time.',
//     imageLight: `url(${solar})`,
//   },
//   {
//     icon: <GoogleIcon />,
//     title: 'Google Workspace',
//     description:
//       'Direct integration with Google Workspace to identify thousands per engineer in savings in mere minutes.',
//     imageLight: `url(${deploy})`,
//   },
//   {
//     icon: <TimelineIcon />,
//     title: 'Dashboard insights',
//     description:
//       'Dashboard insights to provide visibility into engineer productivity and happiness over time, protecting your most valuable assets.',
//     imageLight: `url(${iso})`,
//   },
// ];
const items = [
  {
    icon: <StethoscopeIcon />,
    title: 'Meet M.A.R.I.',
    description:
      'Our anonymous survey application fosters openness and trust, enabling engineers to share concerns without fear of retaliation.',
    imageLight: `url(${mari})`,
  },
  {
    icon: <LanguageIcon />,
    title: 'Support for 57 languages',
    description:
      'Real-time audio translation between providers and patients, bridging the divide to the 60% of the world that doesnt speak fluent English.',
    imageLight: `url(${solar})`,
  },
  {
    icon: <DescriptionIcon />,
    title: 'Eliminate paperwork',
    description:
      'Notes are translated, summarized and automatically typed into your friendly neighborhood E.H.R',
    imageLight: `url(${deploy})`,
  },
  {
    icon: <TimelineIcon />,
    title: 'Pre-authorizations and billing',
    description:
      'Eliminate manual entry and accelerate clinical workflows. From billing to pre-authorizations, it’s handled.',
    imageLight: `url(${iso})`,
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" sx={{ color: 'text.primary', mb: 2 }}>
            Putting the ❤️ back in HealthCare.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
            >
              Our software is designed to breaks down language barriers and eliminate tedious paperwork.
            </Typography>
          </div>
          <Grid container item sx={{ gap: 1, display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </Grid>
          {/* Card for xs */}
          <Card
            variant="outlined"
            sx={{ display: { xs: 'auto', sm: 'none' }, mt: 4 }}
          >
            <Box
              sx={(theme) => ({
                mb: 2,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
                backgroundImage: 'var(--items-imageLight)',
                backgroundRepeat: 'no-repeat',
                // ...theme.applyStyles('dark', {
                //   
                // }),
              })}
              style={{
                '--items-imageLight': items[selectedItemIndex].imageLight,
                '--items-imageDark': items[selectedItemIndex].imageDark,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                gutterBottom
                sx={{ color: 'text.primary', fontWeight: 'medium' }}
              >
                {selectedFeature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                {selectedFeature.description}
              </Typography>
              {/* <Link
                color="primary"
                variant="body2"
                sx={{
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link> */}
            </Box>
          </Card>
          {/* Stack for sm and up */}
          <Stack
            direction="column"
            spacing={2}
            useFlexGap
            sx={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 3,
                    height: 'fit-content',
                    width: '100%',
                    background: 'none',
                    '&:hover': {
                      background:
                        'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
                      borderColor: 'primary.light',
                      boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)',
                      ...theme.applyStyles('dark', {
                        background:
                          'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
                        borderColor: 'primary.dark',
                        boxShadow: '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
                      }),
                    },
                  }),
                  selectedItemIndex === index &&
                    ((theme) => ({
                      backgroundColor: 'action.selected',
                      borderColor: 'primary.light',
                      ...theme.applyStyles('dark', {
                        borderColor: 'primary.dark',
                      }),
                    })),
                ]}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={[
                      (theme) => ({
                        color: 'grey.400',
                        ...theme.applyStyles('dark', {
                          color: 'grey.600',
                        }),
                      }),
                      selectedItemIndex === index && {
                        color: 'primary.main',
                      },
                    ]}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      gutterBottom
                      sx={{ color: 'text.primary', fontWeight: 'medium' }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 1.5 }}
                    >
                      {description}
                    </Typography>
                    {/* <Link
                      color="primary"
                      variant="body2"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                      sx={{
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link> */}
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                minWidth: 420,
                minHeight: 500,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage: 'var(--items-imageLight)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              })}
              style={{
                '--items-imageLight': items[selectedItemIndex].imageLight,
                // '--items-imageDark': items[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
