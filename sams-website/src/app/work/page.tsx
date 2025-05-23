"use client";

import React, { useState } from "react";
import { CssBaseline, Container, Typography, Box, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";
import {
  Work as WorkIcon,
} from "@mui/icons-material";


export default function Page() {
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
      <Header />
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
            <WorkIcon sx={{ fontSize: 28, color: "black" }} />
            <Typography variant="h4" sx={{ display: { xs: "block", md: "none" }, fontWeight: "bold" }}>
              Work
            </Typography>
            <Typography variant="h4" sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}>
              Work Experience
            </Typography>
            </Box>
            <Link href="/contact">
              <Typography variant="body1" component="span">
                Contact Me
              </Typography>
            </Link>
          </Typography>

          
          <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <strong> Undergraduate Teaching Assistant </strong> 
          </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              University of Victoria, Victoria, May 2025 - Aug 2025
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Designed exams and assignments for a third-year Operating Systems course, emphasizing real-world concepts like process control, memory management, and synchronization
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Led weekly tutorial sessions to reinforce course material, assist with assignments and exam preparation, and improve overall learning outcomes
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Developed detailed assignment specifications to clearly communicate requirements and expectations to support student success 
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Graded assignments with consistency and accuracy, providing constructive feedback to support student learning
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Collaborated closely with the teaching team to ensure assessments and materials aligned with course objectives and academic standards
            </Typography>

            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <strong> Tekla API Developer</strong> 
          </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              Exact Detailing, Victoria, May 2024 - Aug 2024
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Co-developed the <Link href="/projects">WAVTool</Link> (Weld Access Verification Tool), a collaboration with AGT Robotics, enabling users to visualize the accessibility of welds for robotic welders, now available on Tekla Warehouse
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Led development on the Clash Checker, a plugin to streamline the management of clashing steel parts, enabling task assignment and tracking which facilitated easier collaboration
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Collaborated with industry professionals to identify business objectives and design solutions that directly addressed productivity challenges
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Assisted in codebase maintenance, engaging with legacy code, and creating comprehensive documentation to support future developers and co-op students within the company
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Developed user-friendly tools using C#, Windows Forms, and WPF to streamline complex, repetitive tasks, improving workflow efficiency for detailers
            </Typography>

            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <strong> Quality Assurance Automation Developer</strong> 
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              Jostle Corporation, Vancouver, January 2023 - August 2023
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Led group testing sessions to collaboratively identify and resolve issues across many platforms which ensured comprehensive coverage of the web application across diverse environments
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Collaborated with a small team to update a large test suite to improve coverage while undergoing a large shift in technologies
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Utilised Jenkins and Red Hat tools to streamline release processes ensuring reliable software deployments
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Developed and maintained Selenium automation tests in Java to validate the integrity of web applications
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Wrote and executed automation test plans alongside the rollout of new features to ensure that no bugs were pushed to customers
            </Typography>
            </Typography>
            <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
                <strong> Software Intern</strong> 
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom>
              University of Victoria, Victoria, May 2022 - August 2022
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Created a solution that provided unique automated responses based on a variety of student inputs
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Worked remotely and independently on generating automated feedback responses to develop an innovative software solution to bring a professor’s idea to life
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Sought feedback from the design community and applied industry best practices which resulted in improved code for this specific technical solution
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Presented my research on an innovative <Link href="/projects">automated feedback solution</Link> showcasing its effectiveness in addressing student difficulties to peers, faculty, and research partners
            </Typography>
            <Typography variant="body2" gutterBottom sx={{
              wordWrap: "break-word",
              maxWidth: "80%",
              whiteSpace: "pre-line", 
              textIndent: "-0.8em",
              paddingLeft: "1em", 
              display: "block",
            }}>
              ▪ Conducted research to determine common difficulties for students resulting in more direct and specific feedback
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
