import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Menu as MenuIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Email as EmailIcon } from "@mui/icons-material";
import Link from "next/link";

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname); // Fallback to window.location
    }
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("samnelson7@hotmail.com");
      setOpenSnackbar(true); // Show Snackbar when email is copied
      setTimeout(() => setOpenSnackbar(false), 3000); // Hide Snackbar after 3 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1c375d" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Mobile Drawer Toggle */}
        <IconButton color="inherit" edge="start" onClick={onDrawerToggle} sx={{ display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>

        {/* Brand Name */}
        <Typography variant="h6" component="div" sx={{ flexShrink: 0 }}>
          Sam Nelson
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 4 }}>
          {[
            { text: "Home", to: "/" },
            { text: "Education", to: "/education" },
            { text: "Work", to: "/work" },
            { text: "Projects", to: "/projects" },
            { text: "Technologies and Tools", to: "/techtools" },
            { text: "Interests", to: "/interests" },
            { text: "Contact", to: "/contact" },
          ].map(({ text, to }, index) => (
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
              {/* Add a vertical line after each button except the last one */}
              {index !== 6 && (
                <Box
                  sx={{
                    width: "1px",
                    height: "30px", // Adjust the height of the line
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
            onClick={handleMenuOpen}
            sx={{
              "&:hover": { transform: "scale(1.1)" },
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <Avatar alt="Sam Nelson" src="/images/profile.JPG" sx={{ width: 50, height: 50 }} />
          </IconButton>
        </Box>

        {/* Dropdown Menu */}
        <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
  MenuListProps={{ "aria-labelledby": "basic-button" }}
  disableScrollLock={true} // Prevents layout shift when the menu is opened
>

          {/* Email Menu Item */}
          <MenuItem
            onClick={() => {
              handleCopyEmail();
              handleMenuClose();
            }}
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Box component="span" sx={{ textDecoration: "none", color: "inherit" }}>
              <EmailIcon sx={{ mr: 2 }} /> Email: samnelson7@hotmail.com
            </Box>
          </MenuItem>
          {/* LinkedIn Menu Item */}
          <MenuItem
            onClick={() => {
              window.open("https://www.linkedin.com/in/sam-nelson-73003a250/", "_blank", "noopener noreferrer");
              handleMenuClose();
            }}
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Box component="span" sx={{ textDecoration: "none", color: "inherit" }}>
              <LinkedInIcon sx={{ mr: 2 }} /> LinkedIn: Sam Nelson
            </Box>
          </MenuItem>
          {/* GitHub Menu Item */}
          <MenuItem
            onClick={() => {
              window.open("https://github.com/samnelson7", "_blank", "noopener noreferrer");
              handleMenuClose();
            }}
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Box component="span" sx={{ textDecoration: "none", color: "inherit" }}>
              <GitHubIcon sx={{ mr: 2 }} /> GitHub: samnelson7
            </Box>
          </MenuItem>
        </Menu>

        {/* Success Snackbar (Pop-up box) */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000} // Automatically hide after 2 seconds
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Position at bottom-right
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
            Email copied successfully!
          </Alert>
        </Snackbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
