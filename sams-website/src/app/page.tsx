"use client";

import React from "react";
import { CssBaseline, Typography, Box } from "@mui/material";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

export default function Layout({}: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden; /* Prevent scroll bars */
          }
        `}
      </style>
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
            top: "50px", // Adjust the top position
            left: "5%",
            color: "white", // Text color set to white
            textAlign: "left", // Align text to the left
            zIndex: 10, // Ensure the text appears above the image
          }}
        >
          {/* Title */}
          <Typography
            variant="h2" // Larger font size
            component="h1"
            sx={{
              fontFamily: "'Poppins', sans-serif", // Font-family of Poppins
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

          {/* Descriptive Text */}
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif", // Modern and readable font
              fontSize: "18px", // Slightly larger for emphasis
              lineHeight: 1.8, // Comfortable line spacing
              mt: 2, // Add margin-top for spacing
              color: "white", // Set text to white
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)", // Subtle shadow for readability
              maxWidth: "40%", // Constrain width for better layout
            }}
          >
            Driven by a passion for programming, I am dedicated to continuously learning and exploring new technologies. 
            With experience in creating intuitive designs to enhance the user experience, rigorously testing software 
            to meet stakeholder needs, and solving problems through collaboration, 
            I take pride in crafting scalable and maintainable solutions to complex problems. 
          </Typography>
        </Box>
      </Box>
    </>
  );
}
