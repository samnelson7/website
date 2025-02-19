import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Build as BuildIcon,
  Favorite as FavoriteIcon,
  ContactMail as ContactMailIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import Link from "next/link";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", to: "/", icon: <HomeIcon /> },
    { text: "Education", to: "/education", icon: <SchoolIcon /> },
    { text: "Work", to: "/work", icon: <WorkIcon /> },
    { text: "Projects", to: "/projects", icon: <BuildIcon /> },
    { text: "Technologies and Tools", to: "/techtools", icon: <CodeIcon /> },
    { text: "Interests", to: "/interests", icon: <FavoriteIcon /> },
    { text: "Contact", to: "/contact", icon: <ContactMailIcon /> },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#1c375d" }}>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* Mobile Sidebar Toggle */}
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>

          {/* Brand Name */}
          <Typography variant="h6" component="div" sx={{ flexShrink: 0 }}>
            Sam Nelson
          </Typography>

          {/* Navigation Links (Desktop) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 4 }}>
            {navLinks.map(({ text, to }, index) => (
              <React.Fragment key={index}>
                <Button
                  component={Link}
                  href={to}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    padding: "6px 12px",
                    backgroundColor: currentPath === to ? "rgba(255, 255, 255, 0.2)" : "transparent",
                    borderRadius: "5px",
                    "&:hover": {
                      color: "lightgray",
                      backgroundColor: currentPath === to ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {text}
                </Button>
                {index !== navLinks.length - 1 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "30px",
                      backgroundColor: "grey",
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* Avatar aligned to the right */}
          <Box sx={{ ml: "auto" }}>
            <IconButton
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <Avatar alt="Sam Nelson" src="/images/profile.JPG" sx={{ width: 50, height: 50 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map(({ text, to, icon }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} href={to}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
