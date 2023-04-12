import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepContent,
  Typography,
  StepButton,
  useMediaQuery,
} from "@mui/material";
import { theme } from "@/styles/theme";

const timelineSteps = [
  {
    label: "West Monroe Partners",
    roles: [
      `Consultant - Operations Excellence (2014 - 2015)`,
      `Experienced Consultant - Operations Excellence, Supply Chain (2015 - 2017)`,
      `Senior Consultant - Supply Chain (2017 - 2019)`,
    ],
    description: `" I was really fortunate to start my career at WMP; I was surrounded by incredible mentors and leaders that helped inform my own management style later in my career. My project teams were usually pretty small, so I learned early on how to wear multiple hats and deliver independently. In retrospect, West Monroe really helped shape my approach to software development and implementation - never losing sight of the North Star and never forgetting the human part of the equation. "`,
    highlights: [
      `Acted as lead analyst, project manager, and client liaison for numerous projects
    across different industries and disciplines.`,
      `Specialized in commercial TMS and VRS
    space, and participated in over 15 M&A due diligence engagements.`,
    ],
  },
  {
    label: "Flexport",
    roles: [
      `Manager - Trucking Consolidations (2019 - 2021)`,
      `Technical Program Manager - Data Science (2021 - 2022)`,
    ],
    description: `" I used to think that the pace of consulting was so fast, and was proven completely wrong once I came to Flexport. Working at a startup taught me to be nimble and responsive to constant change, while taking some of the stability and structure I learned at WMP to help our teams grow. In all of my roles at Flexport, I learned that data can be a powerful influencer, but it needs to be interpreted objectively. With every project I start now, I always ask myself: 'does this metric even matter?' "`,
    highlights: [
      `Led North American trucking consolidations network development supporting Air
    and LCL imports (inclusive of strategy, operations, pricing, procurement,
    product/tool creation, and performance management).`,
      `Initiated, developed requirements for, and helped deliver a data science product for optimizing truck cargo consolidation and scheduling, which reduced costs by 33%.`,
      `As Data Science TPM, implemented AGILE methodology to manage portfolio of 10+ data science initiatives and acted as product manager for optimization engine workstream.`,
    ],
  },
  {
    label: "Independent Education",
    roles: ["(2022 - 2023)"],
    description: `" My approach to this journey was twofold: 1) continuous improvement and 2) practical application. Once I gained the minimum amount of academic knowledge to build projects on my own, I ensured that both the scope and skillsets required for each subsequent project were more involved than the last. It was important for me to balance foundational knowledge (e.g. ES6 and React basics), learning enterprise mainstays (e.g. MongoDB, Redux), and bleeding-edge tech (e.g. next.js, Recoil). "`,
    highlights: [
      `Converting a completed MERN full-stack project to serverless architecture using Next.js (rather than hosting both front-end and back-end code on Vercel)`,
      `Navigating documentation on using both the Spotify and OpenAI DALL-E2 APIs to build a tool that visually represents a user's listening habits as a Jackson Pollock painting`,
      `Seeing my improvements slowly through the evolution of the v1, v2 and v3 (current) versions of my own portfolio page`,
    ],
  },
];

export default function CareerTimelineDesktop() {
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (index) => () => {
    setActiveStep(index);
  };

  return (
    <Box sx={{ maxWidth: 640 }} padding={4} mr={0}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .MuiStepLabel-labelContainer": {
            color: theme.palette.secondary.main,
          },
        }}
      >
        {timelineSteps.map((step, index) => (
          <Step key={step.label}>
            <StepButton color="inherit" onClick={handleChange(index)}>
              <Box marginLeft={2}>
                <Typography variant={"h6"}>{step.label}</Typography>

                {step.roles.map((role) => {
                  return (
                    <Typography fontSize={"0.8em"} key={role}>
                      {role}
                    </Typography>
                  );
                })}
              </Box>
              <StepContent sx={{ borderLeft: "0px" }}>
                <Typography
                  fontSize={"0.85em"}
                  color={theme.palette.text.secondary}
                  mt={2}
                  px={2}
                  fontStyle="italic"
                >
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
