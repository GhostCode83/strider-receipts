import React from "react";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { ReceiptPreviews } from "./ReceiptPreviews";
import dataImage from "../assets/images/analyze-data-vector1.jpg";

export const Home = () => {
  return (
    <Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography
          variant="h1"
          align="center"
          color="secondary"
          sx={{ fontFamily: "Galgo", fontSize: "9.5em" }}
        >
          Strider General Store
        </Typography>
        <Typography
          variant="h2"
          align="center"
          color="primary.dark"
          sx={{
            fontFamily: "Galgo",
            position: "relative",
            bottom: 20,
          }}
        >
          Purchase Information
        </Typography>
        <CardMedia
          component="img"
          alt="team using analytics tools"
          image={dataImage}
          sx={{ width: "50%", maxWidth: "400px" }}
        />
      </Grid>
      <Grid item container xs={12} direction="row">
        <ReceiptPreviews />
      </Grid>
    </Box>
  );
};
