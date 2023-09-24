import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PackCard from "./PackCard";
import axios from "axios";

function Pack(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  });

  let sum = cart.reduce((acc, elem) => {
    return acc + elem.price;
  }, 0);

  return (
    <div>
      <Heading m={10}>YOUR CUSTOM PACK</Heading>
      <Box border={"1px solid black"}></Box>
      <Flex>
        <Box w={"70%"}>
          {cart.map((elem, i) => {
            return <PackCard key={i} cartProduct={elem} />;
          })}
        </Box>
        <Box position={{ lg: "fixed" }} top={100} right={0}>
          <Box
            w={300}
            m={20}
            p={10}
            h={300}
            boxShadow={
              "0px 1px 1px 2px rgba(0,0,0,0.12), 0px 5px 5px 0px rgba(0,0,0,0.12)"
            }
            borderRadius={10}
          >
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Total Bill
            </Heading>
            <Flex mt={10} justifyContent={"space-between"}>
              <Box>Total Price : </Box>
              <Box fontWeight={"bold"}>$ {Math.round(sum)}</Box>
            </Flex>
            <Box margin={10} mt={20}>
              <Button variant="solid" colorScheme="blue">
                Go To Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Pack;
