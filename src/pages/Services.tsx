import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MotionBox = motion(Box);

const services = [
  {
    title: 'Commercial Construction',
    description:
      'We specialize in building state-of-the-art commercial spaces that meet the highest standards of quality and efficiency.',
    image: '/services/commercial.jpg',
    features: [
      'Office buildings and corporate headquarters',
      'Retail spaces and shopping centers',
      'Hotels and hospitality venues',
      'Industrial facilities',
      'Healthcare facilities',
    ],
  },
  {
    title: 'Residential Construction',
    description:
      'From luxury homes to multi-family developments, we create living spaces that combine comfort with architectural excellence.',
    image: '/services/residential.jpg',
    features: [
      'Custom single-family homes',
      'Multi-family residential complexes',
      'Luxury condominiums',
      'Townhouse developments',
      'Renovation and remodeling',
    ],
  },
  {
    title: 'Infrastructure Development',
    description:
      'Our infrastructure projects connect communities and drive economic growth through sustainable development.',
    image: '/services/infrastructure.jpg',
    features: [
      'Road and highway construction',
      'Bridge and tunnel projects',
      'Public transportation facilities',
      'Water and wastewater systems',
      'Energy infrastructure',
    ],
  },
  {
    title: 'Project Management',
    description:
      'Our comprehensive project management services ensure your construction project is completed on time and within budget.',
    image: '/services/projectmanagement.jpg',
    features: [
      'Project planning and scheduling',
      'Budget management',
      'Quality control',
      'Safety management',
      'Contract administration',
    ],
  },
];

const Services = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5">
            Comprehensive construction solutions for every need
          </Typography>
        </Container>
      </Box>

      {/* Services List */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ display: { xs: 'block', md: 'flex' } }}>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      height: { xs: 240, md: 'auto' },
                    }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Contact us today to discuss your construction needs and get a free
            consultation.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Services; 