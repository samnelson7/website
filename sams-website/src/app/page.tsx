"use client"

import React from "react";
import { CssBaseline, Typography, Box, Link } from "@mui/material";
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
      background-color: #1c375d; /* Blue background behind image */
      overflow-x: hidden; /* Prevent horizontal scrolling */
      overflow-y: auto; /* Allow vertical scrolling when necessary */
    }

    /* Ensure the full viewport is used for the image section */
    .image-section {
      position: relative;
      height: 100vh; /* Full viewport height for the image section */
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, #1c375d 100%), url('/images/Ontario3.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    @media (max-width: 768px) {
      /* Adjust for mobile screens */
      .image-section {
        background-position: 60% center; /* Shift the image to the left of center */
      }
    }

    .content-wrapper {
      background-color: #1c375d; /* Blue background */
      color: white;
      padding: 20px;
      padding-top: 20px; /* Some padding on top to keep the content aligned */
      padding-bottom: 20px; /* Padding to ensure space at the bottom */
    }

    .languages-info {
      margin-top: 20px;
    }

    .frameworks-info {
      margin-top: 20px;
    }
  `}
</style>


      <Header />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      {/* Full Image Section with Smooth Fade */}
      <Box className="image-section">
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
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: { xs: "95%", sm: "95%", md: "95%", lg: "100%" }, 
              color: "black",
              mt: { xs: 40, sm:40, md: 40, lg: 0 },
              mb: {xs:2, md:0},
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "black",
                textShadow: "none",
              }}
            >
              <span style={{ display: 'block' }}>
                <Link href="/education">Education:</Link> Bachelor of Software Engineering
              </span>
              <span style={{ display: 'block' }}>
                <Link href="/work">Work:</Link> Tekla API Developer, QA Automation Developer, Software Intern
              </span>
              <span style={{ display: 'block' }}>
                <Link href="/projects">Projects:</Link> WAVTool, VirtualER, Automated Feedback for Engineering
              </span>
              <span style={{ display: 'block' }}>
                <Link href="/techtools">Technologies:</Link> C#, C, Java, Python, Perl, R, JUnit, Postgres, and more.
              </span>
              <span style={{ display: 'block' }}>
                <Link href="/interests">Interests:</Link> Basketball, travel, hiking, paddling, and dinosaurs! 
              </span>
              <span style={{ display: 'block' }}>
                <Link href="/contact">Contact:</Link> Reach out to me!
              </span>
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Page;
