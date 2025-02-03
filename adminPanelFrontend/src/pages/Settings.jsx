import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function Settings() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <Card
      sx={{
        width: 280,
        textAlign: "center",
        backgroundColor: "#1e1e1e",
        color: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        padding: 2,
        margin: "auto",
        marginTop: 30
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
          {formatTime(time.getHours())}:
          {formatTime(time.getMinutes())}
        </Typography>
      </CardContent>
    </Card>
  );
}
