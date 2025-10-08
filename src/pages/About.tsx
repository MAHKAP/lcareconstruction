import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';

const MotionBox = motion(Box);

const team = [
  {
    name: 'Chitrao M. G.',
    position: 'CEO & Founder',
    image: '/team/leader1.jpg',
  },{
    name: 'Atole M. N.',
    position: 'CEO & Founder',
    image: '/team/leader2.jpg',
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake. We emphasizes striving for the highest quality in products, services, and operations. It involves continuous improvement and a commitment to exceeding expectations',
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Safety',
    description: 'Safety is our top priority on every construction site. We ensure the well-being of employees, customers, and the public is crucial. This includes creating a safe working environment and providing safe products.',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty and transparency and with strong moral principles, even when no one is watching, is at the heart of integrity. It means being trustworthy and transparent in all dealings',
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
  },
];

const About = () => {
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
            About Us
          </Typography>
          <Typography variant="h5">
            Building excellence through innovation and dedication
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2006, L Care has grown from a small local
                contractor to one of the region's leading construction companies.
                Our journey has been marked by a commitment to quality,
                innovation, and customer satisfaction.
              </Typography>
              <Typography variant="body1" paragraph>
                Over the years, we've completed hundreds of projects across
                commercial, residential, and infrastructure sectors, earning a
                reputation for excellence and reliability.
              </Typography>
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
                src="/officebuilding.jpg"
                alt="Company building"
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

      {/* Values Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {value.icon}
                    </Box>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Our Leadership Team
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {team.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                      }}
                    />
                    <Typography variant="h6" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 