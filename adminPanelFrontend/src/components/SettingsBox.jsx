import React, { useState } from "react"
import { Container, Typography, Switch, FormControlLabel, Paper, Select, MenuItem, TextField, Button, Box } from "@mui/material"

export default function SettingsBox() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [language, setLanguage] = useState("en")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSave = () => {
    alert("Ayarlar Kaydedildi!")
  }

  return (
    <Container maxWidth="lg" style={{marginBottom: 35, marginLeft: 30}}>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" gutterBottom>
          Dashboard Ayarları
        </Typography>
        
        <Box mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <TextField 
            label="Kullanıcı Adı"
            fullWidth 
            margin="normal"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        
        <Box mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <TextField 
            label="Şifre"
            type="password"
            fullWidth 
            margin="normal"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        
        <Box mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Karanlık Mod"
          />
        </Box>
        
        <Box mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <FormControlLabel
            control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />}
            label="Bildirimleri Aç"
          />
        </Box>
        
        <Box mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <Typography variant="subtitle1" gutterBottom>
            Dil Seçimi
          </Typography>
          <Select value={language} onChange={(e) => setLanguage(e.target.value)} fullWidth>
            <MenuItem value="en">İngilizce</MenuItem>
            <MenuItem value="tr">Türkçe</MenuItem>
            <MenuItem value="es">İspanyolca</MenuItem>
          </Select>
        </Box>
        
        <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 20 }}>
          Kaydet
        </Button>
      </Paper>
    </Container>
  )
}
