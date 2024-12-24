import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface HeaderProps {
  onDrawerToggle: () => void; // to trigger drawer toggle from parent
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "indigo" }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sam Nelson's Website
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;