"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box, Link} from "@mui/material";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function Layout({ children }: { children: React.ReactNode })  {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <Header onDrawerToggle={toggleDrawer} /> {/* Pass the toggleDrawer function as prop */}
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} /> {/* Pass drawerOpen and toggleDrawer as props */}

      {/* Main Content */}
      <Container maxWidth={false} sx={{ mt: 4}}>
      <Box sx={{ width: '100%', padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1">
        This page highlights a few projects that I have completed since starting university in 2021. This includes school projects, personal projects, and through my co-op work terms.
        </Typography>
        
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
              Weld Access Verification Tool Demo Video
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: "md", // Adjust the max width to fit your layout
              margin: "0 auto", // Center the video
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow to make it look more styled
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <video controls width="100%">
              <source src="/videos/WAVDemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      </Box>
      </Container>
    </>
  );
}

