import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from "@mui/material";

const timelineSteps = [
  {
    label: "West Monroe Partners",
    roles: [
      `Consultant - Operations Excellence (2014 - 2015)`,
      `Experienced Consultant - Operations Excellence, Supply Chain (2015 - 2017)`,
      `Senior Consultant - Supply Chain (2017 - 2019)`,
    ],
    description: `Acted as lead analyst, project manager, and client liaison for numerous projects
    across different industries and disciplines. Specialized in commercial TMS and VRS
    space, and participated in over 15 M&A due diligence engagements.`,
    keySkills: [
      `Project Management`,
      `Software Implementation`,
      `Requirements Gathering`,
    ],
  },
  {
    label: "Flexport",
    roles: [
      `Manager - Trucking Consolidations (2019 - 2021)`,
      `Technical Program Manager - Data Science (2021 - 2022)`,
    ],
    description: `Led North American trucking consolidations network development supporting Air
    and LCL imports (inclusive of strategy, operations, pricing, procurement,
    product/tool creation, and performance management). As Data Science TPM, implemented AGILE methodology to manage portfolio of XX data science initiatives and acted as product manager for optimization engine workstream.`,
    keySkills: [
      `Product & Program Management`,
      `Integrated Quarterly Planning`,
    ],
  },
  {
    label: "Independent Education",
    roles: ["(2022 - 2023)"],
    description: `Spent the better part of a year conducting self-study (utilizing online resources and coaching from friends/colleagues). Built several projects from scratch using both conventional and bleeding-edge technologies (primarily in React).`,
    keySkills: [
      `Responsive and Modern Design`,
      `Software Development Lifecycle`,
      `Debugging and Troubleshooting`,
    ],
  },
];

export default function CareerTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (index) => {
    setActiveStep(index);
  };
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
