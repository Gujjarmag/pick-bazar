import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

function HoverCart() {
  return (
    <Box className="bg-[#009F7F] p-3 rounded-l-md">
      <Typography className="text-white">3 Items</Typography>
      <Button sx={{ background: "#fff", color: "#009F7F", fonatWeight: 600 }}>
        $30.00
      </Button>
    </Box>
  );
}

export default HoverCart;
