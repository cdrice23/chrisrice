import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { theme } from "@/styles/theme";
import { Typography, useMediaQuery } from "@mui/material";
import styles from "../styles/IntroScreen.module.css";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.sm}px`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3650); //4150
    return () => clearTimeout(timer);
  }, []);

  const variants = {
    visible: { opacity: 1, zIndex: 30 },
    hidden: { opacity: 0, zIndex: 1 },
  };

  return (
    <motion.div
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1.25, ease: "easeOut" }}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        className={styles.typing}
        variant={"h2"}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        {`Hi, I'm Chris.`}
      </Typography>
      <Typography
        className={styles.typing}
        variant={"h4"}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {`Hi, I'm Chris.`}
      </Typography>
    </motion.div>
  );
}
