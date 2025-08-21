import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Company Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              L Care Construction Co.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Building excellence through innovation and dedication. Your trusted
              partner in construction since 2006.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Lane No. 339, Nandoshi Road
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Near Kalpakruksh English Medium School
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Kirkatwadi, Pune - 411024
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +91 7775919088
            </Typography>
            <Typography variant="body2">
              Email: lcareconstruction@hotmail.com
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <MuiLink
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              About Us
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/services"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Services
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/projects"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Projects
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ display: 'block' }}
            >
              Contact
            </MuiLink>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} L Care Construction All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 