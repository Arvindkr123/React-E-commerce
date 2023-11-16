import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import classes from "../pages/Profile.module.css";

export default function Profile() {
  const navigate = useNavigate();
  const userProfileData = useSelector((state) => state.auth.userProfileData);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const updateprofileClickHandler = () => {
    navigate("/updateProfile");
  };
  return (
    // <Card sx={{ margin: "auto", maxWidth: 500, mt: "5%" }}>
    //   {isLoading ? (
    //     <Box sx={{ display: "flex", ml: "50%" }}>
    //       <CircularProgress />
    //     </Box>
    //   ) : (
    //     <>
    //       {userProfileData && (
    //         <CardMedia
    //           component="img"
    //           alt="Rahul"
    //           height="140"
    //           image={userProfileData.photoUrl}
    //         />
    //       )}
    //       <CardContent>
    //         {userProfileData && (
    //           <Typography gutterBottom component="div" variant="h5">
    //             {userProfileData.displayName}
    //           </Typography>
    //         )}

    //         {userProfileData && (
    //           <Typography variant="h6" color="green" component="div">
    //             {userProfileData.email}
    //           </Typography>
    //         )}
    //       </CardContent>
    //       <CardActions>
    //         <Button
    //           onClick={updateprofileClickHandler}
    //           size="small"
    //           sx={{ margin: "auto", color: "green" }}
    //         >
    //           Update profile here!
    //         </Button>
    //       </CardActions>
    //     </>
    //   )}
    // </Card>

    <div>
      {isLoading ? (
        <div className={classes.container}>
          <Box>
            <CircularProgress color="secondary" />
          </Box>
        </div>
      ) : (
        userProfileData && (
          <div className={classes.container}>
            {userProfileData.photoUrl && (
              <img src={userProfileData.photoUrl} alt="Profile Picture" />
            )}
            <h1>{userProfileData.displayName}</h1>
            <h2>Web Developer</h2>
            <p className={classes.email}>{userProfileData.email}</p>
            <button onClick={updateprofileClickHandler}>Update Profile</button>
          </div>
        )
      )}
    </div>
  );
}
