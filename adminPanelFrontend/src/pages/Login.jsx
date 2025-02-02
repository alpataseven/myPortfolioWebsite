import { TextField, Button, Card, CardContent, Typography } from "@mui/material"

export default function LoginPage() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
                <Card style={{ maxWidth: 400, padding: "20px 30px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                    <Typography variant="h5" component="h2" style={{ textAlign: "center", marginBottom: 20 }}>
                        Giriş Sayfası 
                    </Typography>
                    <CardContent>
                        <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <TextField
                                id="text"
                                label="Kullanıcı Adı"
                                type="text"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Giriş YAp
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

