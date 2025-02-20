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
              maxWidth: { xs: "70%", md: "40%" },
              padding: { xs: 2, md: 0 },
            }}
          >
            Passionate about building efficient and innovative software solutions.
            Experienced in a range of programming languages, frameworks, and DevOps tools. Check out my <Link href="/projects">projects</Link>, <Link href="/work">work experience</Link>, or <Link href="/interests">interests</Link> to learn more about me!
            <br />
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
              maxWidth: { xs: "100%", md: "40%" },
              padding: { xs: 2, md: 0 },
            }}
          >
            <strong>Want to see all of the tools I have used and languages I know? Visit <Link href="/techtools">technologies and tools</Link> for more! </strong>
            <br />
            <strong>Languages:</strong> C, C#, Java, JavaScript, TypeScript, Python, Perl, R, and more.
            <br />
            <strong>Databases:</strong> PostgreSQL, SQLite.
            <br />
            <strong>Frameworks:</strong> React, Next.js, Spring, .NET, WPF and more.
            <br />
            <strong>DevOps & Tools:</strong> Docker, Git, Jenkins, Selenium, Ansible, and JUnit.
            <br />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Page;
