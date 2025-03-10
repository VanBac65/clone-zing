import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Box,
  Typography,
  Paper,
} from "@mui/material";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {/* Left Side - Illustration */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            textAlign: "center",
          }}
        >
          <img
            src="/static/images/login-illustration.png"
            alt="Login Illustration"
            style={{ width: "100%" }}
          />
        </Box>

        {/* Right Side - Login Form */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              width: "100%",
              maxWidth: 400,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Welcome Back 👋
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
              Please sign in to continue
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Sign In
              </Button>
              <Typography
                variant="body2"
                color="primary"
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                Forgot password?
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
