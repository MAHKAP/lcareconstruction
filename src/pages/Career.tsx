import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Container, Button, TextField, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

type Job = {
  title: string;
  location: string;
  type: string;
  description: string;
};

const jobs: Job[] = [
  {
    title: "Site Supervisor (10 Nos.)",
    location: "Goa, Maharashtra",
    type: "Full-Time",
    description: "Responsible for day-to-day site supervision, coordination with vendors and ensuring quality construction."
  },
  {
    title: "Civil Engineer (6 Nos.)",
    location: "Goa, Maharashtra",
    type: "Full-Time",
    description: "Monitoring ongoing construction work, ensuring safety protocols and progress as per timeline."
  },
];

const Career: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", resume: "" });

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", email: "", phone: "", resume: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted for:", selectedJob?.title, formData);
    setOpen(false);
  };

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
                  Join Our Team
                </Typography>
                <Typography variant="h5">
                  Be part of L Care's  growing legacy. Build your career with exciting projects across Maharashtra and Goa.
                </Typography>
              </Container>
            </Box>



      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-green-800">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div>
                  <h4 className="text-xl font-semibold text-green-800 mb-2">{job.title}</h4>
                  <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
                  <p className="text-gray-600 mb-3"><strong>Type:</strong> {job.type}</p>
                  <p className="text-gray-700">{job.description}</p>
                </div>
                <Button
                  onClick={() => handleApply(job)}
                  variant="contained"
                  color="success"
                  sx={{ mt: 3 }}
                >
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Apply for {selectedJob?.title}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <TextField
              required
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Resume Link (Google Drive or PDF URL)"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
            />
            <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="success">Submit</Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Career;
