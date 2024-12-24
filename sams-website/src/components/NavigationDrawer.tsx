// components/NavigationDrawer.tsx

import React from "react";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from "@mui/material";
import { Home as HomeIcon, Info as InfoIcon, ContactMail as ContactMailIcon, Folder } from "@mui/icons-material";
import Link from "next/link";

interface NavigationDrawerProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
        <Divider />
        <List>
          {[{ text: "Home", icon: <HomeIcon />, to: "/" },
            { text: "About Me", icon: <InfoIcon />, to: "/about" },
            { text: "Projects", icon: <Folder />, to: "/projects" },
            { text: "Contact", icon: <ContactMailIcon />, to: "/contact" }
          ].map(({ text, icon, to }, index) => (
            <ListItem key={index}>
              <ListItemButton component={Link} href={to}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
