import Image from "next/image";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "../styles/HeroGif.module.css";

export default function HeroGif(props) {
  const [currentImage, setCurrentImage] = useState(0);

  // MUTED SO I DON'T HAVE AN ANEURYSM
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
    <>
      <img
        // width={"25vw"}
        className={styles.image}
        src={`/hero${currentImage + 1}.jpeg`}
        alt="A picture of Chris Rice"
      />
    </>
  );
}
