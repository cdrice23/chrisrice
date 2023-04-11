import { Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/styles/theme";

export default function AboutMe() {
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.sm}px`
  );

  return (
    <>
      <Box
        p={2}
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        maxHeight={isMobile ? 400 : null}
        position="relative"
      >
        <Typography p={2} fontSize={"0.9em"}>
          <strong>{`Hi, I'm Chris.`}</strong>
        </Typography>

        <Typography p={2} maxWidth={"1200px"} fontSize={"0.9em"}>
          {`When I was a kid, I used to spend my afternoons playing with Legos and Tinker Toys; pulling apart ready-made sets to try and create something new. As an adult, I spent my entire career working in tech. Whenever I had the opportunity to build something technical from scratch (be it a simple Excel macro to more complicated Retool applications), it gave me a renewed sense of excitement about my day-to-day. Unfortunately as time went on, these opportunities were few and far between.`}
        </Typography>
        <Typography p={2} maxWidth={"1200px"} fontSize={"0.9em"}>
          {`8 years later, I decided to do something extremely scary - invest in my passion, and myself. I wanted to see how I could recapture the passion for building from my youth, so I spent the better part of a year learning how to code. While walking my dog Ellie, I'd think of ideas for cool projects that would help me grow as a developer (some of which are featured in the Projects section). Learning (mostly) on your own can be pretty daunting, and I make tons of mistakes on every project; but at the end of the day, the dopamine hit from thinking of an idea and bringing it to life is worth it.`}
        </Typography>
        <Typography pt={2} px={2} pb={4} maxWidth={"1200px"} fontSize={"0.9em"}>
          {`When it comes to putting hands to keyboard, I know I've got a lot to learn; but I'm pretty used to drinking from the firehose at this point in my life. If you've got any advice for me or are willing to take a chance on a seasoned novice, don't hesitate to reach out and connect!`}
        </Typography>
      </Box>
      <Box
        position={"sticky"}
        top={400}
        width={390}
        height={50}
        sx={{
          background: `linear-gradient(180deg, rgb(255, 255, 2255,0) , rgb(255, 255, 255,1))`,
        }}
      />
    </>
  );
}
