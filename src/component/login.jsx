import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />

          <Link to={"/home"}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sing In
            </Button>
          </Link>

          <Grid container>
            <Grid item xs>
              <Link to={"#"}>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to={"singup"}>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
