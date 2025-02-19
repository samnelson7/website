import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Box,
  Button,
  Snackbar,
  Alert,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Build as BuildIcon,
  Interests as InterestsIcon,
  ContactMail as ContactMailIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import Link from "next/link";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("samnelson7@hotmail.com");
      setOpenSnackbar(true);
      setTimeout(() => setOpenSnackbar(false), 3000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const navLinks = [
    { text: "Home", to: "/", icon: <HomeIcon /> },
    { text: "Education", to: "/education", icon: <SchoolIcon /> },
    { text: "Work", to: "/work", icon: <WorkIcon /> },
    { text: "Projects", to: "/projects", icon: <BuildIcon /> },
    { text: "Technologies and Tools", to: "/techtools", icon: <BuildIcon /> },
    { text: "Interests", to: "/interests", icon: <InterestsIcon /> },
    { text: "Contact", to: "/contact", icon: <ContactMailIcon /> },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1c375d" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexShrink: 0 }}>
          Sam Nelson
        </Typography>

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
                <Box sx={{ width: "1px", height: "30px", backgroundColor: "grey", marginLeft: 2, marginRight: 2 }} />
              )}
            </React.Fragment>
          ))}
        </Box>

        <Box sx={{ ml: "auto" }}>
          <IconButton onClick={handleMenuOpen} sx={{ "&:hover": { transform: "scale(1.1)" }, transition: "all 0.3s ease" }}>
            <Avatar alt="Sam Nelson" src="/images/profile.JPG" sx={{ width: 50, height: 50 }} />
          </IconButton>
        </Box>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} disableScrollLock>
          <MenuItem onClick={handleCopyEmail} sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 2 }} /> Email: samnelson7@hotmail.com
          </MenuItem>
          <MenuItem onClick={() => window.open("https://www.linkedin.com/in/sam-nelson-73003a250/", "_blank")}
            sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon sx={{ mr: 2 }} /> LinkedIn: Sam Nelson
          </MenuItem>
          <MenuItem onClick={() => window.open("https://github.com/samnelson7", "_blank")}
            sx={{ display: "flex", alignItems: "center" }}>
            <GitHubIcon sx={{ mr: 2 }} /> GitHub: samnelson7
          </MenuItem>
        </Menu>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} disableScrollLock>
        <List>
          {navLinks.map(({ text, to, icon }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} href={to} onClick={toggleDrawer(false)}>
                {icon} <ListItemText primary={text} sx={{ ml: 2 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Snackbar open={openSnackbar} autoHideDuration={2000} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Email copied successfully!
        </Alert>
      </Snackbar>
    </AppBar>
  );
};

export default Header;
