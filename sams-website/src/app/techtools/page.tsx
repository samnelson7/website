"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box, Grid } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal"; // Using Terminal icon for C
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function TechToolsPage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const tools = [
    // Languages
    {
      name: "Assembly",
      icon: <img src="/images/ASM.png" alt="ASM Logo" style={{ width: 45, height: 45 }} />,
    },
    {
      name: "C",
      icon: <img src="/images/CLogo.png" alt="C Logo" style={{ width: 60, height: 60 }} />,
    },
    {
      name: "C#",
      icon: <img src="/images/CSharpLogo.png" alt="C# Logo" style={{ width: 60, height: 60 }} />,
    },
    {
      name: "HTML",
      icon: <img src="/images/HTML.png" alt="HTML Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Java",
      icon: <img src="/images/JavaLogo.webp" alt="Java Logo" style={{ width: 60, height: 60 }} />,
    },
    {
      name: "JavaScript",
      icon: <img src="/images/JS.png" alt="JavaScript Logo" style={{ width: 40, height: 40 }} />,
    },
    {
      name: "MATLAB",
      icon: <img src="/images/Matlab.png" alt="Matlab Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Perl",
      icon: <img src="/images/Perl.png" alt="Perl Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Python",
      icon: <img src="/images/PythonLogo.png" alt="Python Logo" style={{ width: 48, height: 48 }} />,
    },
    {
      name: "R",
      icon: <img src="/images/R.png" alt="R Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "TypeScript",
      icon: <img src="/images/Typescript.png" alt="TypeScript Logo" style={{ width: 40, height: 40 }} />,
    },
  
    // Frameworks
    {
      name: ".NET",
      icon: <img src="/images/NET.png" alt="NET Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "CSS",
      icon: <img src="/images/CSS.png" alt="CSS Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "React",
      icon: <img src="/images/React.png" alt="React Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Spring",
      icon: <img src="/images/Spring.png" alt="Spring Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Tailwind",
      icon: <img src="/images/Tailwind.png" alt="Tailwind Logo" style={{ width: 50, height: 30 }} />,
    },
  
    // Other
    {
      name: "Ansible",
      icon: <img src="/images/Ansible.png" alt="Ansible Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Docker",
      icon: <img src="/images/Docker.webp" alt="Docker Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Git",
      icon: <img src="/images/Git.png" alt="Git Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Jenkins",
      icon: <img src="/images/Jenkins.png" alt="Jenkins Logo" style={{ width: 40, height: 60 }} />,
    },
    {
      name: "JUnit",
      icon: <img src="/images/JUnit.png" alt="JUnit Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Postgres",
      icon: <img src="/images/Postgres.png" alt="Postgres Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "Selenium",
      icon: <img src="/images/Selenium.png" alt="Selenium Logo" style={{ width: 50, height: 50 }} />,
    },
    {
      name: "SQLite",
      icon: <img src="/images/SQLite.png" alt="SQLite Logo" style={{ width: 50, height: 50 }} />,
    },
  ];
  

  return (
    <>
      <CssBaseline />
      <Header onDrawerToggle={toggleDrawer} />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Container maxWidth={false} sx={{ mt: 4 }}>
        <Box sx={{ width: "100%", padding: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Technology and Tools
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore the programming languages and tools I frequently use:
          </Typography>

          <Grid container spacing={0} sx={{ mt: 2, flexWrap: "wrap", gap: "10px" }}>
            {tools.map((tool, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row", // Align items in a row
                    alignItems: "center", // Vertically center the items
                    padding: 1, // Adjust padding for smaller boxes
                    border: "2px solid #1c375d",
                    borderRadius: 2,
                    textDecoration: "none",
                    color: "inherit",
                    height: "80px", 
                    width: "150px",  
                    "&:hover": {
                      backgroundColor: "#1c375d",
                      color: "white",
                    },
                  }}
                >
                  {tool.icon}
                  <Typography variant="h6" sx={{ fontSize: "1rem", marginLeft: 2 }}>
                    {tool.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
