import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import dayjs from "dayjs";
import { useReceipts } from "../Context/ReceiptsContext";
import { StyledCard } from "../style/StyledComponents/index";

export const ReceiptPreviews = () => {
  const receipts = useReceipts();
  let navigate = useNavigate();

  const preview = receipts?.map((r, idx) => {
    const date = dayjs(r.Date).format("ddd, MMM DD, YYYY");

    return (
      <Grid key={idx} id="previewCard" item xs={12} md={6} xl={3}>
        <StyledCard onClick={() => navigate(`/receipt/${r.OrderId}`)}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              Date: {date}
            </Grid>
            <Grid item xs={12}>
              Order Id: {r.OrderId}
            </Grid>
            <Grid item xs={12}>
              Customer Id: {r.CustomerId}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              sx={{ marginTop: 2 }}
              spacing={1}
            >
              <Grid item xs={12} sm={6}>
                Customer Name: {r.CustomerName}
              </Grid>
              <Grid item xs={12} sm={6}>
                Total Purchase: {r.Total}
              </Grid>
            </Grid>
            <Button role="button" sx={{ marginTop: 2 }} variant="contained">
              {" "}
              <ReceiptLongIcon />
              Details
            </Button>
          </Grid>
        </StyledCard>
      </Grid>
    );
  });
  return (
    <Grid container sx={{ marginTop: 2 }}>
      {preview}
    </Grid>
  );
};
