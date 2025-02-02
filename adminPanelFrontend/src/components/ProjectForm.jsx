import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proje Verileri:", formData);
  };

  return (
    <Container maxWidth="sm" className="project-create-box">
      <Box width={800} margin={-20} mt={1} mb={8} p={3} borderRadius={2} bgcolor="white">
        <Typography variant="h5" gutterBottom>
          Proje Oluştur
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Proje Adı"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Proje Açıklaması"
            name="link"
            value={formData.link}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            fullWidth
            label="Projenin GitHub Linki"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "block", marginTop: "16px" }}
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Kaydet
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProjectForm;
