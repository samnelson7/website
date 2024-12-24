"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box } from "@mui/material";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

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
            Welcome to my website
          </Typography>
          <Typography variant="body1">
            I originally decided to create this website as a portfolio highlighting some of the work that I have done over the course of my degree, but it has slowly grown into a place for me to practice some of my frontend development skills. In the fall of 2024, I decided with my team to develop a web applicaiton to help patients find nearby emergency rooms that best fit their needs, and we used a combination of JavaScript, React, Tailwind CSS, Next.js, and various component libraries. So, I decided to use those newly learned skills to build my website myself!
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to my website
          </Typography>
          <Typography variant="body1">
            I originally decided to create this website as a portfolio highlighting some of the work that I have done over the course of my degree, but it has slowly grown into a place for me to practice some of my frontend development skills. In the fall of 2024, I decided with my team to develop a web applicaiton to help patients find nearby emergency rooms that best fit their needs, and we used a combination of JavaScript, React, Tailwind CSS, Next.js, and various component libraries. So, I decided to use those newly learned skills to build my website myself!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
