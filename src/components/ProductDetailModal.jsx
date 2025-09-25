import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { styleProductModal } from "../assets/style";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ProductData } from "../utils/dummyData";
import CircularProgress from "@mui/material/CircularProgress";

function ProductDetailModal(props) {
  const { open, handleClose, currentProductId } = props;

  const selectedProduct = ProductData.find(
    (product) => product.id === currentProductId
  );

  console.log(selectedProduct);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styleProductModal}>
            {selectedProduct ? (
              <Box className="p-5" sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                  <Grid size={6}>
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={selectedProduct?.productImage} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>Slide 2</SwiperSlide>
                      <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                  </Grid>
                  <Grid size={6}>
                    <Box className="flex justify-between">
                      <Box>
                        <Typography variant="h4">
                          {selectedProduct?.productName}
                        </Typography>
                        <Typography variant="body1">1lb</Typography>
                      </Box>
                      <Box className="flex flex-col">
                        <FavoriteBorderIcon />
                        <Button variant="contained">
                          2<StarIcon />
                        </Button>
                      </Box>
                    </Box>

                    <Typography variant="body1" className="py-10">
                      clementine is a tangor, a citrus fruit hybrid between a
                      willowleaf mandarin orange and a sweet orange, named for
                      its late 19th-century discoverer. The exterior is a deep
                      orange colour with a smooth, glossy appearance.
                    </Typography>
                    <Box className="py-6">
                      <Typography variant="body1" className="">
                        ${selectedProduct?.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box className="p-20 flex justify-center">
                <CircularProgress color="inherit" />
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ProductDetailModal;
