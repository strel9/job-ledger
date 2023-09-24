import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@mui/material";

import RangeSlider from "./RangeSlider";

const prices = [];
for (let i = 0; i < 500; i++) {
  prices.push(Math.floor(Math.random() * 80) + 1);
}

function App() {
  return (
    <Grid container justify="center" style={{ marginTop: "33px" }}>
      <Grid item xs={12} lg={8}>
        <RangeSlider data={prices} />
      </Grid>
    </Grid>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
