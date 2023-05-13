import { Grid } from "@mui/material";
import React from "react";
import {} from "react-native-web";

export default function Home() {
  return (
    <Grid container display={"flex"}>
      <Grid item bgcolor={"red"}>
        <h1>1</h1>
      </Grid>
      <Grid item bgcolor={"blue"}>
        <h1>2</h1>
      </Grid>
      <Grid item bgcolor={"yellow"}>
        <h1>2</h1>
      </Grid>
    </Grid>
  );
}
