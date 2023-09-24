import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Select,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";

function PackCard({ cartProduct }) {
  function handleDelete() {
    axios
      .delete(`http://localhost:3000/cart/${cartProduct.id}`)
      .then((response) => {})
      .catch((error) => {
        alert("Something went wrong !");
      });
  }

  return (
    <Flex
      justifyContent={"space-between"}
      w={"95%"}
      m={"20px auto"}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
    >
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        alignItems={"center"}
        p={10}
      >
        <Flex>
          <Box h={200} w={200}>
            <Image
              h={"100%"}
              w={"100%"}
              borderRadius={10}
              src={cartProduct.image}
              alt={cartProduct.title}
            />
          </Box>
        </Flex>
        <Heading textAlign={"left"} fontSize={"lg"}>
          {cartProduct.title}
        </Heading>
        <Box>
          <Select placeholder="Qty" w={100} textAlign={"center"} m={"auto"}>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </Select>
        </Box>
        <Box m={"auto"}>$ {cartProduct.price}</Box>
        <Box m={"auto"} onClick={handleDelete}>
          Remove
        </Box>
      </Grid>
    </Flex>
  );
}

export default PackCard;
