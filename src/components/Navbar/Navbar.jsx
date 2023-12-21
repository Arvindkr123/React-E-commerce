import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const userProfileData = useSelector((state) => state.auth.userProfileData);
  // console.log(userProfileData);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // function for the handle open and close nav menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // function for the handle open and close user menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Home page handler function
  const homePageHandler = () => {
    navigate("/");
  };

  // about page handler function
  const aboutPageHandler = () => {
    navigate("/about");
    handleCloseNavMenu();
  };

  // sign in page handler
  const signinPageHandler = () => {
    navigate("/login");
  };
  // user logout handler function
  const userLogoutHandler = () => {
    // dispatch(authActions.userLogout());
    // dispatch(cartActions.logout());
    navigate("/");
  };
  // go to home handler
  const goToHome = () => {
    navigate("/");
  };
  //store page
  const storePageHandler = () => {
    navigate("/store");
  };
  // cart handler
  const cartPageHandler = () => {
    navigate("/cart");
  };
  // user profile handler
  const userProfileHandler = () => {
    navigate("/profile");
  };
  // order history handler
  const orderHistoryHandler = () => {
    navigate("/orderHistory");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={goToHome}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            The Generics
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={homePageHandler}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={storePageHandler}>
                <Typography textalign="center">Store</Typography>
              </MenuItem>
              <MenuItem onClick={aboutPageHandler}>
                <Typography textalign="center">About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                // borderBottom: "2px solid",
                cursor: "pointer",
              },
            }}
          >
            The Generics
          </Typography>
          {/* // started added for desktop  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={homePageHandler}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  borderBottom: "2px solid",
                },
              }}
            >
              Home
            </Button>
            {userProfileData && (
              <Button
                textAlign="center"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    borderBottom: "2px solid",
                  },
                  "&:selection": {
                    borderBottom: "2px solid",
                  },
                }}
                onClick={storePageHandler}
              >
                Store
              </Button>
            )}
            <Button
              onClick={aboutPageHandler}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  borderBottom: "2px solid",
                },
              }}
            >
              About
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {userProfileData ? (
              <>
                <Grid sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      width: 70,
                      height: 30,
                      backgroundColor: "#c2c2a3",
                      border: "0px",
                      borderRadius: "15px",
                      mt: "5px",
                      mr: "5px",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                    onClick={cartPageHandler}
                  >
                    <Badge badgeContent={12} color="success">
                      <ShoppingCartIcon sx={{ margin: "auto", ml: "8px" }} />
                    </Badge>
                    <Typography
                      sx={{
                        margin: "auto",
                        color: "white",
                        cursor: "pointer",
                        mr: "15px",
                      }}
                    >
                      Cart
                    </Typography>
                  </Box>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      {userProfileData !== undefined ? (
                        <Avatar
                          alt="Arvind Kumar"
                          src={userProfileData.photoUrl}
                        />
                      ) : (
                        <Avatar
                          alt="Arvind Kumar"
                          src="/static/images/avatar/2.jpg"
                        />
                      )}
                    </IconButton>
                  </Tooltip>
                </Grid>
              </>
            ) : (
              <>
                <Typography
                  sx={{ color: "white", cursor: "pointer" }}
                  onClick={signinPageHandler}
                >
                  Sign in
                </Typography>
              </>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={userProfileHandler} textAlign="center">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={orderHistoryHandler} textAlign="center">
                  Order History
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={userLogoutHandler}>
                  Log out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
