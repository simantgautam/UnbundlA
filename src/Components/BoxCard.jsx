import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";

function BoxCard({ product, isAdded, limitExceed }) {
  function addToPack() {
    axios
      .post("http://localhost:3000/cart", product)
      .then((response) => {})
      .catch((error) => {
        alert("Something went wrong !");
      });
  }

  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            boxSize={200}
            margin={"20px auto "}
            src={product.image}
            alt={product.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" noOfLines={1}>
              {product.title}
            </Heading>
            <Text noOfLines={3}>{product.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              $ {product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            {isAdded ? (
              <Button
                variant="solid"
                colorScheme="blue"
                style={{ cursor: "not-allowed" }}
              >
                Added
              </Button>
            ) : limitExceed ? (
              <Button
                variant="solid"
                colorScheme="blue"
                style={{ cursor: "not-allowed" }}
              >
                Add to cart
              </Button>
            ) : (
              <Button variant="solid" colorScheme="blue" onClick={addToPack}>
                Add to cart
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BoxCard;
