import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/BoxCard";
import { Badge, Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import PackCard from "./Components/PackCard";
import { Route, Routes } from "react-router-dom";
import Pack from "./Components/Pack";
import BoxCard from "./Components/BoxCard";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [limitExceed, setLimitExceed] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        setCart(response.data);

        if (response.data.length >= 8) {
          setLimitExceed(true);
        } else {
          setLimitExceed(false);
        }
      })
      .catch((error) => {
        alert(error);
      });
  });

  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Heading color={"goldenrod"} m={5}>
            UNBUNDL
          </Heading>
        </Box>
        <Box>
          <Link to={"/cart"}>
            <Button m={5} size={"lg"} position={"relative"}>
              {limitExceed ? "Pack full" : "Your pack"}
              <Badge
                position={"absolute"}
                top={-1}
                right={-1}
                p={1}
                colorScheme="green"
                fontSize={"lg"}
                borderRadius={"50%"}
              >
                {cart.length}
              </Badge>
            </Button>
          </Link>
        </Box>
      </Flex>
      <Box
        padding={3}
        textAlign={"center"}
        color={"white"}
        backgroundColor={"grey"}
      >
        Fashion Mart
      </Box>
      <Box w={"80%"} m={"auto"}>
        <Grid
          templateColumns={{
            sm: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {data.map((product, i) => {
            const isAdded = cart.find((e) => e.id === product.id);
            return (
              <BoxCard
                key={i}
                product={product}
                limitExceed={limitExceed}
                isAdded={isAdded}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
