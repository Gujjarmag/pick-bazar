import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/logo-new.webp";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { greenBtn } from "../assets/style";
import { Link, NavLink } from "react-router";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function AppHeader(props) {
  const { window } = props;

  const { Products: ProductsDummyData } = useSelector((state) => state.cart);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <img src={Logo} />
      </Link>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#ffffff" }} elevation={0}>
        <Toolbar className="flex justify-between">
          <Box className="flex items-center gap-6">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img src={Logo} />
            </Link>

            <Autocomplete
              disablePortal
              options={[]}
              sx={{ width: 120 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#019376] font-bold px-3"
                  : "text-gray-500 px-3"
              }
              to="/Shops"
            >
              Shops
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#019376] font-bold" : "text-gray-500"
              }
              to="/Offers"
            >
              Offers
            </NavLink>
            <Button>Contact</Button>
            <Badge
              badgeContent={ProductsDummyData?.length}
              color="primary"
              className="mx-5"
            >
              <ShoppingBasketIcon sx={{ color: "#019376" }} />
            </Badge>
            <Button sx={{ ...greenBtn, marginRight: "20px" }}>Join</Button>
            <Button sx={greenBtn}>Become Seller</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default AppHeader;
