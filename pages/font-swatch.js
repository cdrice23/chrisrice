import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  Cutive_Mono,
  VT323,
  Source_Code_Pro,
  Raleway,
  Quicksand,
  Manrope,
  Maven_Pro,
  Assistant,
  Sen,
  Chivo,
  Noto_Sans_Bengali,
  Bai_Jamjuree,
  Monda,
  Albert_Sans,
  Epilogue,
  Zen_Maru_Gothic,
  Miriam_Libre,
  Hanken_Grotesk,
  Biryani,
  Thasadith,
  M_PLUS_1,
  Metrophobic,
  Kodchasan,
  Encode_Sans_Expanded,
  DotGothic16,
  Pavanam,
  Lekton,
  Anaheim,
  IBM_Plex_Sans,
  Trispace,
  Gafata,
  Kantumruy_Pro,
  Nixie_One,
  Silkscreen,
  Bellota_Text,
} from "next/font/google";

// Paste declataions here
const cutive_mono = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
});
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});
const source_code_pro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});
const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});
const maven_pro = Maven_Pro({
  weight: "400",
  subsets: ["latin"],
});
const assistant = Assistant({
  weight: "400",
  subsets: ["latin"],
});
const sen = Sen({
  weight: "400",
  subsets: ["latin"],
});
const chivo = Chivo({
  weight: "400",
  subsets: ["latin"],
});
const noto_sans_bengali = Noto_Sans_Bengali({
  weight: "400",
  subsets: ["latin"],
});
const bai_jamjuree = Bai_Jamjuree({
  weight: "400",
  subsets: ["latin"],
});
const monda = Monda({
  weight: "400",
  subsets: ["latin"],
});
const albert_sans = Albert_Sans({
  weight: "400",
  subsets: ["latin"],
});
const epilogue = Epilogue({
  weight: "400",
  subsets: ["latin"],
});
const zen_maru_gothic = Zen_Maru_Gothic({
  weight: "400",
  subsets: ["latin"],
});
const miriam_libre = Miriam_Libre({
  weight: "400",
  subsets: ["latin"],
});
const hanken_grotesk = Hanken_Grotesk({
  weight: "400",
  subsets: ["latin"],
});
const biryani = Biryani({
  weight: "400",
  subsets: ["latin"],
});
const thasadith = Thasadith({
  weight: "400",
  subsets: ["latin"],
});
const m_plus_1 = M_PLUS_1({
  weight: "400",
  subsets: ["latin"],
});
const metrophobic = Metrophobic({
  weight: "400",
  subsets: ["latin"],
});
const kodchasan = Kodchasan({
  weight: "400",
  subsets: ["latin"],
});
const encode_sans_expanded = Encode_Sans_Expanded({
  weight: "400",
  subsets: ["latin"],
});
const dotgothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});
const pavanam = Pavanam({
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
const ibm_plex_sans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});
const trispace = Trispace({
  weight: "400",
  subsets: ["latin"],
});
const gafata = Gafata({
  weight: "400",
  subsets: ["latin"],
});
const kantumruy_pro = Kantumruy_Pro({
  weight: "400",
  subsets: ["latin"],
});
const nixie_one = Nixie_One({
  weight: "400",
  subsets: ["latin"],
});
const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});
const bellota_text = Bellota_Text({
  weight: "400",
  subsets: ["latin"],
});

// Unused component originally used for testing out font styles
export default function FontSwatch(props) {
  // Paste fontList here
  const fontList = [
    { name: "Cutive_Mono", fontFamily: cutive_mono.className },
    { name: "VT323", fontFamily: vt323.className },
    { name: "Source_Code_Pro", fontFamily: source_code_pro.className },
    { name: "Raleway", fontFamily: raleway.className },
    { name: "Quicksand", fontFamily: quicksand.className },
    { name: "Manrope", fontFamily: manrope.className },
    { name: "Maven_Pro", fontFamily: maven_pro.className },
    { name: "Assistant", fontFamily: assistant.className },
    { name: "Sen", fontFamily: sen.className },
    { name: "Chivo", fontFamily: chivo.className },
    { name: "Noto_Sans_Bengali", fontFamily: noto_sans_bengali.className },
    { name: "Bai_Jamjuree", fontFamily: bai_jamjuree.className },
    { name: "Monda", fontFamily: monda.className },
    { name: "Albert_Sans", fontFamily: albert_sans.className },
    { name: "Epilogue", fontFamily: epilogue.className },
    { name: "Zen_Maru_Gothic", fontFamily: zen_maru_gothic.className },
    { name: "Miriam_Libre", fontFamily: miriam_libre.className },
    { name: "Hanken_Grotesk", fontFamily: hanken_grotesk.className },
    { name: "Biryani", fontFamily: biryani.className },
    { name: "Thasadith", fontFamily: thasadith.className },
    { name: "M_PLUS_1", fontFamily: m_plus_1.className },
    { name: "Metrophobic", fontFamily: metrophobic.className },
    { name: "Kodchasan", fontFamily: kodchasan.className },
    {
      name: "Encode_Sans_Expanded",
      fontFamily: encode_sans_expanded.className,
    },
    { name: "DotGothic16", fontFamily: dotgothic16.className },
    { name: "Pavanam", fontFamily: pavanam.className },
    { name: "Lekton", fontFamily: lekton.className },
    { name: "Anaheim", fontFamily: anaheim.className },
    { name: "IBM_Plex_Sans", fontFamily: ibm_plex_sans.className },
    { name: "Trispace", fontFamily: trispace.className },
    { name: "Gafata", fontFamily: gafata.className },
    { name: "Kantumruy_Pro", fontFamily: kantumruy_pro.className },
    { name: "Nixie_One", fontFamily: nixie_one.className },
    { name: "Silkscreen", fontFamily: silkscreen.className },
    { name: "Bellota_Text", fontFamily: bellota_text.className },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" py={3}>
            Typography Fonts
          </Typography>
        </Grid>
        {fontList.map((obj) => (
          <Grid item xs={12} md={3} key={obj.name}>
            <Typography
              variant="h5"
              align="center"
              sx={obj}
              className={obj.fontFamily}
            >
              <strong>{obj.name}</strong>
            </Typography>
            <Typography sx={obj} p={2} className={obj.fontFamily}>
              <strong>{`Hi, I'm Chris.`}</strong>
            </Typography>
            <Typography sx={obj} p={2} className={obj.fontFamily}>
              {`I’ve spent my entire career working in tech - I’ve worked as a consultant and had various management roles within a large tech startup. Whenever I had the opportunity to build something technical from scratch (be it a simple Excel macro to more complicated Retool applications), it gave me a renewed sense of passion and excitement.`}
            </Typography>
            <Typography sx={obj} p={2} className={obj.fontFamily}>
              {`8 years later, I decided to pivot careers and dive into the deep-end of programming. Take a look at some of my most recent projects, and don't hesitate to reach out and connect!`}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
