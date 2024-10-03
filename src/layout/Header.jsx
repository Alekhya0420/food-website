import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';


import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography
        color={"goldenrod"}
        variant="h1"
        component="div"
        sx={{ flexGrow: 1, my:4}}
      >
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu-page"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/reg-page"}>Registration</NavLink>
        </li>

        <li>
          <NavLink to={"/login-page"}>Login</NavLink>
        </li>

        <li>
          <NavLink to={"/food-page"}>Food</NavLink>
        </li>

        <li>
          <NavLink to={"/contact-page"}>Contact</NavLink>
        </li>



      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                display: { sm: "none"},
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
           
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
            >
               My resturant<FastfoodIcon/>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }}}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu-page"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/reg-page"}>Registration</NavLink>
                </li>

                <li>
                  <NavLink to={"/login-page"}>Login</NavLink>
                </li>

                <li>
                  <NavLink to={"/food-page"}>Food</NavLink>
                </li>

                <li>
                  <NavLink to={"/contact-page"}>Contact</NavLink>
                </li>

                               


              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;