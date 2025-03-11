import React, { FormEvent, useCallback, useState } from "react";
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
import { useDispatch } from "react-redux";
import { setToken } from "features/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        dispatch(
          setToken({
            accessToken: "1",
            refreshToken: "1",
            user: {
              name: "123",
            },
          })
        );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, navigate]
  );

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
                value={data.email}
                onChange={(e) =>
                  setData((pre) => ({ ...pre, email: e.target.value }))
                }
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={data.password}
                onChange={(e) =>
                  setData((pre) => ({ ...pre, password: e.target.value }))
                }
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
