import { Column, Heading, Stack, Row, Input, Button } from "native-base";
import { Link } from "react-router-dom";
import React from "react";

function Singup() {
  return (
    <Stack alignItems={"center"}>
      <Column marginTop={20} space={4} width={500} backgroundColor={""}>
        <Stack alignItems={"center"}>
          <Row space={4}>
            <Heading>SIGN up</Heading>
          </Row>
          <Row>
            <Link to={"/"}>Already have an account?</Link>
          </Row>
        </Stack>
        <Row space={2}>
          <Column width={"48%"}>
            <Input mx="3" placeholder="First Name" w="100%" />
          </Column>
          <Column width={"45%"}>
            <Input mx="3" placeholder="Last Name" w="100%" />
          </Column>
        </Row>
        <Input mx="3" placeholder="Email" />
        <Input mx="3" placeholder="Password" />
        <Row>
          <Button w={"100%"}>Sing up</Button>
        </Row>
      </Column>
    </Stack>
  );
}

export default Singup;
