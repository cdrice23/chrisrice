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
const defaultFont = lekton;
const headerFont = lekton;
const monoFont = cutive_mono;

// !! -- SECONDARY COLORS FOR LIST ITEMS
// white
// const secondaryText = "#fcfeff";
// black
const secondaryText = "#302f2f";
// dark brown
// const secondaryText = "#362719";

// Light w/ black - 8/10
// slate dark blue
// const primaryMain = "#014273";
// bluie
const primaryMain = "#012973";
// green
// const primaryMain = "#015208";
// a lighter green
// const primaryMain = "#01690a";
// const secondaryMain = "#969696";
const secondaryMain = "#141414";
const bg = "#ffffff";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    background: {
      default: bg,
      paper: bg,
    },
    text: {
      primary: primaryMain,
      secondary: secondaryText,
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
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});
