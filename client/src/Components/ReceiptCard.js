import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import dayjs from "dayjs";
import { useReceipts } from "../Context/ReceiptsContext";
import { NoMatch } from "./index";
import { StyledCard, StyledButton } from "../style/StyledComponents/index";

export const ReceiptCard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const receipts = useReceipts();

  const receiptArr = receipts?.filter((r) => {
    return r.OrderId == params.id;
  });

  const [receipt] = receiptArr?.length && receiptArr;

  const date = dayjs(receipt?.Date).format("ddd, MMM DD, YYYY");
  const time = dayjs(receipt?.Date).format("hh:mm a");

  function createData(Item, Quantity, ItemPrice) {
    return { Item, Quantity, ItemPrice };
  }

  const rows = receipt?.Items.map((item) => {
    const { Quantity, Item, ItemPrice } = item;
    return createData(Item, Quantity, ItemPrice);
  });

  return (
    <Grid sx={{ padding: 3 }}>
      {/* {isLoading ? <p>loading</p> : <p>not loading</p>} */}
      <StyledButton onClick={() => navigate(`/`)}>
        <ArrowBackIosIcon /> Back
      </StyledButton>
      <StyledCard>
        <CardContent>
          <Typography
            variant="h3"
            align="center"
            color="primary.dark"
            sx={{ fontFamily: "Galgo", fontSize: 64 }}
          >
            Receipt Details
          </Typography>
          <Typography>Order Id: {receipt?.OrderId}</Typography>
          <Typography>Customer Id: {receipt?.CustomerId}</Typography>
          <Typography>Customer Name: {receipt?.CustomerName}</Typography>
          <Typography>Total: {receipt?.Total}</Typography>
          <Typography>Date: {date}</Typography>
          <Typography>Time: {time}</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Unit Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Item}
                    </TableCell>
                    <TableCell align="right">{row.Quantity}</TableCell>
                    <TableCell align="right">{row.ItemPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};
