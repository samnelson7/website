import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from "@mui/material";
import { Menu as MenuIcon, ContentCopy as ClipboardIcon } from "@mui/icons-material";

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle }) => {
  // State for the dropdown menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [copied, setCopied] = React.useState(false);

  // Handle opening the menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle copying email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("samnelson7@hotmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);  // Reset copied state after 1 second
    } catch (err) {
      // Handle error silently
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "indigo" }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sam Nelson
        </Typography>

        {/* Circular profile image with hover effect and pointer cursor */}
        <IconButton
          onClick={handleMenuOpen}
          sx={{
            ml: 2,
            "&:hover": {
              transform: "scale(1.1)",  // Increase size on hover
            },
            cursor: "pointer", // Pointer cursor to show it's clickable
            transition: "all 0.3s ease", // Smooth transition for hover effects
          }}
        >
          <Avatar
            alt="Sam Nelson"
            src="/images/profile.jpg"  // Use your image URL here
            sx={{ width: 50, height: 50 }}  // Adjust the size as needed
          />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/* Email with Clipboard Icon */}
          <MenuItem
            onClick={() => {
              handleCopyEmail(); // Copy the email
              handleMenuClose(); // Close the menu
            }}
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Box component="span" sx={{ textDecoration: "none", color: "inherit" }}>
              Email: samnelson7@hotmail.com
            </Box>
            <IconButton sx={{ color: "inherit" }}>
              <ClipboardIcon />
            </IconButton>
          </MenuItem>

          {/* LinkedIn */}
          <MenuItem
            onClick={() => {
              window.open("https://www.linkedin.com/in/sam-nelson-73003a250/", "_blank", "noopener noreferrer");
              handleMenuClose(); // Close the menu
            }}
          >
            <Box sx={{ textDecoration: "none", color: "inherit" }}>
              LinkedIn: Sam Nelson
            </Box>
          </MenuItem>

          {/* GitHub */}
          <MenuItem
            onClick={() => {
              window.open("https://github.com/samnelson7", "_blank", "noopener noreferrer");
              handleMenuClose(); // Close the menu
            }}
          >
            <Box sx={{ textDecoration: "none", color: "inherit" }}>
              GitHub: Samnelson7
            </Box>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
