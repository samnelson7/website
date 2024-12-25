"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box } from "@mui/material";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

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

      {/* Full Image Section with Smooth Fade */}
      <Box
        sx={{
          position: "relative",
          height: "100vh", // Full viewport height for the image section
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, white 100%), url('/images/Ontario3.jpg')`,
          backgroundSize: "cover", // Ensure the image covers the full container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
        }}
      >
        {/* Welcome Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50px", // Adjust the top position to 10px from the top of the box
            left: "5%",
            color: "white", // Text color set to white
            textAlign: "left", // Center the text horizontally
            zIndex: 10, // Ensure the text appears above the image
          }}
        >
          <Typography
            variant="h2" // Larger font size
            component="h1"
            sx={{
              fontFamily: "'Montserrat', sans-serif", // Font-family of Montserrat
              fontWeight: 700, // Bold weight
              textTransform: "uppercase", // Uppercase text
              letterSpacing: 4, // Increase letter spacing for emphasis
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Subtle text shadow
            }}
            gutterBottom
          >
            SOFTWARE
            <br />
            ENGINEER
          </Typography>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Container
        maxWidth={false}
        sx={{
          padding: 2,
          backgroundColor: "white", // Ensure white background for the content
          position: "relative",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1">
            s
          </Typography>
          <br />
          <br />
          <Typography variant="h4" component="h1" gutterBottom>
            School
          </Typography>
        </Box>
      </Container>
    </>
  );
}
