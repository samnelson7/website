"use client";

import React, { useState } from "react";
import { CssBaseline, Container, Typography, Box, Grid, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";
import SchoolIcon from "@mui/icons-material/School";

export default function Layout() {  // Removed `children` prop here
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  
  // Replace 'md' with whatever breakpoint your Header collapses at
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <Header/>
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          paddingTop: "0px",
          background: "none",
          overflowY: "auto",
        }}
      >
        {/* Left Sidebar (Hidden on Small Screens) */}
                {!isMobile && (
                  <Box
                    sx={{
                      width: "20%",
                      backgroundColor: "#1c375d",
                      minHeight: "100vh",
                    }}
                  />
                )}

        {/* Main Content Area */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            paddingTop: 2,
            paddingBottom: 4,
            marginTop: "0px",
            minHeight: "100%",
          }}
        >
          <Box>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SchoolIcon sx={{ fontSize: 32, color: "black" }} />
            <strong> Education</strong> 
              
            </Box>
            <Link href="/contact" >
              <Typography variant="body1" component="span">
                Contact Me
              </Typography>
            </Link>
          </Typography>
          <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "stretch", 
              justifyContent: "space-between", 
              gap: 3, 
            }}
          >
            {/* Left Side: Text Content */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
              <strong> Bachelor of Software Engineering</strong> 
              </Typography>

              <Typography variant="h6" gutterBottom>
              <strong> University of Victoria (2021-2026)</strong> 
              </Typography>
              
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { xs: "80%", md: "70%" },
                  whiteSpace: "pre-line", 
                  textIndent: "-0.8em",
                  paddingLeft: "1em", 
                  display: "block",
                }}
              >
                {"▪ High achieving student with a 90% GPA."}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { xs: "80%", md: "70%" },
                  whiteSpace: "pre-line", 
                  textIndent: "-0.8em",
                  paddingLeft: "1em", 
                  display: "block",
                }}
              >
                {"▪ Performed joint research on generating automated feedback to improve student outcomes."}
              </Typography>
              
              <Typography variant="body2" gutterBottom sx={{ maxWidth: { xs: "80%", md: "70%" } }}>
                <br/>
                Check out <Link href="/projects">Automated Feedback for Engineering</Link> in my projects!
              </Typography>
            </Box>

            {/* Right Side: Image */}
            <Box 
              component="img" 
              src="/images/ECS.jpg" 
              alt="Picture of UVic" 
              sx={{ 
                height: "100%", 
                width: "auto", 
                display: {xs: "none", md: "block"},
                maxHeight: 210, // Adjust based on your needs
                alignSelf: "flex-start", // Aligns the top of the image with the top of the text
              }} 
            />
          </Box>

            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          </Box>

          <Box>
            <Typography variant="h5" component="h1" gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <strong> Relevant Coursework</strong> 
            </Typography>

            {/* Grid Layout for Two Columns */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom>▪ Advanced Programming Techniques for Robust Efficient Computing</Typography>
                <Typography variant="body2" gutterBottom>▪ Algorithms and Data Structures</Typography>
                <Typography variant="body2" gutterBottom>▪ Discrete Mathematics</Typography>
                <Typography variant="body2" gutterBottom>▪ Computer Architecture</Typography>
                <Typography variant="body2" gutterBottom>▪ Operating Systems</Typography>
                <Typography variant="body2" gutterBottom>▪ Database Systems</Typography>
                <Typography variant="body2" gutterBottom>▪ Software Architecture and Design</Typography>
                <Typography variant="body2" gutterBottom>▪ Software Testing</Typography>
                <Typography variant="body2" gutterBottom>▪ Digital Signal Processing</Typography>
                <Typography variant="body2" gutterBottom>▪ Real Time Computer Systems</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom>▪ Software Development Methods</Typography>
                <Typography variant="body2" gutterBottom>▪ Security Engineering</Typography>
                <Typography variant="body2" gutterBottom>▪ Requirements Engineering</Typography>
                <Typography variant="body2" gutterBottom>▪ Communication Networks</Typography>
                <Typography variant="body2" gutterBottom>▪ Microprocessor-Based Systems</Typography>
                <Typography variant="body2" gutterBottom>▪ Control Theory and Systems</Typography>
                <Typography variant="body2" gutterBottom>▪ Intro to Artificial Intelligence</Typography>
                <Typography variant="body2" gutterBottom>▪ Continuous-Time Signals and Systems</Typography>
                <Typography variant="body2" gutterBottom>▪ Embedded Systems</Typography>
                <Typography variant="body2" gutterBottom>▪ Software Quality Engineering</Typography>
              </Grid>
            </Grid>

            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          </Box>

          {/* Awards Section */}
          <Box sx={{ marginTop: 4 }}>
          <Typography 
            variant="h5" 
            component="h1" 
            gutterBottom 
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <strong> Awards</strong> 
          </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong> Valerie Kuehne Undergraduate Research Award</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Awarded for academic achievements and a proposal for joint research which led to the development of an <Link href="/projects">innovative software solution</Link> through the grant to create automated feedback responses based on diverse student inputs
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong> UVic Excellence Scholarship</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Retained and upheld throughout degree based on a high GPA
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong> Faculty of Engineering and Computer Science: Dean&apos;s Entrance Scholarship</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Won based on exceptional academic achievement upon entering first year at UVic
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong> Major W. Horan Memorial Scholarship</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Received for academic excellence upon entering first year at UVic
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong>  District/Authority Scholarship</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Obtained for excellence in Physical Activity and Health, with recognition for volunteering, coaching, and active involvement in school and community sports programs
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong> Ridge Meadows Soccer Club Scholarship</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Granted for volunteer coaching, playing contributions, and references
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom sx={{ marginBottom: 0 }}>
            <strong> Top Science/French Student</strong> 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              marginBottom: 2,
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Earned in high school for highest grades in Biology, Chemistry, and Physics combined, and in the French immersion program in a graduating class of 200
            </Typography>

          </Box>
        </Container>

        {/* Right Sidebar (Hidden on Small Screens) */}
                {!isMobile && (
                  <Box
                    sx={{
                      width: "20%",
                      backgroundColor: "#1c375d",
                      minHeight: "100vh",
                    }}
                  />
                )}
      </Box>
    </>
  );
}
