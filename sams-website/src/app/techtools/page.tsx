"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box, Grid } from "@mui/material";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";

export default function TechToolsPage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Grouped Tools Data
  const sections = {
    Languages: [
      { name: "Assembly", icon: <img src="/images/ASM.png" alt="ASM Logo" style={{ width: 45, height: 45 }} /> },
      { name: "C", icon: <img src="/images/CLogo.png" alt="C Logo" style={{ width: 60, height: 60 }} /> },
      { name: "C#", icon: <img src="/images/CSharpLogo.png" alt="C# Logo" style={{ width: 60, height: 60 }} /> },
      { name: "HTML", icon: <img src="/images/HTML.png" alt="HTML Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Java", icon: <img src="/images/JavaLogo.webp" alt="Java Logo" style={{ width: 60, height: 60 }} /> },
      { name: "JavaScript", icon: <img src="/images/JS.png" alt="JavaScript Logo" style={{ width: 40, height: 40 }} /> },
      { name: "MATLAB", icon: <img src="/images/Matlab.png" alt="MATLAB Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Perl", icon: <img src="/images/Perl.png" alt="Perl Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Python", icon: <img src="/images/PythonLogo.png" alt="Python Logo" style={{ width: 48, height: 48 }} /> },
      { name: "R", icon: <img src="/images/R.png" alt="R Logo" style={{ width: 50, height: 50 }} /> },
      { name: "TypeScript", icon: <img src="/images/Typescript.png" alt="TypeScript Logo" style={{ width: 40, height: 40 }} /> },
    ],
    Databases: [
      { name: "Postgres", icon: <img src="/images/Postgres.png" alt="Postgres Logo" style={{ width: 50, height: 50 }} /> },
      { name: "SQLite", icon: <img src="/images/SQLite.png" alt="SQLite Logo" style={{ width: 50, height: 50 }} /> },
    ],
    Frameworks: [
      { name: ".NET", icon: <img src="/images/NET.png" alt="NET Logo" style={{ width: 50, height: 50 }} /> },
      { name: "CSS", icon: <img src="/images/CSS.png" alt="CSS Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Next.js", icon: <img src="/images/Next.png" alt="Next.js Logo" style={{ width: 50, height: 50 }} /> },
      { name: "React", icon: <img src="/images/React.png" alt="React Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Spring", icon: <img src="/images/Spring.png" alt="Spring Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Tailwind", icon: <img src="/images/Tailwind.png" alt="Tailwind Logo" style={{ width: 50, height: 30 }} /> },
    ],
    "DevOps & Other Tools": [
      { name: "Ansible", icon: <img src="/images/Ansible.png" alt="Ansible Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Docker", icon: <img src="/images/Docker.webp" alt="Docker Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Git", icon: <img src="/images/Git.png" alt="Git Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Jenkins", icon: <img src="/images/Jenkins.png" alt="Jenkins Logo" style={{ width: 40, height: 60 }} /> },
      { name: "JUnit", icon: <img src="/images/JUnit.png" alt="JUnit Logo" style={{ width: 50, height: 50 }} /> },
      { name: "Selenium", icon: <img src="/images/Selenium.png" alt="Selenium Logo" style={{ width: 50, height: 50 }} /> },
    ],
  };

  return (
    <>
      <CssBaseline />
      <Header onDrawerToggle={toggleDrawer} />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Container
        maxWidth={false}
        sx={{
          mt: 0,
          display: "flex",
          justifyContent: "center",
          backgroundImage: "url(/images/Techbg.avif)",
          backgroundRepeat: "no-repeat", // Prevent repeating the image
          backgroundSize: "cover", // Ensure the background covers the entire container
          backgroundPosition: "center", // Center the background image
          color: "white",
          minHeight: "100vh", // Ensure the container takes at least full viewport height
        }}
      >

        <Box sx={{ width: "50%", padding: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Technology and Tools
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore the programming languages, databases, frameworks, and tools I frequently use:
          </Typography>

          {Object.entries(sections).map(([sectionTitle, tools]) => (
            <Box key={sectionTitle} sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {sectionTitle}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {`A selection of ${sectionTitle.toLowerCase()} that I frequently utilize in my projects.`}
              </Typography>
              <Grid container spacing={2}>
                {tools.map((tool, index) => (
                  <Grid item key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 1,
                        border: "2px solid white",
                        borderRadius: 2,
                        textDecoration: "none",
                        color: "inherit",
                        height: "80px",
                        width: "150px",
                        backgroundColor: "#000D1A",
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "#1c375d",
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
          ))}
        </Box>
      </Container>
    </>
  );
}
