"use client";

import React, { useState } from "react";
import { CssBaseline, Container, Typography, Box, Grid, Snackbar, Alert } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Green checkmark
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false); // Track if the email box was clicked
  const [openSnackbar, setOpenSnackbar] = useState(false); // Track Snackbar visibility

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Handle email box click, copy email to clipboard, show the green checkmark for 2 seconds
  const handleEmailClick = () => {
    const email = "samnelson7@hotmail.com";

    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
      setEmailClicked(true);
      setOpenSnackbar(true); // Show success notification
      setTimeout(() => {
        setEmailClicked(false); // Reset after 2 seconds
        setOpenSnackbar(false); // Hide success notification
      }, 2000);
    }).catch((err) => {
      console.error("Failed to copy email: ", err);
    });
  };

  return (
    <>
      <CssBaseline />
      <Header onDrawerToggle={toggleDrawer} />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Container maxWidth={false} sx={{ mt: 4 }}>
        <Box sx={{ width: "100%", padding: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" gutterBottom>
            Feel free to connect with me through one of the following platforms:
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* LinkedIn */}
            <Grid item xs={12} md={4}>
              <Box
                component="a"
                href="https://www.linkedin.com/in/sam-nelson-73003a250/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 3,
                  border: "2px solid royalblue",
                  borderRadius: 2,
                  textDecoration: "none",
                  color: "inherit",
                  height: "250px", 
                  cursor: "pointer", // Make it clickable
                  "&:hover": {
                    backgroundColor: "royalblue",
                    color: "white",
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 48 }} />
                <Typography variant="h6">LinkedIn</Typography>
              </Box>
            </Grid>

            {/* GitHub */}
            <Grid item xs={12} md={4}>
              <Box
                component="a"
                href="https://github.com/samnelson7"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 3,
                  border: "2px solid royalblue",
                  borderRadius: 2,
                  textDecoration: "none",
                  color: "inherit",
                  height: "250px", 
                  cursor: "pointer", // Make it clickable
                  "&:hover": {
                    backgroundColor: "royalblue",
                    color: "white",
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 48 }} />
                <Typography variant="h6">GitHub</Typography>
              </Box>
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={4}>
              <Box
                component="div"
                onClick={handleEmailClick}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 3,
                  border: "2px solid royalblue",
                  borderRadius: 2,
                  textDecoration: "none",
                  color: "inherit",
                  height: "250px", 
                  cursor: "pointer", // Make it clickable
                  "&:hover": emailClicked ? undefined : {
                    backgroundColor: "royalblue",
                    color: "white",
                  },
                }}
              >
                {emailClicked ? (
                  <CheckCircleIcon sx={{ fontSize: 48, color: "green" }} />
                ) : (
                  <>
                    <EmailIcon sx={{ fontSize: 48 }} />
                    <Typography variant="h6">Email</Typography>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

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
    </>
  );
}
