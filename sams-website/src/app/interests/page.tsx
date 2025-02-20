"use client";

import React, { useState } from "react";
import { CssBaseline, Box, Typography, Modal, IconButton, Link } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Header from "../../components/Header";
import NavigationDrawer from "../../components/NavigationDrawer";
import CloseIcon from "@mui/icons-material/Close";

interface Interest {
  title: string;
  description: string;
  media: { url: string; type: "image" | "video" }[];
}

const Interests: Interest[] = [
  {
    title: "Basketball",
    description: "I picked up basketball in late elementary school and early high school and quickly fell in love with it. Despite my natural lack of ball handling and shooting abilities, I found myself spending much of my free time in high school obsessing over improving my game, spending countless weekends and late nights practicing. I still play basketball several times a week between various men's leagues, intramurals at university, and just practicing my shooting and dribbling on my own. The past two years I have played with a close group of friends on an intramural team called the Troglodytes, making it to the semi-finals of our intramural league through heart and determination alone. Half of our team consists of long time basketball players and the other half are just happy to be there. During busy school semesters the Monday night Troglodyte games are something I look forward to consistently. Featured here are photos of the Troglodytes and my first intramural team, the Wildcats, where I met some of my first close friends at university that I am still friends with.",
    media: [{ url: "/images/interests/Basketball/Trogs.jpg", type: "image" },
      { url: "/images/interests/Basketball/TrogPyramid.jpg", type: "image" },
      { url: "/images/interests/Basketball/Wildcats.jpg", type: "image" }],
  },
  {
    title: "Travel",
    description: "When I was a kid I hated travel. I had terrible motion sickness and would've been far happier playing Pokemon on my Nintendo DS or Mario Kart on my Wii. As I've gotten older, though, I have grown a great appreciation for exploring different cultures, nature, and food. Recently I have made the most of my time between semesters at school and co-op terms, squeezing in some quick but very busy trips. Last summer I went on a trip to Japan with my mom. We spent our time walking the Nakasendo Samurai trail, exploring art exhibits, visiting castles, and learning about the history of the country. The highlight of this trip was climbing to the top of the mountain holding the Inari Shrine in Kyoto at night and in the rain after a long day of riding trains. Two years ago I also squeezed in a trip to Europe with my childhood friend James and his sister Katie. We visited Dublin, Amsterdam, Bruges, Paris, and Brussels with some stops between each of them. I loved taking the trains between each of these cities and exploring the countryside. One of my favourite meals was at a breakfast restaurant in Bruges that serves gourmet toast. It is still one of the best meals I have ever eaten.",
    media: [{ url: "/images/interests/Travel/Fuji.JPG", type: "image" },
      { url: "/images/interests/Travel/Fujiphoto2.JPG", type: "image" },
      { url: "/images/interests/Travel/Himeiji.JPG", type: "image" },
      { url: "/images/interests/Travel/Amsterdam.jpg", type: "image" },
      { url: "/images/interests/Travel/TokyoTower.JPG", type: "image" },
      { url: "/images/interests/Travel/Jimbo.jpg", type: "image" },
      { url: "/images/interests/Travel/PrettyRiver.jpg", type: "image" },
    ],
  },
  {
    title: "Hiking",
    description: "Similarly to travel, when I was younger I didn't care much for hiking. It made my legs hurt and was hard. While those things haven't changed, I love climbing mountains nonetheless. Whenever I can make it happen I am probably out somewhere on a mountain. During my trip to Japan I climbed a few mountains near Mount Fuji that had incredible views of it, for instance. This past summer I climbed a number of mountains, including Crest, Arrowsmith, and Golden Ears. The nature and views from all three of these were stunning, although it was cloudy and wet during my ascent of Golden Ears. I am excited for another summer of hiking this year.",
    media: [{ url: "/images/interests/Hiking/Wedgemount.jpg", type: "image" },
      { url: "/images/interests/Hiking/WedgemountGroup.jpg", type: "image" },
      { url: "/images/interests/Hiking/Jardine.jpg", type: "image" },
      { url: "/images/interests/Hiking/IceMountain.jpg", type: "image" },
      { url: "/images/interests/Hiking/GESolo.jpg", type: "image" }
    ],
  },
  {
    title: "Paddling",
    description: "Ever since I was a kid I have loved paddling. I went to paddling camp when I was younger for a few summers in a row and loved stand up paddleboarding in particular. Over the years I grew to love canoeing as well and in high school I got a job as a camp counselor at the same camp I went to when I was a kid. I worked at the Pitt Meadows Paddling Club for four years in various roles but spent most of my time leading and helping plan day camps in the summer months. During my time there, I was recruited by some women on the club's board of directors to join their voyageur canoe team along with James, my childhood friend. We were planning to race in the Yukon River Quest, a 715 kilometer race from Whitehorse to Dawson City in the Yukon. It is one of the longest and toughest paddlign races in the world, and we spent about a year training for it before it was unfortunately cancelled due to COVID. I am hopeful that one day we will form a new team and race the Yukon River Quest as it seems like such a great experience.",
    media: [{ url: "/images/interests/Paddling/Silver.jpg", type: "image" }],
  },
  {
    title: "Dinosaurs",
    description: "My first interaction with dinosaurs that I remember was a book my parents bought me that showed the sizes of various dinosaurs compared to an adult human. I remember spending hours just looking at the towering sauropods and being blown away by their size and weight. I also had a toy dinosaur mountain with a little mouth that would chomp down and a ribcage that would open when you pressed their respective buttons that I loved to play with. Through the years my love for dinosaurs has only grown, with many hours spent playing various dinosaur related video games, reading about them, and visiting museum exhibits featuring them. The pictures featured here are at the Hand of Man museum on Vancouver Island, which I cannot recommend enough if you enjoy anything related to animals and their history, and the Royal Ontario Museum dinosaur exhibit. Featured are a dimorphodon, ankylosaurus, some kind of hadrosaur, it looks like an edmontosaurus, a diplodocid of some kind, and a giganotosaurus. If the look on my face didn't give it away, I am a fan of dinosaurs.",
    media: [{ url: "/images/interests/Dinosaurs/Dimorph.jpg", type: "image" },
      { url: "/images/interests/Dinosaurs/Anky.jpg", type: "image" },
      { url: "/images/interests/Dinosaurs/Dino.jpg", type: "image" },
      { url: "/images/interests/Dinosaurs/Diplodocid.jpg", type: "image" },
      { url: "/images/interests/Dinosaurs/Giga.jpg", type: "image" }
    ],
  },
];

