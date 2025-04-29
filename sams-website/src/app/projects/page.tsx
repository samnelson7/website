"use client";

import React, { useState, useEffect } from "react";
import { CssBaseline, Box, Typography, Modal, IconButton, Link } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";
import CloseIcon from "@mui/icons-material/Close";
import {
  Assignment as AssignmentIcon,
} from "@mui/icons-material";

interface Project {
  title: string;
  description: string[];
  mediaUrl: string;
  mediaType: "image" | "video";
  technologies: string[];
  maxTextHeight: number; // Max height before cut off
}

const projects: Project[] = [
  {
    title: "Broken Flight",
    description: ["Being a lifelong video game fan, game development has been an interest of mine. The main thing stopping me from trying was simply the business of school, but recently between school terms I have made time to try it!", "The game I made was is a basic platformer where you play as a dimorphodon, a small pterosaur known for its big head compared to its tiny body. I love dinosaurs, so chosing a The game follows the character, who hurt itself falling out of its nest in the jungle, slowly regaining its movement ability as it looks for a new safe place to live with its family. This gives me lots of room to work with adding new movement options as the player completes various levels!", "I'm very excited to continue working on this project, as the completion of new game mechanics, art, and world construction in Unity have been very rewarding and a lot of fun. I have some other games in mind that I would like to work on over time, but they seemed like long time investments (like RPGs). The game has not yet been released, but will be featured on my Github as soon as I have a larger amount of it complete."],
    mediaUrl: "/videos/GameDemo.mp4",
    mediaType: "video",
    technologies: ["C#", ".NET", "Unity"],
    maxTextHeight: 253, 
  },
  {
    title: "Weld Access Verification Tool",
    description: ["This was a project I completed through my most recent co-op term. I don't generally include work projects but developing prototypes was largely self guided and completed with my fellow co-op student as a pair so I wanted to showcase it here.", "The AGT Robotics BeamMaster WAV (Weld Access Verification) Tool is an innovative Tekla plugin that revolutionizes weld planning in steel fabrication. By automatically integrating true-to-scale weld arm models into your Tekla environment, this powerful tool allows designers and engineers to visualize real-world welding scenarios, instantly identify potential access issues, and optimize projects for AGT BeamMaster robotic welding systems.", "I worked on this application during my time at Exact Detailing with one other co-op student. We found ourselves incredibly dedicated to the completion of this project and were able to complete and publish it over the course of our 4-month internships. We picked up the project from where some previous students had left off but wound up reworking most of the application due to changing business goals and project requirements. Working closely with AGT Robotics, we were able to publish this to an online catalog, Tekla Warehouse, where it can be downloaded for use by anybody with a Tekla license."],
    mediaUrl: "/videos/WAVDemo.mp4",
    mediaType: "video",
    technologies: ["C#", ".NET", "WPF", "Windows Forms"],
    maxTextHeight: 253,
  },
  {
    title: "VirtualER",
    description: ["This web-based application allows patients to easily find wait times of nearby emergency rooms to meet their medical needs. The project consisted of both a full implementation of the product as well as a detailed requirements phase, diagrams, and project planning. The project was for a Software Architecture class, but our design, tools used, approach, and system was all original work from our 4 person team.", "I would have liked to spend more time consulting with healthcare workers in order to more closely meet the needs of the actual healthcare field rather than the project requirements that were outlined. I am confident that we met the requirements for the scope of our project, but I feel like the application would need some serious overhauls to be used in any sort of workplace.", "One thing that I believe is a bit of an oversight with this project is that many workplaces simply don't have the staff to support an app like this. It requires too much help from ER staff to run properly and in order to be automated there are serious ethical and legal considerations involved."],
    mediaUrl: "/images/VirtualER.png",
    mediaType: "image",
    technologies: ["Next.js", "React", "Tailwind CSS", "ShadCN Component Library"],
    maxTextHeight: 205,
  },
  {
    title: "Automated Feedback for Engineering",
    description: ["In the Summer of 2022 an advisor within the faculty of engineering reached out to me suggesting that I apply for a research grant based on my academic standing. Together with Dr. Flavio Firmani, I applied for funding towards a joint research project in order to provide students with automated feedback for homework problems and improve learning outcomes. Dr. Firmani identified that students frequently make similar mistakes, but due to the volume of students, individualized feedback was impossible.", "This led to our research into both diagnosing frequent mistakes made by students and into the kinds of tools we had available to improve the learning outcomes based on patterns we found. After gaining some insight into frequent problems made by students, we looked into the tools provided within WeBWork, the online homework system used for the statics class we were investigating.", "The main outcomes of our research included generating graphs for students automatically based on their inputs to provide a visual aid and automated feedback messages for various pre-defined inputs. Given more time, I would've liked to collect data based on student submissions in order to better categorize common mistakes."],
    mediaUrl: "/images/VKURA.jpg",
    mediaType: "image",
    technologies: ["Perl", "WeBWork", "PG"],
    maxTextHeight: 350,
  },
  {
    title: "Personal Website",
    description: ["After several years of toying with the idea of coding a website myself amongst a busy school schedule I made time to practice my development skills with web-based applications. The result is this portfolio of my education, work, skills, and projects that I am especially passionate about.", "Following the development of VirtualER, I wanted to create a Next.js application to function as a personal website while I was still learning these new technologies. I am very happy with how it turned out and welcome any feedback! Click on my icon or visit the contact me page to reach out and let me know what you think!"],
    mediaUrl: "/images/Website.png",
    mediaType: "image",
    technologies: ["Next.js", "React", "Tailwind CSS", "MaterialUI"],
    maxTextHeight: 240,
  },
  {
    title: "Business Analytics Improvement Plan",
    description: [""],
    mediaUrl: "/images/RealTime.png",
    mediaType: "image",
    technologies: ["Figma", "Markdown"],
    maxTextHeight: 250,
  },
  {
    title: "Autonmous IR Detection Robot",
    description: ["This project involved building a robot as a prototype for an autonomous underwater vehicle able to position a debris cleaning device on top of underwater cameras and sensors. The task required of this robot was to locate a randomly placed infrared emitter in an enclosed space, approach it, and drop a ping-pong ball on top of it without it falling off.", "As can be seen in the image of our robot design, we have an arm that extends in front of the robot with gears that twist open to drop the ball on the target. I assisted with the electrical work, design, and overall construction of the robot, but my biggest contribution was designing a finite state machine for our workflow and implementing that in code. Our robot was one of few able to pass all tests consistently without hitting any walls or the target."],
    mediaUrl: "/images/Robot.jpg",
    mediaType: "image",
    technologies: ["RobotC", "C", "Vex Robotics Kit"],
    maxTextHeight: 320,
  },
];

