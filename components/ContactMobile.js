import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, Button, useMediaQuery } from "@mui/material";
import { theme } from "@/styles/theme";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function ContactMobile() {
  return (
    <Box
      height={200}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      // sx={{ display: { xs: "flex", sm: "none" } }}
    >
      <Link
        href="https://github.com/cdrice23"
        target={"_blank"}
        passHref
        className={styles.link}
      >
        <Button
          disableFocusRipple
          variant="contained"
          startIcon={<GitHub />}
          sx={{
            marginX: 1,
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
          disableFocusRipple
          variant="contained"
          startIcon={<LinkedIn />}
          sx={{
            marginX: 1,
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
          disableFocusRipple
          variant="contained"
          startIcon={<Mail />}
          sx={{
            marginX: 1,
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
