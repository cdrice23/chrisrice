import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepContent,
  Typography,
  StepButton,
} from "@mui/material";
import { m } from "framer-motion";

const projectSteps = [
  {
    label: "Scotch Tour (v1)",
    description: `My earliest project that is so low tech, you'd think you found it while surfing NetScape in 1998. A constant reminder that I can only go up from here.`,
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
    description: `A second, "bare-bones" HTML and CSS endeavor before I started learning JavaScript.`,
    goal: `Expand CSS fundamentals`,
    features: [
      `Mobile-responsive (with use of media queries)`,
      `Local navigation to sections on page`,
    ],
    technologiesUsed: [`HTML`, `CSS`],
  },
  {
    label: "Chris Rice Portfolio (v2)",
    description: `My first project after learning JavaScript and React, where I tried recreating my v1 site while using more modern frameworks and libraries (e.g. next.js and ChakraUI).`,
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
    description: `As opposed to the v1 to v2 evolution of my portfolio page, this was a major overhaul of the Scotch Tour concept where I really wanted to make a practical-use React application.`,
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
    description: `Compared to Scotch Tour v2, the focus was less on front-end UI design and more on working with interesting APIs to create a more compelling/relevant user-facing application.`,
    goal: `Learn OAuth protocol and get more comfortable with asynchronous calls to third-party APIs (specifically Spotify and OpenAI's DALL-E2)`,
    features: [
      `Secure OAuth login process and session/token management (using next-auth and Next.js middleware)`,
      `User-specific generation of AI artwork (in the style of Jackson Pollock) based on users' top artists data from Spotify`,
      `Backoff-retry policy for failed fetch requests`,
    ],
    technologiesUsed: [
      `JavaScript`,
      `CSS`,
      `SCSS``React`,
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
    label: "Rare Crate (WIP)",
    description: `Current WIP project that expands learnings from Pollock Paneer to create a social media add-on experience to Spotify. Users can create collections of albums ('crates') to share with friends and discover new music in a structured, curated environment.`,
    goal: `Learn some fundamentals of social media platforms (e.g. managing user data/settings, creating an interactive timeline of timely data, etc.) and get creative on how to scale an application with budget constraints`,
    features: [],
    technologiesUsed: [
      `JavaScript`,
      `CSS`,
      `SCSS``React`,
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
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const handleChange = (index) => () => {
    setActiveStep(index);
  };
  return (
    <Box sx={{ maxWidth: 600 }} padding={4}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {timelineSteps.map((step, index) => (
          <Step key={step.label}>
            <StepButton color="inherit" onClick={handleChange(index)}>
              <Box marginLeft={2}>
                <Typography variant={"h6"}>{step.label}</Typography>

                {step.roles.map((role) => {
                  return <Typography fontSize={"0.65em"}>{role}</Typography>;
                })}
              </Box>
              <StepContent sx={{ borderLeft: "0px", margin: 1 }}>
                <Typography fontSize={"0.85em"} color="blue">
                  {step.description}
                </Typography>
              </StepContent>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
