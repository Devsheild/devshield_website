import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';
import MenuLogo from './MenuLogo';
import DemoForm from './DemoForm';

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

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
      setOpenDrawer(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'hsla(220, 60%, 99%, 0.6)',
            boxShadow:
              '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
            ...theme.applyStyles('dark', {
              bgcolor: 'hsla(220, 0%, 0%, 0.7)',
              boxShadow:
                '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
            }),
          })}
        >
          {/* Left area with Logo and Desktop Links */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuLogo />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, gap: 1 }}>
              <Button
                variant="text"
                color="info"
                size="small"
                href="https://offloader.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Offloader AI
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                href="https://meetingfreefriday.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                MeetingFreeFriday
              </Button>
            </Box>
          </Box>

        {/* Center Text */}
        <Box sx={{ flexGrow: 1, textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
      Made with ❤️ by Solution Bridge
      </Box>

          {/* Right area: Toggle & CTA (hidden on mobile) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
            />
            <Button onClick={handleOpen} color="primary" variant="contained" size="small">
              Get Early Access
            </Button>
          </Box>

          {/* Mobile Menu Toggle */}
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                
                {/* Mobile Menu Items */}
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ borderRadius: '15px' }}
                >
                  Features
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('highlights')}
                  sx={{ borderRadius: '15px' }}
                >
                  Highlights
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('signup')}
                  sx={{ borderRadius: '15px' }}
                >
                  Sign Up
                </MenuItem>
                <MenuItem
                  component="a"
                  href="https://offloader.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ borderRadius: '15px' }}
                >
                  Offloader AI
                </MenuItem>
                <MenuItem
                  component="a"
                  href="https://meetingfreefriday.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ borderRadius: '15px' }}
                >
                  MeetingFreeFriday
                </MenuItem>

                <MenuItem
                  sx={{
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <Button onClick={handleOpen} color="primary" variant="contained" halfWidth>
                    Get Early Access
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
      <DemoForm open={open} handleClose={handleClose} email={email} setEmail={setEmail} />
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;