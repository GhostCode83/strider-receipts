import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { Grid, TextField, Typography } from "@mui/material";
import { StyledCard, StyledButton } from "../style/StyledComponents/index";

export const ContactForm = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mknpqezz");

  if (state.succeeded) {
    return (
      <Typography sx={{ fontSize: 28 }} variant="body">
        Thanks for your feedback! Return to the{" "}
        <Link to={"/"}>Home Screen</Link>.
      </Typography>
    );
  }

  return (
    <StyledCard>
      <Typography
        variant="h3"
        align="center"
        color="secondary"
        sx={{ fontFamily: "Galgo", fontSize: 64 }}
        onClick={() => navigate("/")}
      >
        Strider General Store
      </Typography>
      <Typography align="center" sx={{ fontSize: 28 }}>
        We value your feedback.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid item sx={{ margin: 1 }}>
            <TextField
              id="email"
              type="email"
              name="email"
              label="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Grid>
          <Grid item sx={{ margin: 1 }}>
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={2}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Grid>
          <Grid item sx={{ margin: 1 }}>
            <StyledButton type="submit" disabled={state.submitting}>
              Submit
            </StyledButton>
          </Grid>
        </Grid>
      </form>
    </StyledCard>
  );
};
