import Card from "@mui/material/Card";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ProductData } from "../utils/dummyData";
import Grid from "@mui/material/Grid";
import ProductDetailModal from "./ProductDetailModal";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState({});

  const handleOpen = (productDetails) => {
    // console.log(productDetails);
    setCurrentProductId(productDetails.id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {ProductData?.map((product) => {
            return (
              // <Grid size={2}>
              <Card key={product.id} className="w-[345px] p-4">
                <img
                  className="cursor-pointer"
                  onClick={() => handleOpen(product)}
                  src={product.productImage}
                />

                <Typography variant="h6">{product?.productName}</Typography>
                <Typography variant="subtitile">1lb</Typography>

                <Box className="flex justify-between">
                  <Box>
                    <Typography variant="h5">${product?.price}</Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        borderRadius: "50px",
                        border: "1px solid #009F7F",
                        color: "#009F7F",
                      }}
                    >
                      <ShoppingBasketIcon /> Cart
                    </Button>
                  </Box>
                </Box>
              </Card>
              // </Grid>
            );
          })}
        </Grid>
      </Box>
      {open && (
        <ProductDetailModal
          open={open}
          handleClose={handleClose}
          currentProductId={currentProductId}
        />
      )}
    </>
  );
};

export default Products;
