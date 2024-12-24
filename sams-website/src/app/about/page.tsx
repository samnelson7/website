"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box } from "@mui/material";
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
          About Me
        </Typography>
        <Typography variant="body1">
          This is the about page. Here you can learn more about me and my background.
        </Typography>
      </Box>
      </Container>
    </>
  );
}

