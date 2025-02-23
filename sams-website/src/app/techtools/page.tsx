/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client";

import React from "react";
import { CssBaseline, Container, Typography, Box, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Button, Link, Avatar } from "@mui/material";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";
import Image from "next/image";
import {
  Build as BuildIcon,
} from "@mui/icons-material";

export default function TechToolsPage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedTool, setSelectedTool] = React.useState<any>(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDialogOpen = (tool: any) => {
    setSelectedTool(tool);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedTool(null);
  };

  // Grouped Tools Data with sample code examples
  const sections = {
    Contact:[
      {name: "Contact Me",
        icon: <Avatar src="/images/profile.JPG" alt="Profile Picture" sx={{width: 50, height: 50}} />,
      }
    ],
    Languages: [
      { 
        name: "Assembly", 
        icon: <Image src="/images/ASM.png" alt="ASM Logo" width={45} height={45} />,
        sampleCode: `MOV ECE, SENG\nADD PAIN, MISERY\nMOV SENG, ISA`
      },
      { 
        name: "C", 
        icon: <Image src="/images/CLogo.png" alt="C Logo" width={60} height={60} />,
        sampleCode: `#include <stdio.h>\nint main() {\n  printf("This was the first language I learned and what got me interested in programming!\\n");\n  return 0;\n}`
      },
      { 
        name: "C#", 
        icon: <Image src="/images/CSharpLogo.png" alt="C# Logo" width={60} height={60} />,
        sampleCode: `using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("I created many Tekla plugins in C# with Tekla Open API including the WAV Tool visible on the projects page!");\n  }\n}`
      },
      { 
        name: "HTML", 
        icon: <Image src="/images/HTML.png" alt="HTML Logo" width={50} height={50} />,
        sampleCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Website</title>\n  </head>\n  <body>\n    <h1> Learned to implement some corny website slogan </h1>\n  </body>\n</html>`
      },
      { 
        name: "Java", 
        icon: <Image src="/images/JavaLogo.webp" alt="Java Logo" width={60} height={60} />,
        sampleCode: `public class ObjectOrientedProgramming {\n  public static void main(String[] args) {\n    System.out.println("My second programming language, reinforcing object oriented principles");\n  }\n}`
      },
      { 
        name: "JavaScript", 
        icon: <Image src="/images/JS.png" alt="JavaScript Logo" width={40} height={40} />,
        sampleCode: `console.log("Forced to adopt for modern UI and web design. Not a big fan...");`
      },
      { 
        name: "MATLAB", 
        icon: <Image src="/images/Matlab.png" alt="MATLAB Logo" width={50} height={50} />,
        sampleCode: `disp('Get me away from the laplace and frequency domains, I'm losing it.')`
      },
      { 
        name: "Perl", 
        icon: <Image src="/images/Perl.png" alt="Perl Logo" width={50} height={50} />,
        sampleCode: `print "Anything but reading Perl, please. Learned this to program and generate WeBWork code for my first-year internship developing automated feedback solutions for students, viewable under Projects";`
      },
      { 
        name: "Python", 
        icon: <Image src="/images/PythonLogo.png" alt="Python Logo" width={48} height={48} />,
        sampleCode: `print("Learned in a Software Development Methods course, I would like to use it more. I am interested in its application in data analysis and visualization.")`
      },
      { 
        name: "R", 
        icon: <Image src="/images/R.png" alt="R Logo" width={50} height={50} />,
        sampleCode: `print("Used in entry level statistics courses. Unenthusiastically created plots.")`
      },
      { 
        name: "TypeScript", 
        icon: <Image src="/images/Typescript.png" alt="TypeScript Logo" width={40} height={40} />,
        sampleCode: `console.log("Similar sentiments to JavaScript. Learned due to necessity to talk about dinosaurs on my website.");`
      },
    ],
    Databases: [
      { 
        name: "Postgres", 
        icon: <Image src="/images/Postgres.png" alt="Postgres Logo" width={50} height={50} />,
        sampleCode: `SELECT * FROM databaseSystemsCourse WHERE knowledge_level = 'advanced'; -- I have never messed up a join`
      },
      { 
        name: "SQLite", 
        icon: <Image src="/images/SQLite.png" alt="SQLite Logo" width={50} height={50} />,
        sampleCode: `SELECT * FROM databaseSystemsCourseIntroduction WHERE interest_level = 'never been higher'; -- DBeaver is my savior`
      },
    ],
    Frameworks: [
      { 
        name: ".NET", 
        icon: <Image src="/images/net.png" alt=".NET Logo" width={50} height={50} />,
        sampleCode: `using ExactDetailingCoop;\nclass TeklaDev {\n  static void Main() {\n    Console.WriteLine("I used .NET to develop user friendly Tekla Plugins at Exact Detailing!");\n  }\n}`
      },
      { 
        name: "CSS", 
        icon: <Image src="/images/CSS.png" alt="CSS Logo" width={50} height={50} />,
        sampleCode: `body {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n  /* Making the web a worse place one div at a time */\n}`
      },      
      { 
        name: "Next.js", 
        icon: <Image src="/images/Next.png" alt="Next.js Logo" width={50} height={50} />,
        sampleCode: `import React from 'react';\nexport default function Home() {\n  return <h1>Used to create this beautiful website and VirtualER. Check it out in the projects page or on GitHub</h1>;\n}`
      },
      { 
        name: "React", 
        icon: <Image src="/images/React.png" alt="React Logo" width={50} height={50} />,
        sampleCode: `import React from 'react';\nfunction App() {\n  return <h1>I am the best React developer my mirror has ever met.</h1>;\n}\nexport default App;`
      },
      { 
        name: "Spring", 
        icon: <Image src="/images/Spring.png" alt="Spring Logo" width={50} height={50} />,
        sampleCode: `@SpringBootApplication\npublic class FirstCoopJobFramework {\n  public static void main(String[] args) {\n    SpringApplication.run(FirstCoopJobFramework.class, args);\n  }\n}`
      },
      { 
        name: "WPF", 
        icon: <Image src="/images/wpf.svg" alt="WPF Logo" width={50} height={50} />,
        sampleCode: `<Window x:Class="App.MainWindow">\n  <Grid>\n    <Button Content="Click to remove beams from my memory, please, I beg you. Used to design Tekla Plugins at Exact Detailing" />\n  </Grid>\n</Window>`
      },
      { 
        name: "Tailwind", 
        icon: <Image src="/images/Tailwind.png" alt="Tailwind Logo" width={50} height={30} />,
        sampleCode: `<div class="bg-blue-500 text-white p-4">Tailwind is good. We like Tailwind</div>`
      },
    ],
    "DevOps & Other Tools": [
      { 
        name: "Ansible", 
        icon: <Image src="/images/Ansible.png" alt="Ansible Logo" width={50} height={50} />,
        sampleCode: `---\n- hosts: localhost\n  tasks:\n    - name: Used in test automation co-op at Jostle. \n      apt:\n        name: Create production builds, run load tests, etc.\n        state: present`
      },
      { 
        name: "Docker", 
        icon: <Image src="/images/Docker.webp" alt="Docker Logo" width={50} height={50} />,
        sampleCode: `FROM python:3\nCOPY . /app\nRUN pip install -r /app/requirements.txt\nCMD ["python", "/app/app.py"]\n # Docker scares me. Sometimes it works the way I want it to. This time is not sometimes`
      },
      { 
        name: "Git", 
        icon: <Image src="/images/Git.png" alt="Git Logo" width={50} height={50} />,
        sampleCode: `git clone https://github.com/samnelson7/AlwaysForcePushMain.git\ncd AlwaysForcePushMain\ngit checkout -b BrokenBranch`
      },
      { 
        name: "Jenkins", 
        icon: <Image src="/images/Jenkins.png" alt="Jenkins Logo" width={40} height={60} />,
        sampleCode: `pipeline {\n  agent any\n  stages {\n    stage('Build') {\n      steps {\n        echo 'Used to create CI/CD pipelines at Jostle, mainly creating new builds in test servers for me personally.'\n      }\n    }\n  }\n}`
      },
      { 
        name: "JUnit", 
        icon: <Image src="/images/JUnit.png" alt="JUnit Logo" width={50} height={50} />,
        sampleCode: `import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertFalse;\nclass JostleTestAutomation {\n  @Test\n  void test() {\n    // Honing testing skills at Jostle\n    assertFalse(2 == 3, "Things have gone sideways. Give up.");\n  }\n}`
      },      
      { 
        name: "Selenium", 
        icon: <Image src="/images/Selenium.png" alt="Selenium Logo" width={50} height={50} />,
        sampleCode: `import org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\npublic class JostleTestAutomation {\n  public static void main(String[] args) {\n    // Attempting to automate testing... close your eyes and pray!\n    WebDriver driver = new ChromeDriver();\n    driver.get("https://www.example.com");\n    // This is one of my favourite tools, it is very cool.\n  }\n}`
      },      
    ],
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Container
        maxWidth={false}
        sx={{
          mt: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: "url(/images/Techbg.avif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "100vh",
          width: "100vw",
          padding: { xs: 2, md: 6 },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" }, padding: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
            <BuildIcon sx={{ fontSize: 28, color: "white" }} />
            Technology and Tools
            </Box>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore the programming languages, databases, frameworks, and tools I frequently use:
          </Typography>

          {Object.entries(sections).map(([sectionTitle, tools]) => (
  <Box key={sectionTitle} sx={{ mt: 4 }}>
    <Typography variant="h5" component="h2" gutterBottom>
      {sectionTitle}
    </Typography>

    {sectionTitle !== "Contact" && (
      <Typography variant="body2" sx={{ mb: 2 }}>
        {`A selection of ${sectionTitle.toLowerCase()} that I frequently utilize in my projects.`}
      </Typography>
    )}

    <Grid container spacing={2}>
      {tools.map((tool, index) => (
        <Grid item key={index}>
          {/* Only wrap in Link if the section is "Contact" */}
          {sectionTitle === "Contact" ? (
            <Link href="/contact" sx={{ color: 'inherit', textDecoration: 'none' }}>
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
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#1c375d",
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  },
                  "&:focus": {
                    outline: "3px solid #1c375d",
                    boxShadow: "0 0 5px rgba(28, 55, 93, 0.5)",
                  },
                }}
              >
                {tool.icon}
                <Typography variant="h6" sx={{ fontSize: "1rem", marginLeft: 2 }}>
                  {tool.name}
                </Typography>
              </Box>
            </Link>
          ) : (
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
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1c375d",
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                },
                "&:focus": {
                  outline: "3px solid #1c375d",
                  boxShadow: "0 0 5px rgba(28, 55, 93, 0.5)",
                },
              }}
              onClick={() => handleDialogOpen(tool)}
            >
              {tool.icon}
              <Typography variant="h6" sx={{ fontSize: "1rem", marginLeft: 2 }}>
                {tool.name}
              </Typography>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  </Box>
))}
        </Box>
      </Container>

      {/* Dialog for showing code example */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{selectedTool?.name}</DialogTitle>
        <DialogContent>
          {/* Box for code styling with proper background and padding */}
          <Box 
            component="pre"
            sx={{
              backgroundColor: '#282c34', // Dark background for code block
              color: 'white', // White text color
              padding: 2, // Padding inside the code block
              borderRadius: 1, // Rounded corners
              fontFamily: 'Monaco, monospace', // Monospace font for code
              fontSize: '1rem', // Font size for readability
              overflowX: 'auto', // Scroll for horizontal overflow
              whiteSpace: 'pre-line', // Preserve newlines but allow wrapping
            }}
          >
            <code>{selectedTool?.sampleCode}</code>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}
