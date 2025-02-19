"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box, Grid } from "@mui/material";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";
import Image from "next/image"; // Importing Next.js Image component

export default function TechToolsPage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Grouped Tools Data
  const sections = {
    Languages: [
      { name: "Assembly", icon: <Image src="/images/ASM.png" alt="ASM Logo" width={45} height={45} /> },
      { name: "C", icon: <Image src="/images/CLogo.png" alt="C Logo" width={60} height={60} /> },
      { name: "C#", icon: <Image src="/images/CSharpLogo.png" alt="C# Logo" width={60} height={60} /> },
      { name: "HTML", icon: <Image src="/images/HTML.png" alt="HTML Logo" width={50} height={50} /> },
      { name: "Java", icon: <Image src="/images/JavaLogo.webp" alt="Java Logo" width={60} height={60} /> },
      { name: "JavaScript", icon: <Image src="/images/JS.png" alt="JavaScript Logo" width={40} height={40} /> },
      { name: "MATLAB", icon: <Image src="/images/Matlab.png" alt="MATLAB Logo" width={50} height={50} /> },
      { name: "Perl", icon: <Image src="/images/Perl.png" alt="Perl Logo" width={50} height={50} /> },
      { name: "Python", icon: <Image src="/images/PythonLogo.png" alt="Python Logo" width={48} height={48} /> },
      { name: "R", icon: <Image src="/images/R.png" alt="R Logo" width={50} height={50} /> },
      { name: "TypeScript", icon: <Image src="/images/Typescript.png" alt="TypeScript Logo" width={40} height={40} /> },
    ],
    Databases: [
      { name: "Postgres", icon: <Image src="/images/Postgres.png" alt="Postgres Logo" width={50} height={50} /> },
      { name: "SQLite", icon: <Image src="/images/SQLite.png" alt="SQLite Logo" width={50} height={50} /> },
    ],
    Frameworks: [
      { name: ".NET", icon: <Image src="/images/net.png" alt=".NET Logo" width={50} height={50} /> },
      { name: "CSS", icon: <Image src="/images/CSS.png" alt="CSS Logo" width={50} height={50} /> },
      { name: "Next.js", icon: <Image src="/images/Next.png" alt="Next.js Logo" width={50} height={50} /> },
      { name: "React", icon: <Image src="/images/React.png" alt="React Logo" width={50} height={50} /> },
      { name: "Spring", icon: <Image src="/images/Spring.png" alt="Spring Logo" width={50} height={50} /> },
      { name: "WPF", icon: <Image src="/images/wpf.svg" alt="WPF Logo" width={50} height={50} /> },
      { name: "Tailwind", icon: <Image src="/images/Tailwind.png" alt="Tailwind Logo" width={50} height={30} /> },
    ],
    "DevOps & Other Tools": [
      { name: "Ansible", icon: <Image src="/images/Ansible.png" alt="Ansible Logo" width={50} height={50} /> },
      { name: "Docker", icon: <Image src="/images/Docker.webp" alt="Docker Logo" width={50} height={50} /> },
      { name: "Git", icon: <Image src="/images/Git.png" alt="Git Logo" width={50} height={50} /> },
      { name: "Jenkins", icon: <Image src="/images/Jenkins.png" alt="Jenkins Logo" width={40} height={60} /> },
      { name: "JUnit", icon: <Image src="/images/JUnit.png" alt="JUnit Logo" width={50} height={50} /> },
      { name: "Selenium", icon: <Image src="/images/Selenium.png" alt="Selenium Logo" width={50} height={50} /> },
    ],
  };

  return (
    <>
      <CssBaseline />
      <Header  />
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
