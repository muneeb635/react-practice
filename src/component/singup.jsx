import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
export default function Singup() {
  return (
    <Box>
      <Grid
        // height={window.innerHeight}
        container
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent="center"
        direction="row"
        marginTop={20}
      >
        <Grid item>
          <Card sx={{ bgcolor: "", alignContent: "center", maxWidth: 600 }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Box
                      container
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <Box
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        <Grid item ml={15}>
                          <h2>
                            SING UP
                            <br />
                            ---
                          </h2>
                        </Grid>
                      </Box>
                    </Box>
                    <Grid container>
                      <Grid item sx={{ mr: 1 }}>
                        <TextField
                          margin="normal"
                          type="text"
                          id="fname"
                          label="First Name"
                          name="fname"
                        />
                      </Grid>
                      <Grid item xs>
                        <TextField
                          margin="normal"
                          type="text"
                          id="Lname"
                          label="Last Name"
                          name="Lname"
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="Email"
                      label="Your Email"
                      type="Email"
                      id="email"
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
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Link to={"/"}>{"Already have an account?"}</Link>
                  </Box>
                </CardContent>
              </Box>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
