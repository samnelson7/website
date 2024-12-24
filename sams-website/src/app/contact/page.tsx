"use client";

import React, { useState } from "react";
import { CssBaseline, Container, Typography, Box, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Check mark icon
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copied, setCopied] = useState(false); // Track copied state

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Handle copying email to clipboard without popup
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("samnelson7@hotmail.com");
      setCopied(true); // Set copied to true
      setTimeout(() => setCopied(false), 1000); // Reset after 1 second
    } catch (err) {
      // Handle failure silently, without showing a popup
    }
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
                  border: "2px solid indigo",
                  borderRadius: 2,
                  textDecoration: "none",
                  color: "inherit",
                  height: "250px", 
                  "&:hover": {
                    backgroundColor: "indigo",
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
                  border: "2px solid indigo",
                  borderRadius: 2,
                  textDecoration: "none",
                  color: "inherit",
                  height: "250px", 
                  "&:hover": {
                    backgroundColor: "indigo",
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
                component="a"
                href="mailto:sam@hotmail.com"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 3,
                  border: "2px solid indigo",
                  borderRadius: 2,
                  textDecoration: "none",
                  color: "inherit",
                  height: "250px", 
                  "&:hover": {
                    backgroundColor: "indigo",
                    color: "white",
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 48 }} />
                <Typography variant="h6">Email</Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Display Email Text with Copy Feature */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1">
              Or, you can reach me via email which I check daily:{" "}
              <span
                onClick={handleCopyEmail}
                style={{
                  color: "indigo",
                  textDecoration: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                samnelson7@hotmail.com
              </span>
              <IconButton
                onClick={handleCopyEmail}
                sx={{ ml: 1 }}
                color="inherit"
                size="small"
              >
                {copied ? (
                  <CheckCircleIcon sx={{ fontSize: 20, color: "green" }} />
                ) : (
                  <ContentCopyIcon sx={{ fontSize: 20 }} />
                )}
              </IconButton>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
