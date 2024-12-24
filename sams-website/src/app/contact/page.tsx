"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <Header onDrawerToggle={toggleDrawer} />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Container maxWidth={false} sx={{ mt: 4}}>
        <Box sx={{ width: "100%", padding: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" gutterBottom>
            The best way to reach me is through one of the following platforms:
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* LinkedIn */}
            <Grid item xs={12} md={4}>
              <Box
                component="a"
                href="https://linkedin.com/in/your-profile"
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
                href="https://github.com/your-profile"
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

          {/* Display Email Text */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1">
              Or you can reach me directly at:{" "}
              <a
                href="mailto:sam@hotmail.com"
                style={{
                  color: "indigo",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                sam@hotmail.com
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
