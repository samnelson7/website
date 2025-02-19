"use client";

import React from "react";
import { CssBaseline, Typography, Box } from "@mui/material";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

const Page = () => {
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Welcome Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            left: "5%",
            color: "white",
            textAlign: "left",
            zIndex: 10,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 4,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
            gutterBottom
          >
            SOFTWARE
            <br />
            ENGINEER
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "18px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: "40%",
            }}
            // add text below
          >
            
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Page;
