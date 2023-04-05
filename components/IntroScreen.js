import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { theme } from "@/styles/theme";

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
    }, 3000);

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
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: theme.palette.background.default,
        // zIndex: 3,
      }}
    >
      <h1 style={{ fontSize: "5rem" }}>Hi, I'm Chris.</h1>
    </motion.div>
  );
}
