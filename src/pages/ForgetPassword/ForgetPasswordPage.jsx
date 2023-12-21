import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPasswordAction } from "../../reducers/asyncAuthReducer";

const ForgetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enteredEmail, setEnteredemail] = useState("");
  const enteredEmailHandler = (e) => {
    setEnteredemail(e.target.value);
  };
  const logInButtonClickHandler = () => {
    navigate("/login");
  };
  const enteredEmailbuttonHandler = (e) => {
    e.preventDefault();
    const forgotPasswordData = {
      email: enteredEmail,
    };
    dispatch(forgotPasswordAction(forgotPasswordData));
  };
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            sx={{
              backgroundImage:
                "url(https://t3.ftcdn.net/jpg/05/16/20/60/360_F_516206082_BAXqcQohtFgx60zBYZsTUkWKSQWXfTQM.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Enter your email id to reset your password</h2>
              <Box component={"form"} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={enteredEmailHandler}
                  value={enteredEmail}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={enteredEmailbuttonHandler}
                >
                  Send
                </Button>
                <Typography
                  type="submit"
                  sx={{
                    cursor: "pointer",
                    color: "green",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                  variant="body2"
                  onClick={logInButtonClickHandler}
                >
                  Login Here
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default ForgetPasswordPage;
