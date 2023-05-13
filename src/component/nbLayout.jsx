import { Center, Column, Heading, Row, Stack } from "native-base";
import React from "react";

const NbLayout = () => {
  return (
    <Stack>
      <Row backgroundColor={"blue.500"}>
        <Row width={"100%"} space={4} justifyContent={"flex-end"}>
          <Heading>Header</Heading>
          <Heading>Header</Heading>
          <Heading>Header</Heading>
          <Heading>Header</Heading>
          <Heading>Header</Heading>
          <Heading>Header</Heading>
        </Row>
      </Row>
      <Row height={800} space={4}>
        <Column backgroundColor={"amber.500"}>
          <Heading>Header</Heading>
        </Column>
        <Column
          width={"100%"}
          backgroundColor={"amber.900"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* <Center> */}
          <Heading>Middle Section</Heading>
          {/* </Center> */}
        </Column>
      </Row>
      <Row backgroundColor={"blue.400"}>
        <Heading>Footer</Heading>
      </Row>
    </Stack>
  );
};

export default NbLayout;
