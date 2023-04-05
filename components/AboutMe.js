import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box p={2} display={"flex"} flexDirection={"column"} alignItems="center">
      <Typography p={2}>
        <strong>Hi, I'm Chris.</strong>
      </Typography>
      <Typography p={2} maxWidth={"1000px"}>
        {`I’ve spent my entire career working in tech - I’ve worked as a consultant and had various management roles within a large tech startup. Whenever I had the opportunity to build something technical from scratch (be it a simple Excel macro to more complicated Retool applications), it gave me a renewed sense of passion and excitement.`}
      </Typography>
      <Typography p={2} maxWidth={"1000px"}>
        {`8 years later, I decided to pivot careers and dive into the deep-end of programming. Take a look at some of my most recent projects, and don't hesitate to reach out and connect!`}
      </Typography>
    </Box>
  );
}
