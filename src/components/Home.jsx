import Box from "@mui/material/Box";
import React from "react";
import Products from "./Products";
import HoverCart from "./HoverCart";

const Home = () => {
  return (
    <>
      <Box className="relative "></Box>

      <Products />
      <Box className="absolute right-0 top-1/2">
        <HoverCart />
      </Box>
    </>
  );
};

export default Home;
