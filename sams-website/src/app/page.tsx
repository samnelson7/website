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
              fontSize: "24px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: { xs: "95%", md: "100%" },
            }}
          >
            <Link href="/contact" color="inherit">Contact Me</Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "24px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: { xs: "40%", md: "100%" },
            }}
          >
            <strong>Education</strong>
          </Typography>
          <Box
  sx={{
    backgroundColor: "white",
    p: 3,
    borderRadius: 2,
    boxShadow: 3,
    maxWidth: { xs: "40%", md: "40%" }, // Adjust width for better readability
    color: "black", // Set text color to black for contrast
    mt: 0,
  }}
>
  <Typography
    variant="body1"
    component="p"
    sx={{
      fontFamily: "'Roboto', sans-serif",
      fontSize: "18px",
      lineHeight: 1.8,
    }}
  >
    Bachelor of Software Engineering student at the University of Victoria with a 90% GPA, multiple academic scholarships, and research
    experience in automated feedback systems for students. <Link href="/education">Learn more</Link>    
  </Typography>
</Box>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "24px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: { xs: "100%", md: "100%" },
            }}
          >
            <strong>Work Experience</strong>
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: { xs: "95%", md: "40%" }, // Keeping the original maxWidth
              color: "black", // Ensuring readable text
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "black", // Adjusting text color for contrast
                textShadow: "none", // Removing shadow for better readability
              }}
            >
              Experience in development with Tekla Open API, testing automation, and research-driven solutions. 
              Skilled in C#, Java, and web automation frameworks. <Link href="/work">Learn more</Link>  
            </Typography>
          </Box>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "24px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: { xs: "95%", md: "100%" },
            }}
          >
            <strong>Projects</strong>
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: { xs: "95%", md: "95%" }, // Keeping the original maxWidth
              color: "black", // Ensuring readable text
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "black", // Adjusting text color for contrast
                textShadow: "none", // Removing shadow for better readability
              }}
            >
              <strong>WAVTool:</strong> Co-developed at Exact Detailing. Allows users to better plan steel weld planning in steel fabrication using the AGT BeamMaster. 
              <br />
              <strong>VirtualER:</strong> Web-based application that allows patients to easily find wait times of nearby emergency rooms to meet their medical needs. 
              <br />
              <strong>Automated Feedback for Engineering:</strong> Performed joint research into frequent student mistakes and developed automated feedback for homework problems. This included generating graphs and automated feedback messages.
              <br/>
              Check out my <Link href="/projects">other projects</Link>!  
            </Typography>
          </Box>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "24px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: { xs: "95%", md: "100%" },
            }}
          >
            <strong>Technologies and Tools</strong>
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: { xs: "95%", md: "95%" }, // Keeping the original maxWidth
              color: "black", // Ensuring readable text
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "black", // Adjusting text color for contrast
                textShadow: "none", // Removing shadow for better readability
              }}
            >
              <strong>Languages:</strong> C, C#, Java, JavaScript, TypeScript, Python, Perl, R, and more.
              <br />
              <strong>Databases:</strong> PostgreSQL, SQLite.
              <br />
              <strong>Frameworks:</strong> React, Next.js, Spring, .NET, WPF, and more.
              <br />
              <strong>DevOps & Tools:</strong> Docker, Git, Jenkins, Selenium, Ansible, and JUnit.
              <br />
              Check out all of the technologies I use in my projects and in the workplace <Link href="/techtools">here</Link>!
            </Typography>
          </Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "24px",
              lineHeight: 1.8,
              mt: 2,
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              maxWidth: { xs: "95%", md: "100%" },
            }}
          >
            <strong>Interests</strong>
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: { xs: "95%", md: "95%" }, // Keeping the original maxWidth
              color: "black", // Ensuring readable text
              mt: 2,
              mb: 2,
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "black", // Adjusting text color for contrast
                textShadow: "none", // Removing shadow for better readability
              }}
            >
              In my free time I love playing basketball, hiking, paddling, traveling, and learning about dinosaurs! Learn more on my <Link href="/interests">interests page</Link>.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
