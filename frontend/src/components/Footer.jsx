import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import FooterLogo from './FooterLogo';


export default function Footer() {
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <FooterLogo />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ 
                        width: { xs: '100%', sm: '60%' },
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                            Leading the Future of Healthcare Productivity
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                        Giving clinicians time to care, and patients a voice to be heard.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'row',
                        gap: 1,
                    }}
                >
                    <Link onClick={() => scrollToSection('features')} color="text.secondary" variant="body2" sx={{ cursor: 'pointer' }}>
                        Features
                    </Link>
                    <Link onClick={() => scrollToSection('highlights')} color="text.secondary" variant="body2" sx={{ cursor: 'pointer' }}>
                        Highlights
                    </Link>
                    <Link onClick={() => scrollToSection('usecases')} color="text.secondary" variant="body2" sx={{ cursor: 'pointer' }}>
                        Use Cases
                    </Link>
                    <Link onClick={() => navigate('/privacy-policy')} color="text.secondary" variant="body2" sx={{ cursor: 'pointer' }}>
                        Privacy Policy
                    </Link>
                    <Link onClick={() => navigate('/terms-and-conditions')} color="text.secondary" variant="body2" sx={{ cursor: 'pointer' }}>
                        Terms & Conditions
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}
