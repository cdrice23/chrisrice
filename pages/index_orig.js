import { Typography, Box, useMediaQuery } from "@mui/material";
import Head from "next/head";
import SwipeableEdgeDrawer from "@/components/SwipeableEdgeDrawerDesktop";
import HeroGif from "@/components/HeroGif";
import { useState, useCallback } from "react";
import IntroScreen from "@/components/IntroScreen";
import { theme } from "@/styles/theme";
import AboutMe from "@/components/AboutMeMobile";
import CareerTimeline from "@/components/CareerTimeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Cookies from "js-cookie";

const drawerWidth = 240;

export default function Home() {
  const [paused, setPaused] = useState(null);

  const handleOpen = (open) => {
    setPaused(open);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/headphones.png" />
      </Head>
      <IntroScreen />
      <Box display="flex" overflow={"hidden"} height={"100%"} width={"100%"}>
        <SwipeableEdgeDrawer
          anchor="top"
          label="About Me"
          drawerWidth="100%"
          transformButton="translateX(-50%)"
          handleOpen={handleOpen}
        >
          <AboutMe />
        </SwipeableEdgeDrawer>
        {/* under md */}
        <SwipeableEdgeDrawer
          anchor="right"
          label="Projects"
          drawerWidth={drawerWidth}
          transformButton={"translateY(-50%) rotate(90deg)"}
          handleOpen={handleOpen}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Projects />
        </SwipeableEdgeDrawer>
        {/* over md */}
        <SwipeableEdgeDrawer
          anchor="right"
          label="Projects"
          drawerWidth={drawerWidth}
          transformButton={"translateY(-50%) translateX(-100px)"}
          handleOpen={handleOpen}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Projects />
        </SwipeableEdgeDrawer>
        <SwipeableEdgeDrawer
          anchor="bottom"
          label="Contact Me"
          drawerWidth="100%"
          transformButton="translateX(-50%)"
          handleOpen={handleOpen}
        >
          <Contact />
        </SwipeableEdgeDrawer>
        {/* under md */}
        <SwipeableEdgeDrawer
          anchor="left"
          label="Career Timeline"
          drawerWidth={drawerWidth}
          transformButton={"translateY(-50%) translateX(-100px) rotate(-90deg)"}
          handleOpen={handleOpen}
          display=""
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <CareerTimeline />
        </SwipeableEdgeDrawer>
        {/* md and over */}
        <SwipeableEdgeDrawer
          anchor="left"
          label="Career Timeline"
          drawerWidth={drawerWidth}
          transformButton={"translateY(-50%)"}
          handleOpen={handleOpen}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <CareerTimeline />
        </SwipeableEdgeDrawer>
        <HeroGif paused={paused} />
      </Box>
    </>
  );
}
