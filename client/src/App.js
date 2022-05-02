import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Home,
  Nav,
  NoMatch,
  ReceiptCard,
  ContactForm,
} from "./Components/index";
import { ReceiptsProvider } from "./Context/ReceiptsContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4478AA",
        dark: "#13065E",
      },
      secondary: {
        main: "#ef818a",
      },
    },
  });

  return (
    <ReceiptsProvider>
      <ThemeProvider theme={theme}>
        <Nav />
        <Grid className="App" sx={{ marginTop: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receipt/:id" element={<ReceiptCard />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Grid>
      </ThemeProvider>{" "}
    </ReceiptsProvider>
  );
}

export default App;
