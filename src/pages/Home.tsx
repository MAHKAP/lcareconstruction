import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TaskIcon from '@mui/icons-material/Task';
import CountUp from 'react-countup';

const MotionBox = motion(Box);

const services = [
  {
    title: 'Commercial Construction',
    description: 'State-of-the-art commercial buildings and office spaces.',
    icon: <ConstructionIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Residential Projects',
    description: 'Custom homes and residential developments.',
    icon: <ArchitectureIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Infra Development',
    description: 'Roads, bridges, and public infrastructure projects.',
    icon: <EngineeringIcon sx={{ fontSize: 60 }} />,
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" component="h1" gutterBottom>
                  Building Your Future
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Excellence in construction since 2006.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Get Started
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="/hero-image.jpg"
                  alt="Construction site"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

{/* Number Counters Section */}
<Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
  <Container maxWidth="lg">
    <Typography variant="h3" align="center" gutterBottom>
      Our Achievements
    </Typography>
    <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
      {[
        { label: 'Projects Completed', value: 250 },
        { label: 'Years of Experience', value: 14 },
        { label: 'Skilled Workers', value: 100 },
        { label: 'Cities Served', value: 5 },
      ].map((counter, index) => (
        <Grid item xs={6} md={3} key={index}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              <CountUp end={counter.value} duration={2} />+
            </Typography>
            <Typography variant="h6">{counter.label}</Typography>
          </MotionBox>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Contact us today for a free consultation and quote.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 