export default function InterestsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <Box sx={{ display: "flex", width: "100%" }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: "10%",
            backgroundColor: "#1c375d",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
            display: { xs: "none", md: "block" },
          }}
        />

        {/* Main Content */}
        <Box sx={{ flex: 1, marginLeft: "10%", marginRight: "10%", padding: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Interests
        </Typography>
        <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

        {Interests.map((Interest, index) => (
          <Box key={Interest.title} sx={{ marginBottom: "40px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: index % 2 === 0 ? "row" : "row-reverse", // Row for larger screens
                },
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              {/* Left Column: Text and First Image */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5">{Interest.title}</Typography>
                <Typography variant="body1">{Interest.description}</Typography>

                {/* First image below text */}
                {Interest.media.filter((_, index) => index % 2 !== 0).map((mediaItem, idx) => (
                  <Box key={idx} sx={{ marginBottom: "10px", position: "relative" }}>
                    {mediaItem.type === "image" ? (
                      <Box sx={{ position: "relative", display: "inline-block" }}>
                        <img
                          src={mediaItem.url}
                          alt={Interest.title}
                          style={{ width: "100%", height: "auto", cursor: "pointer" }}
                          onClick={() => handleImageClick(mediaItem.url)}
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
                          onClick={() => handleImageClick(mediaItem.url)}
                        >
                          <ZoomInIcon />
                        </IconButton>
                      </Box>
                    ) : (
                      <video width="100%" height="auto" controls>
                        <source src={mediaItem.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Right Column: Remaining Images */}
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {Interest.media.filter((_, index) => index % 2 === 0).map((mediaItem, idx) => (
                  <Box key={idx} sx={{ marginBottom: "10px", position: "relative" }}>
                    {mediaItem.type === "image" ? (
                      <Box sx={{ position: "relative", display: "inline-block" }}>
                        <img
                          src={mediaItem.url}
                          alt={Interest.title}
                          style={{ width: "100%", height: "auto", cursor: "pointer" }}
                          onClick={() => handleImageClick(mediaItem.url)}
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
                          onClick={() => handleImageClick(mediaItem.url)}
                        >
                          <ZoomInIcon />
                        </IconButton>
                      </Box>
                    ) : (
                      <video width="100%" height="auto" controls>
                        <source src={mediaItem.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            {index < Interests.length - 1 && <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />}
          </Box>
        ))}
      </Box>
        {/* Right Sidebar */}
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

      {/* Fullscreen Image Modal */}
<Modal
  open={open}
  onClose={handleCloseModal}
  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
        backgroundColor: "rgba(0,0,0,0.5)",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
      onClick={handleCloseModal}
    >
      <CloseIcon />
    </IconButton>

    {/* Clicking the image will now close the modal */}
    <img
      src={selectedImage || ""}
      alt="Selected Interest"
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "100vh",
        objectFit: "contain",
        cursor: "pointer",
      }}
      onClick={handleCloseModal}
    />
  </Box>
</Modal>

    </>
  );
}
