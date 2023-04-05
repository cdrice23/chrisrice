import Image from "next/image";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function HeroGif(props) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let intervalId = null;
    if (!props.paused) {
      intervalId = setInterval(() => {
        setCurrentImage((currentImage) => (currentImage + 1) % 6);
      }, 200);
    }
    return () => clearInterval(intervalId);
  }, [props.paused]);

  return (
    <Box
      position={"fixed"}
      top="50%"
      left="50%"
      sx={{
        transform: "translate(-50%, -50%)",
        padding: { xs: "30%", sm: "20%", md: "10%" },
      }}
      height={"100%"}
      overflow="hidden"
    >
      <img
        // height={{ sm: 300, lg: 100 }}
        height={"100%"}
        src={`/hero${currentImage + 1}.jpeg`}
      />
    </Box>
  );
}
