import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardMedia,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const order = useSelector((state) => state.cart.orderList);
  const isLoading = useSelector((state) => state.cart.isLoading);

  return (
    <div>
      <Paper
        sx={{
          padding: ".5% .5%",
          width: "90%",
          margin: "20px auto",
          boxShadow: "5px 5px 5px #353738",
          border: 3,
          borderColor: "black",
        }}
      >
        {isLoading ? (
          <Box sx={{ display: "flex", ml: "50%" }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {order.map((items, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={{ bgcolor: "#ebebe0" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container spacing={8}>
                    <Grid item xs={4}>
                      <span>
                        <h4>Music Album</h4>
                      </span>
                    </Grid>
                    <Grid item xs={4}>
                      <span>
                        <h4>{items.date}</h4>
                      </span>
                    </Grid>
                    <Grid item xs={4}>
                      <span>
                        <h4>Total Amounts:{items.AlbumPrice}</h4>
                      </span>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                {items.BandAlbums &&
                  items.BandAlbums.map((album) => (
                    <AccordionDetails key={album.id}>
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <span>
                              <CardMedia
                                sx={{
                                  width: "50px",
                                  height: "50px",
                                }}
                                component={"img"}
                                src={album.albumImage}
                                alt={album.albumName}
                              />
                            </span>
                          </Grid>
                          <Grid item xs={3}>
                            <span>
                              <h5 style={{ marginTop: "10px" }}>
                                {album.albumName}
                              </h5>
                            </span>
                          </Grid>
                          <Grid item xs={2.1}>
                            <span>
                              <h5 style={{ marginTop: "10px" }}>
                                {album.quantity}
                              </h5>
                            </span>
                          </Grid>
                          <Grid item xs={3}>
                            <span>
                              <h5 style={{ marginTop: "10px" }}>
                                {album.albumPrice * album.quantity}
                              </h5>
                            </span>
                          </Grid>
                        </Grid>
                      </div>
                    </AccordionDetails>
                  ))}
              </Accordion>
            ))}
            {order.map((items, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={{ bgcolor: "#d7d7c1" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container spacing={8}>
                    <Grid item xs={4}>
                      <span>
                        <h4>Band Merchandise</h4>
                      </span>
                    </Grid>
                    <Grid item xs={4}>
                      <span>
                        <h4>{items.date}</h4>
                      </span>
                    </Grid>
                    <Grid item xs={4}>
                      <span>
                        <h4>Total Amounts:{items.MerPrice}</h4>
                      </span>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                {items.BandMercandise &&
                  items.BandMercandise.map((merchandise) => (
                    <AccordionDetails key={merchandise.id}>
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <span>
                              <CardMedia
                                sx={{
                                  width: "50px",
                                  height: "50px",
                                }}
                                component={"img"}
                                src={merchandise.productImage}
                                alt={merchandise.productName}
                              />
                            </span>
                          </Grid>
                          <Grid item xs={3}>
                            <span>
                              <h5 style={{ marginTop: "10px" }}>
                                {merchandise.productName}
                              </h5>
                            </span>
                          </Grid>
                          <Grid item xs={2.1}>
                            <span>
                              <h5 style={{ marginTop: "10px" }}>
                                {merchandise.quantity}
                              </h5>
                            </span>
                          </Grid>
                          <Grid item xs={3}>
                            <span>
                              <h5 style={{ marginTop: "10px" }}>
                                {merchandise.productPrice *
                                  merchandise.quantity}
                              </h5>
                            </span>
                          </Grid>
                        </Grid>
                      </div>
                    </AccordionDetails>
                  ))}
              </Accordion>
            ))}
          </>
        )}
      </Paper>
    </div>
  );
};

export default OrderHistory;
