import * as React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { cartActions } from "../reducers/cartSlice";

const StorePage = () => {
  const dispatch = useDispatch();
  const bandMerchandise = useSelector((state) => state.cart.bandMerchandise);
  // console.log(bandMerchandise);
  const bandAlbums = useSelector((state) => state.cart.bandAlbums);
  const addMerchandiseToCart = (merchandise) => {
    dispatch(cartActions.addMerchandiseToCart(merchandise));
  };

  const addAlbumsClickHandler = (album) => {
    dispatch(cartActions.addAlbumsToCart(album));
  };

  return (
    <Fragment>
      <h1
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bolder",
        }}
      >
        Music
      </h1>
      <Grid container spacing={2}>
        {bandAlbums.map((album) => (
          <Grid
            sx={{
              ml: 10,
              mt: 5,
              transition: "transform .2s",
              "&:hover": {
                boxShadow: "0px 5px 7px black",
                transform: "scale(1.05)",
              },
            }}
            key={album.id}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{
                  height: 200,
                  m: 1,
                  transition: "transform .5s",
                  "&:hover": {
                    boxShadow: "0px 5px 7px black",
                    transform: "scale(1.1)",
                  },
                }}
                image={album.albumArtwork}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {album.albumName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {album.albumYear}
                </Typography>
                <Typography size="small">${album.price}</Typography>
              </CardContent>
              <CardActions>
                <Typography size="small">Artist - The Generics</Typography>
                <br />
                <Button
                  size="small"
                  sx={{ ml: 8 }}
                  onClick={() => addAlbumsClickHandler(album)}
                  variant="outlined"
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bolder",
          margin: "2rem",
        }}
      >
        Official Merchandise
      </h1>
      <Grid container spacing={2}>
        {bandMerchandise.map((merchandise) => (
          <Grid
            sx={{
              ml: 10,
              mt: 5,
              transition: "transform .5s",
              "&:hover": {
                boxShadow: "0px 5px 7px black",
                transform: "scale(1.05)",
              },
            }}
            key={merchandise.id}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{
                  height: 200,
                  m: 1,
                  transition: "transform .3s",
                  "&:hover": {
                    boxShadow: "0px 5px 7px black",
                    transform: "scale(1.05)",
                  },
                }}
                image={merchandise.productImage}
                title="The Generics"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {merchandise.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {merchandise.productDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography size="small">
                  ${merchandise.productPrice}
                </Typography>
                <Button
                  size="small"
                  sx={{ ml: 23 }}
                  onClick={() => addMerchandiseToCart(merchandise)}
                  variant="outlined"
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
export default StorePage;
