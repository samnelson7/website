"use client";

import React, { useState } from "react";
import { CssBaseline, Container, Typography, Box, ListItem, List, Grid, Link } from "@mui/material";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <Header onDrawerToggle={toggleDrawer} />
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
        {/* Left Sidebar */}
        <Box
          sx={{
            width: "20%",
            backgroundColor: "#1c375d",
            minHeight: "100vh",
          }}
        />

        {/* Main Content Area (Centered) */}
        <Container
          maxWidth="md"
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
            <Typography variant="h4" component="h1" gutterBottom>
              Education
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Bachelor of Software Engineering
            </Typography>
            <Typography variant="body1" gutterBottom>
              University of Victoria (2021-2026)
            </Typography>
            <Typography variant="body2" gutterBottom>
              ▪ Highly motivated student with a 90% GPA
            </Typography>
            <Typography variant="body2" gutterBottom>
              ▪ Performed <Link href="/work" color="inherit">joint research</Link> on generating automated feedback to improve student outcomes
            </Typography>
            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          </Box>

          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Relevant Coursework
            </Typography>

            {/* Grid Layout for Two Columns */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom>
                  ▪ Algorithms and Data Structures
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Discrete Mathematics
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Computer Architecture
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Operating Systems
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Database Systems
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Software Architecture and Design
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Software Testing
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom>
                  ▪ Software Development Methods
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Security Engineering
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Requirements Engineering
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Communication Networks
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Microprocessor-Based Systems
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Control Theory and Systems
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ▪ Continuous-Time Signals and Systems
                </Typography>
              </Grid>
            </Grid>

            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          </Box>


          {/* Awards Section */}
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Awards
            </Typography>

            {/* VKURA Award */}
            <Typography variant="h6" component="h2" gutterBottom>
            Valerie Kuehne Undergraduate Research Award
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Won nomination due to academic achievements and proposal for joint research </ListItem>
              <ListItem>• Developed an innovative software solution through the grant to create automated feedback responses based on diverse student inputs</ListItem>
            </List>

            {/* UVic Excellence Scholarship */}
            <Typography variant="h6" component="h2" gutterBottom>
              UVic Excellence Scholarship
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Earned and maintained throughout my degree based on a high GPA</ListItem>
            </List>

            <Box sx={{ marginBottom: 2 }} />

            {/* Faculty of Engineering and Computer Science: Dean's Entrance Scholarship */}
            <Typography variant="h6" component="h2" gutterBottom>
              Faculty of Engineering and Computer Science: Dean's Entrance Scholarship
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Earned upon entering my first year at UVic for exceptional academic achievement</ListItem>
            </List>

            <Box sx={{ marginBottom: 2 }} />

            {/* Major W. Horan Memorial Scholarship */}
            <Typography variant="h6" component="h2" gutterBottom>
              Major W. Horan Memorial Scholarship
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Awarded upon entering my first year at UVic for academic achievement</ListItem>
            </List>

            <Box sx={{ marginBottom: 2 }} />

            {/* District/Authority Scholarship */}
            <Typography variant="h6" component="h2" gutterBottom>
              District/Authority Scholarship
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Awarded for demonstrating excellence in Physical Activity and Health</ListItem>
              <ListItem>• Recognized for my volunteering, coaching, and involvement in school and community sports programs</ListItem> 
            </List>

            <Box sx={{ marginBottom: 2 }} />

            {/* RMSC Scholarship */}
            <Typography variant="h6" component="h2" gutterBottom>
              Ridge Meadows Soccer Club Scholarship
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• I earned this award for my volunteer coaching and playing contributions</ListItem>
            </List>

            <Box sx={{ marginBottom: 2 }} />

            {/* Top Science student */}
            <Typography variant="h6" component="h2" gutterBottom>
              Top Science Student
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Earned in high school for having the highest grades amongst Biology, Chemistry, and Physics in a graduating class of 200</ListItem>
            </List>

            <Box sx={{ marginBottom: 2 }} />

            {/* Top French student */}
            <Typography variant="h6" component="h2" gutterBottom>
              Top French Student
            </Typography>
            <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
              <ListItem>• Earned in high school for having the highest grade in the French Immersion program</ListItem>
            </List>
          </Box>
        </Container>

        {/* Right Sidebar */}
        <Box
          sx={{
            width: "20%",
            backgroundColor: "#1c375d",
            minHeight: "100vh",
          }}
        />
      </Box>
    </>
  );
}
