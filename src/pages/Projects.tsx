import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';


const MotionBox = motion(Box);

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial',
    description:
      'A state-of-the-art office complex featuring sustainable design and smart building technology.',
    image: '/projects/modernoffice.jpg',
    details:
      'This 50,000 sq ft office complex was completed in 2022. The project features LEED Platinum certification, solar panels, and advanced building automation systems.',
  },
  {
    title: 'Luxury Residential Tower',
    category: 'Residential',
    description:
      'A 30-story luxury residential tower with panoramic views and premium amenities.',
    image: '/projects/luxuryresidencial.jpg',
    details:
      'Completed in 2021, this residential tower offers 200 luxury units, a rooftop garden, fitness center, and 24/7 concierge service.',
  },
  {
    title: 'Highway Extension',
    category: 'Infrastructure',
    description:
      'A major highway extension project improving regional connectivity.',
    image: '/projects/highwayext.jpg',
    details:
      'This 10-mile highway extension project included the construction of three bridges and two interchanges, completed in 2023.',
  },
  {
    title: 'Shopping Mall Renovation',
    category: 'Commercial',
    description:
      'Complete renovation of a 20-year-old shopping mall with modern amenities.',
    image: '/projects/shoppingmall.jpg',
    details:
      'The renovation project included structural upgrades, modern facade, and interior redesign, completed in 2022.',
  },
  {
    title: 'Smart Home Community',
    category: 'Residential',
    description:
      'A sustainable smart home community with integrated technology.',
    image: '/projects/smarthome.jpg',
    details:
      'This 100-unit smart home community features solar power, smart home automation, and sustainable building materials.',
  },
  {
    title: 'Water Treatment Plant',
    category: 'Infrastructure',
    description:
      'State-of-the-art water treatment facility serving 500,000 residents.',
    image: '/projects/watertreatment.jpg',
    details:
      'The water treatment plant project included advanced filtration systems and automated monitoring technology.',
  },
];

const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(
    null
  );

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Our Projects
          </Typography>
          <Typography variant="h5">
            Showcasing our excellence in construction
          </Typography>
        </Container>
      </Box>

      {/* Category Filter */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 240 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.category}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="body1" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {selectedProject.title}
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setSelectedProject(null)}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              <Typography variant="body1" paragraph>
                {selectedProject.details}
              </Typography>
              <Chip
                label={selectedProject.category}
                color="primary"
                sx={{ mr: 1 }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
      {/* Video Gallery Section */}
<Box sx={{ bgcolor: 'grey.100', py: 8, mt: 6 }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      component="h2"
      align="center"
      gutterBottom
      sx={{ fontWeight: 700, color: 'primary.main' }}
    >
      Project Video Gallery
    </Typography>
    <Typography
      variant="body1"
      align="center"
      color="text.secondary"
      sx={{ mb: 4 }}
    >
      Explore our ongoing and completed construction projects through visual stories.
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      {[
        '/videos/video1.mp4',
        '/videos/video2.mp4',
        '/videos/video3.mp4',
        '/videos/video4.mp4',
        '/videos/video5.mp4',
        '/videos/video6.mp4',
      ].map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              width: 320,
              borderRadius: 2,
              boxShadow: 4,
              overflow: 'hidden',
            }}
          >
            <Box
              component="video"
              src={video}
              controls
              muted
              loop
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Project Walkthrough {index + 1}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Container>
</Box>

    </Box>
  );
};

export default Projects; 