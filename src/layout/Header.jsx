import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const token = sessionStorage.getItem("authToken");

  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="h6" color="goldenrod">
              My Restaurant <FastfoodIcon />
            </Typography>
            <Button component={NavLink} to="/" color="inherit">
              Home
            </Button>
            <Button component={NavLink} to="/menu-page" color="inherit">
              Menu
            </Button>
            {!token && (
              <Button component={NavLink} to="/reg-page" color="inherit">
                Registration
              </Button>
            )}
            <Button component={NavLink} to="/login-page" color="inherit">
              Login
            </Button>
            {token && (
              <Button component={NavLink} to="/food-page" color="inherit">
                Food
              </Button>
            )}
            <Button component={NavLink} to="/contact-page" color="inherit">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
