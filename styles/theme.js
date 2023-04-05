import { createTheme } from "@mui/material";
import {
  Lekton,
  Anaheim,
  Bai_Jamjuree,
  Cutive_Mono,
  Manrope,
} from "next/font/google";

// Font declarations
const cutive_mono = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});
const bai_jamjuree = Bai_Jamjuree({
  weight: "400",
  subsets: ["latin"],
});
const lekton = Lekton({
  weight: "400",
  subsets: ["latin"],
});
const anaheim = Anaheim({
  weight: "400",
  subsets: ["latin"],
});

// set defaults
const defaultFont = bai_jamjuree;
const headerFont = bai_jamjuree;
const monoFont = cutive_mono;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#cc0000",
    },
    secondary: {
      main: "#4f83cc",
    },
    background: {
      default: "#fff5e6",
      paper: "#fff5e6",
    },
    text: {
      primary: "#cc0000",
    },
  },
  typography: {
    fontFamily: defaultFont.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: headerFont.style.fontFamily,
    },
    h2: {
      fontFamily: monoFont.style.fontFamily,
    },
    h3: {
      fontFamily: headerFont.style.fontFamily,
    },
    h4: {
      fontFamily: headerFont.style.fontFamily,
      "@media (max-width: 600px)": {
        fontSize: "1.8rem",
      },
    },
    h5: {
      fontFamily: headerFont.style.fontFamily,
      "@media (max-width: 600px)": {
        fontSize: "1.3rem",
      },
    },
    h6: {
      fontFamily: headerFont.style.fontFamily,
    },
    button: {
      textTransform: "none",
    },
  },
});
