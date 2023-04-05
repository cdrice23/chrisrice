import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { theme } from "@/styles/theme";
import { Typography } from "@mui/material";
import styles from "../styles/IntroScreen.module.css";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const introScreenCookie = Cookies.get("introScreenShown");

    if (introScreenCookie) {
      const { expires } = Cookies.get("introScreenShown");
      const cookieExpirationDate = new Date(expires);

      if (cookieExpirationDate > new Date()) {
        setIsVisible(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      Cookies.set(
        "introScreenShown",
        { value: true, expires: 1 },
        { expires: 1 }
      ); // Set cookie to expire in 24 hours
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
      <Typography className={styles.typing} variant={"h2"}>
        Hi, I'm Chris.
      </Typography>
    </motion.div>
  );
}
