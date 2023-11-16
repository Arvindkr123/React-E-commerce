import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserProfileAction,
  updateProfileAction,
} from "../reducers/asyncAuthReducer";

const theme = createTheme();

export default function UpdateProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [photoUrl, setPhotoUrl] = React.useState("");

  const namehandeler = (e) => {
    setName(e.target.value);
  };
  const photoUrlHandeler = (e) => {
    setPhotoUrl(e.target.value);
  };

  const updateAccountHandeler = (e) => {
    e.preventDefault();
    // console.log("1", name, photoUrl);
    const updateAccount = {
      name: name,
      photoUrl: photoUrl,
    };
    dispatch(updateProfileAction(updateAccount));

    setTimeout(() => {
      dispatch(getUserProfileAction());
    }, 1000);

    // console.log(updateAccount);
  };

  const profileClickHandler = () => {
    navigate("/profile");
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AccountBoxIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Update your profile here!!!
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="User Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={namehandeler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="photoUrl"
                label="photoUrl"
                type="photoUrl"
                id="photoUrl"
                autoComplete="photoUrl"
                value={photoUrl}
                onChange={photoUrlHandeler}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={updateAccountHandeler}
              >
                Update your profile
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={profileClickHandler} href="#" variant="body2">
                    Go to your profile !
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