export default function ProjectsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const toggleProjectExpansion = (title: string) => {
    if (expandedProject === title) {
      setExpandedProject(null);
    } else {
      setExpandedProject(title);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <CssBaseline />
      <Header/>
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            width: "10%",
            backgroundColor: "#1c375d",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
            display: { xs: "none", md: "block" }, // Hide on small screens
          }}
        />

          <Box sx={{ flex: 1, marginLeft: { xs: "0%", md: "10%" }, marginRight: { xs: "0%", md: "10%" } }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" , marginRight: "20px",marginLeft: "20px", marginTop: "20px"}}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                        <AssignmentIcon sx={{ fontSize: 28, color: "black" }} />
                        <strong>Projects</strong> 
                        </Box>
            <Link href="/contact" >
              <Typography variant="body1" component="span">
                Contact Me
              </Typography>
            </Link>
          </Typography>
          <hr style={{ margin: "20px", borderColor: "#ccc" }} />

          {projects.map((project, index) => (
            <Box key={project.title}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }, // Change flex direction based on screen size
                  marginBottom: "0px",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ flex: 1, padding: "20px" }}>
                  {/* Project Title (No Expand Button Here) */}
                  <Typography variant="h5"><strong> {project.title}</strong> </Typography>

                  {/* Description Section */}
                  <Box
                    sx={{
                      maxHeight: expandedProject === project.title ? "none" : `${project.maxTextHeight}px`,
                      overflow: "hidden",
                      position: "relative",
                      paddingBottom: expandedProject !== project.title ? "40px" : "0px", // Extra space for the button
                    }}
                  >
                    <Typography variant="body1">
                      {project.title === "Business Analytics Improvement Plan" ? (
                        <>
                          This project consisted of eliciting requirements from a company for software development improvements they desired and developing a prototype based on the requirements. 
                          We worked with a company called Real Time Networks to elicit requirements and create a requirements document for the software they wanted, as well as prototyping a potential solution. 
                          <br />
                          <br />
                          Their company contained numerous departments: marketing, manufacturing, accounting, and installation, and each department managed its own data footprint independently. 
                          
                          The software solution they wanted was a centralized data analytics dashboard to better concentrate their data footprint. This would allow management to be better informed
                          of the work and ongoings of various departments from a single place. 
                          <br />
                          <br />
                          We developed an entire prototype for a web-based platform
                          combining their data analytics and platforms as well as suggesting how to implement it with various APIs.
                          You can take a look at the complete requirements document as well as some of the prototype&#39;s features at the bottom of it{" "}
                          <Link href="https://github.com/samnelson7/Requirements-Engineering/blob/main/RD.md">
                            here
                          </Link>.
                        </>
                      ) : (
                        <>
                        {project.description[0]}
                        <br />
                        <br />
                        {project.description[1]}
                        <br />
                        <br />
                        {project.description[2]}
                        </>
                      )}
                    </Typography>

                    {/* Gradient Fade Effect at Bottom */}
                    {expandedProject !== project.title && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "40px", // Only adds height, no intersection
                          background: "linear-gradient(to top, white, rgba(255,255,255,0))",
                        }}
                      />
                    )}
                  </Box>
                  {/* Expand Button (Always Present for Each Project) */}
                  {expandedProject !== project.title && (
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0px" }}>
                      <IconButton onClick={() => toggleProjectExpansion(project.title)}>
                        <ExpandMoreIcon />
                      </IconButton>
                    </Box>
                  )}
                  {/* Technologies Section (Only visible when expanded) */}
                  {expandedProject === project.title && (
                    <Box sx={{ marginTop: "10px", paddingLeft: "10px" }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Technologies Used:</Typography>
                      <ul>
                        {project.technologies.map((tech, idx) => (
                          <li key={idx}>
                            <Typography variant="body2">{tech}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </Box>

                {/* Media Section (Image/Video) */}
                <Box sx={{ flex: 1, padding: "20px", maxWidth: {xs: "100%", md: "50%"}, position: "relative" }}>
                  {project.mediaType === "image" ? (
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <img
                        src={project.mediaUrl}
                        alt={project.title}
                        style={{ width: "100%", height: "auto", cursor: "pointer" }}
                        onClick={() => handleImageClick(project.mediaUrl)}
                      />
                      <IconButton
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                          backgroundColor: "rgba(0,0,0,0.6)",
                          color: "white",
                          "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                        }}
                        onClick={() => handleImageClick(project.mediaUrl)}
                      >
                        <ZoomInIcon />
                      </IconButton>
                    </Box>
                  ) : (
                    <video width="100%" height="auto" controls>
                      <source src={project.mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </Box>
              </Box>


              {index < projects.length - 1 && (
                <hr style={{ margin: "20px", borderColor: "#ccc", borderWidth: "1px", borderStyle: "solid" }} />
              )}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: "10%",
            backgroundColor: "#1c375d",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 1,
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>

      {/* Fullscreen Modal for Image */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleCloseModal}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={selectedImage || ""}
            alt="Selected project"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100vh",
              objectFit: "contain",
            }}
            onClick={handleCloseModal}
          />
        </Box>
      </Modal>
    </>
  );
}
