import { Column, Heading, Row, Stack, Input } from "native-base";
import React from "react";
import { Button } from "native-base";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Stack>
      <Column alignItems={"center"} marginTop={20} space={4}>
        <Row space={4}>
          <Heading>SIGN IN</Heading>
        </Row>
        <Row space={2}>
          {" "}
          <Column>Not a member yet?</Column>
          <Link to={"singup"}>Sign Up here</Link>
          <Column></Column>
        </Row>
        <Row>
          <Input mx="3" placeholder="Email" w="100%" />
        </Row>
        <Row>
          <Input mx="3" placeholder="Password" w="100%" />
        </Row>
        <Row>
          <Button>Sing In</Button>
        </Row>
        <Row></Row>
      </Column>
    </Stack>
  );
}

export default Login;
