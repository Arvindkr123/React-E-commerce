import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPasswordAction,
  userLoginAction,
} from "../reducers/asyncAuthReducer";

const theme = createTheme();

export function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enteredEmail, setEnteredemail] = React.useState("");
  const enteredEmailHandler = (e) => {
    setEnteredemail(e.target.value);
  };

  const enteredEmailbuttonHandler = (e) => {
    e.preventDefault();
    const forgotPasswordData = {
      email: enteredEmail,
    };
    dispatch(forgotPasswordAction(forgotPasswordData));
  };

  const logInButtonClickHandler = () => {
    navigate("/login");
  };

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
              <Box component="form" sx={{ mt: 1 }}>
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
                  `` Send Link
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
}

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfileData = useSelector((state) => state.auth.userProfileData);
  React.useEffect(() => {
    if (userProfileData) {
      navigate("/");
    }
  }, [userProfileData]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userCredentials = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(userLoginAction(userCredentials));
  };

  const signupPageHandler = () => {
    navigate("/signup");
  };

  const forgotPasswardHandler = () => {
    navigate("/forgotPassword");
  };

  return (
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={forgotPasswardHandler}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={signupPageHandler}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
