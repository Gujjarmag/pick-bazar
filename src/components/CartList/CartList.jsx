import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

export default function CartList(props) {
  const { openCartList, toggleDrawer } = props;

  return (
    <div>
      <Drawer open={openCartList} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 320 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <h1>Products</h1>
        </Box>
      </Drawer>
    </div>
  );
}
