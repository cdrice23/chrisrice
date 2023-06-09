import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepContent,
  Typography,
  StepButton,
  Grid,
  Chip,
  Stack,
  Button,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import { theme } from "@/styles/theme";
import { ExpandMore } from "@mui/icons-material";

const projectSteps = [
  {
    label: "Scotch Tour (v1)",
    status: "LIVE",
    linkUrl: "https://cdrice23.github.io/scotchTour/",
    imageUrl: "/scotch_tour_v1.jpeg",
    alt: "A dimly lit bar showing many ornate bottles of whisky",
    description: `" My earliest project that is so low tech, you'd think you found it while surfing NetScape in 1998. A constant reminder that I can only go up from here. "`,
    goal: `Practice basic knowledge of HTML and CSS fundamentals`,
    features: [
      `Static menu with page navigation`,
      `Static written content using most of the basic HTML tags`,
      `A table with highlighted rows when you hover over them.`,
    ],
    technologiesUsed: [`HTML`, `CSS`],
  },
  {
    label: "Chris Rice Portfolio (v1)",
    status: "LIVE",
    linkUrl: "https://cdrice23.github.io/crPortfolio/",
    imageUrl: "/profile_square_v1.jpg",
    alt: "An image of Chris Rice in black and white",
    description: `" A second, 'bare-bones' HTML and CSS endeavor before I started learning JavaScript. "`,
    goal: `Expand CSS fundamentals`,
    features: [
      `Mobile-responsive (with use of media queries)`,
      `Local navigation to sections on page`,
    ],
    technologiesUsed: [`HTML`, `CSS`],
  },
  {
    label: "Chris Rice Portfolio (v2)",
    status: "LIVE",
    linkUrl: "https://cr-portfolio-v2.vercel.app/",
    imageUrl: "/profile_square_v2.jpg",
    alt: "An image of Chris Rice with faded blue tones",
    description: `" My first project after learning JavaScript and React, where I tried recreating my v1 site while using more modern frameworks and libraries (e.g. next.js and ChakraUI). "`,
    goal: `Implement a React application, get comfortable with reading documentation and deploy an application through a deployment platform (Vercel)`,
    features: [
      `Typewriter effect on bio information that switches to a static carousel after it plays through once`,
      `Responsive project list (using Grid) with hover-blur effects`,
    ],
    technologiesUsed: [
      `JavaScript`,
      `CSS`,
      `React`,
      `next.js`,
      `ChakraUI`,
      `Vercel`,
    ],
  },
  {
    label: "Scotch Tour (v2)",
    status: "LIVE",
    linkUrl: "https://scotchtour-v2.vercel.app/",
    imageUrl: "/scotch_tour_v2.jpeg",
    alt: "A flight of empty glaincairn glasses",
    description: `" As opposed to the v1 to v2 evolution of my portfolio page, this was a major overhaul of the Scotch Tour concept where I really wanted to make a practical-use React application. "`,
    goal: `Learn and implement the MERN stack, complete with database interactions (fetching & posting)`,
    features: [
      `Static & dynamic data charts (using ChartJS)`,
      `Smooth scrolling transitions (using framer-motion)`,
      `Stateful modal components displaying Scotch regions on a map or card data about various Scotch brands`,
      `Searchable/filterable database of 900+ scotch whiskies that highlight tasting notes based on user input`,
      `Visitor survey that displays survey response data in various charts (after submitting)`,
      `Usage of security features e.g. rate limiting`,
      `Serverless architecture using server-side rendering in Next.js (replaced original Express backend)`,
    ],
    technologiesUsed: [
      `JavaScript`,
      `CSS`,
      `React`,
      `next.js`,
      `Vercel`,
      `Recoil`,
      `Axios`,
      `Express`,
      `Mongoose`,
      `MongoDB`,
      `framer-motion`,
      `node.js`,
      `MaterialUI`,
    ],
  },
  {
    label: "Pollock Paneer",
    status: "LIVE",
    linkUrl: "https://pollockpaneer.vercel.app/",
    imageUrl: "/pollock_paneer.webp",
    alt: "A red-toned painting in the style of Jackson Pollock with a single-line drawing of Jackson Pollock wearing headphones",
    description: `" Compared to Scotch Tour v2, the focus was less on front-end UI design and more on working with interesting APIs to create a more compelling/relevant user-facing application. Note: Currently awaiting Spotify approval to promote to production. "`,
    goal: `Learn OAuth protocol and get more comfortable with asynchronous calls to third-party APIs (specifically Spotify and OpenAI's DALL-E2)`,
    features: [
      `Secure OAuth login process and session/token management (using next-auth and Next.js middleware)`,
      `User-specific generation of AI artwork (in the style of Jackson Pollock) based on users' top artists data from Spotify`,
      `Backoff-retry policy for failed fetch requests`,
    ],
    technologiesUsed: [
      `JavaScript`,
      `CSS`,
      `SCSS`,
      `React`,
      `next.js`,
      `Vercel`,
      `Recoil`,
      `node.js`,
      `MaterialUI`,
      `Spotify Web API`,
      `OpenAI DALL-E2 API`,
      `js-cookie`,
    ],
  },
  {
    label: "Rare Crate",
    status: "WIP",
    linkUrl:
      "https://docs.google.com/document/d/1qsbOKcZGmjq4uFmKt5tXuFO7sWpJzgBuAb6Od6JE4Bc/edit?usp=sharing",
    imageUrl: "/rare_crate.jpeg",
    alt: "A person digging through a library of vinyl records",
    description: `" A social media platform that recreates the analog experience of digging through record store crates to discover new music. "`,
    goal: `Learn foundational concepts of social media platforms (e.g. managing user data/settings, serving relevant and timely data, etc.) and get creative on how to scale an application with budget constraints; attempt to get more familiar with DevOps norms such as testing, monitoring, containerization, and orchestration (where appropriate).`,
    features: [
      `Curate collections ("crates") of albums using the Discogs API`,
      `Add unique and/or structured labels to Crates as well as tags on Albums that drive user engagement & discovery`,
      `Common social media interactions among profiles, specifically favorites, following, and messaging`,
    ],
    technologiesUsed: [
      `TypeScript`,
      `SCSS`,
      `React`,
      `next.js`,
      `Vercel`,
      `Prisma`,
      `ApolloServer`,
      `GraphQL`,
      `PlanetScale`,
      `MySQL`,
      `Firebase`,
      `AWS (S3)`,
      `Storybook`,
      `Formik`,
      `Yup`,
      `Sentry`,
      `Amplitude`,
      `Jest`,
      `Docker`,
      `Kubernetes`,
    ],
  },
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.sm}px`
  );

  const handleChange = (index) => () => {
    setActiveStep(index);
  };
  return (
    <Box
      sx={{ maxWidth: isMobile ? 232 : 640 }}
      padding={isMobile ? 2 : 4}
      mr={isMobile ? 2 : 0}
    >
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-line": {
            border: 0,
          },
          "& .MuiStepLabel-iconContainer": {
            display: "none",
          },

          "& .MuiStepLabel-labelContainer": {
            color: theme.palette.secondary.main,
          },
        }}
      >
        {projectSteps.map((step, index) => (
          <Step key={step.label}>
            <StepButton color="inherit" onClick={handleChange(index)}>
              <Typography variant={"h6"} marginBottom={2}>
                {step.label}
              </Typography>

              <StepContent
                sx={{
                  borderLeft: "0px",
                  padding: 0,
                  margin: 0,
                }}
              >
                <Grid container width={isMobile ? 200 : 600}>
                  <Grid item xs={12} md={4}>
                    <Image
                      src={step.imageUrl}
                      height="200"
                      width="200"
                      className={styles.image}
                      alt={step.alt}
                      priority
                    />

                    <Grid item xs={12} display={isMobile ? "none" : "flex"}>
                      <Stack
                        width={"100%"}
                        display="inline-block"
                        paddingY={isMobile ? 0 : 1}
                      >
                        {step.technologiesUsed.map((item) => {
                          return (
                            <Chip
                              key={item}
                              label={item}
                              sx={{
                                fontSize: "0.7em",
                                height: 20,
                                marginX: 0.15,
                              }}
                            />
                          );
                        })}
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} md={8}>
                    <Grid
                      item
                      xs={8}
                      md={6}
                      paddingY={2}
                      display="flex"
                      alignItems="center"
                      justifyContent={isMobile ? "center" : "start"}
                      paddingX={isMobile ? 1.5 : 4}
                    >
                      <Typography
                        display="inline"
                        fontSize={isMobile ? "0.9em" : "1.1em"}
                      >
                        {`Status: `}
                      </Typography>
                      <Chip
                        variant="outlined"
                        label={step.status}
                        sx={{
                          marginLeft: isMobile ? 0.5 : 2,
                          fontSize: "0.8em",
                          height: "20px",
                          backgroundColor:
                            step.status === "LIVE"
                              ? "#1a67ed"
                              : step.status === "PENDING"
                              ? "#46a641"
                              : "#f5c433",
                          color: step.status === "WIP" ? "bdbdbd" : "white",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      md={6}
                      paddingY={2}
                      display="flex"
                      alignItems="center"
                      justifyContent={isMobile ? "end" : "center"}
                    >
                      <Link
                        href={step.linkUrl}
                        target={step.linkUrl !== "" ? "_blank" : ""}
                        className={styles.link}
                      >
                        <Button
                          disableFocusRipple
                          variant="contained"
                          disabled={step.linkUrl !== "" ? false : true}
                          sx={{
                            paddingX: isMobile ? 0 : 2,
                          }}
                        >
                          {isMobile ? "LINK" : "Check it out!"}
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        fontSize={"0.85em"}
                        color={theme.palette.text.secondary}
                        paddingY={isMobile ? 0 : 1}
                        paddingX={isMobile ? 1.5 : 4}
                        fontStyle="italic"
                      >
                        {step.description}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      display={isMobile ? "none" : "flex"}
                    >
                      <Grid item xs={2}>
                        <Typography
                          fontSize={"0.85em"}
                          color={theme.palette.text.primary}
                          paddingX={4}
                          paddingY={1}
                          width={"100%"}
                        >
                          <strong>{`Goal: `}</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          fontSize={"0.85em"}
                          color={theme.palette.text.secondary}
                          paddingX={2}
                          paddingY={1}
                          width={"100%"}
                        >
                          {step.goal}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} display={isMobile ? "none" : "flex"}>
                      <Typography
                        fontSize={"0.85em"}
                        color={theme.palette.text.primary}
                        paddingX={isMobile ? 1.5 : 4}
                        paddingY={1}
                      >
                        <strong>{`Features: `}</strong>
                        <ul>
                          {step.features.map((feat) => {
                            return (
                              <li key={feat} className={styles.bullet}>
                                {feat}
                              </li>
                            );
                          })}
                        </ul>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} display={isMobile ? "flex" : "none"}>
                      <Accordion
                        elevation={0}
                        sx={{
                          width: "100%",
                          marginTop: 1,
                          "& .MuiAccordionDetails-root": { padding: "0px" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore color="primary" />}
                        >
                          <Typography fontSize={"1em"}>Goal</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack
                            width={"100%"}
                            display="inline-block"
                            paddingY={isMobile ? 0 : 1}
                            paddingX={2}
                          >
                            {step.goal}
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} display={isMobile ? "flex" : "none"}>
                      <Accordion
                        elevation={0}
                        sx={{
                          width: "100%",
                          marginTop: 1,
                          "& .MuiAccordionDetails-root": { padding: "0px" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore color="primary" />}
                        >
                          <Typography fontSize={"1em"}>Features</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            fontSize={"0.85em"}
                            color={theme.palette.text.secondary}
                          >
                            <ul className={styles.bulletWrapper}>
                              {step.features.map((feat) => {
                                return (
                                  <li key={feat} className={styles.bullet}>
                                    {feat}
                                  </li>
                                );
                              })}
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} display={isMobile ? "flex" : "none"}>
                      <Accordion
                        elevation={0}
                        sx={{
                          width: "100%",
                          marginTop: 1,
                          "& .MuiAccordionDetails-root": { padding: "0px" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore color="primary" />}
                        >
                          <Typography fontSize={"1em"}>Project Tech</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack
                            width={"100%"}
                            display="inline-block"
                            paddingY={isMobile ? 0 : 1}
                            paddingX={2}
                          >
                            {step.technologiesUsed.map((item) => {
                              return (
                                <Chip
                                  key={item}
                                  label={item}
                                  sx={{
                                    fontSize: "0.7em",
                                    height: 20,
                                    marginX: 0.15,
                                  }}
                                />
                              );
                            })}
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Grid>
              </StepContent>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
