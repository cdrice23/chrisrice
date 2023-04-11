import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, Button, useMediaQuery } from "@mui/material";
import { theme } from "@/styles/theme";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.sm}px`
  );
  return (
    <Box
      height={isMobile ? 200 : 150}
      display={"flex"}
      //   flexDirection={isMobile ? "column" : "row"}
      justifyContent={isMobile ? "space-around" : "center"}
      alignItems={"center"}
      //   paddingY={isMobile ? 3 : 0}
    >
      <Link
        href="https://github.com/cdrice23"
        target={"_blank"}
        passHref
        className={styles.link}
      >
        <Button
          variant="contained"
          startIcon={<GitHub />}
          sx={{
            marginX: isMobile ? 1 : 4,
            borderRadius: 16,
            backgroundColor: "#4078c0",
          }}
        >
          Github
        </Button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/cdrice23/"
        target={"_blank"}
        passHref
        className={styles.link}
      >
        <Button
          variant="contained"
          startIcon={<LinkedIn />}
          sx={{
            marginX: isMobile ? 1 : 3,
            borderRadius: 16,
            backgroundColor: "#00A0DC",
          }}
        >
          LinkedIn
        </Button>
      </Link>

      <Link
        href="mailto:cd.rice23@gmail.com"
        target={"_blank"}
        passHref
        className={styles.link}
      >
        <Button
          variant="contained"
          startIcon={<Mail />}
          sx={{
            marginX: isMobile ? 1 : 4,
            borderRadius: 16,
            backgroundColor: "#4285F4",
          }}
        >
          Email
        </Button>
      </Link>
    </Box>
  );
}
