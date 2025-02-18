"use client"

import React, { useState } from "react";
import { CssBaseline, Container, Typography, Box, Link } from "@mui/material";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({  }: LayoutProps) {
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
          {/* All your content goes here */}
          <Box>
            <Typography variant="h5" component="h1" gutterBottom>
              Tekla API Developer
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              Exact Detailing, Victoria, May 2024 - Aug 2024
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom>
              ▪ Co-developed the <Link href="/projects">WAVTool</Link> (Weld Access Verification Tool), a collaboration with AGT Robotics, enabling users to visualize the accessibility of welds for robotic welders, now available on Tekla Warehouse
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom>
              ▪ Led development on the Clash Checker, a plugin to streamline the management of clashing steel parts, enabling task assignment and tracking which facilitated easier collaboration
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Collaborated with industry professionals to identify business objectives and design solutions that directly addressed productivity challenges
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Assisted in codebase maintenance, engaging with legacy code, and creating comprehensive documentation to support future developers and co-op students within the company
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Developed user-friendly tools using C#, Windows Forms, and WPF to streamline complex, repetitive tasks, improving workflow efficiency for detailers
            </Typography>

            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

            <Typography variant="h5" component="h1" gutterBottom>
              Quality Assurance Automation Developer
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              Jostle Corporation, Vancouver, January 2023 - August 2023
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Led group testing sessions to collaboratively identify and resolve issues across many platforms which ensured comprehensive coverage of the web application across diverse environments
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Collaborated with a small team to update a large test suite to improve coverage while undergoing a large shift in technologies
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Utilised Jenkins and Red Hat tools to streamline release processes ensuring reliable software deployments
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Developed and maintained Selenium automation tests in Java to validate the integrity of web applications
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Wrote and executed automation test plans alongside the rollout of new features to ensure that no bugs were pushed to customers
            </Typography>
            </Typography>
            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

            <Typography variant="h5" component="h1" gutterBottom>
                Software Intern
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              University of Victoria, Victoria, May 2022 - August 2022
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Created a solution that provided unique automated responses based on a variety of student inputs
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Worked remotely and independently on generating automated feedback responses to develop an innovative software solution to bring a professor’s idea to life
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Sought feedback from the design community and applied industry best practices which resulted in improved code for this specific technical solution
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Presented my research on an innovative <Link href="/projects">automated feedback solution</Link> showcasing its effectiveness in addressing student difficulties to peers, faculty, and research partners
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: "80%", wordWrap: "break-word" }}>
              ▪ Conducted research to determine common difficulties for students resulting in more direct and specific feedback
            </Typography>
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
