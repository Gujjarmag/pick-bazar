import Box from "@mui/material/Box";
import React, { useState } from "react";
import Products from "./Products";
import HoverCart from "./HoverCart";
import CartList from "./CartList/CartList";

const Home = () => {
  const [openCartList, setOpenCartList] = useState(false);
  const [cartProducts, SetCartProducts] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpenCartList(newOpen);
  };
  return (
    <>
      <Box className="relative">
        <Products SetCartProducts={SetCartProducts} />
        <Box onClick={toggleDrawer(true)} className="absolute right-0 top-1/2">
          <HoverCart />
        </Box>
      </Box>

      <CartList openCartList={openCartList} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Home;
