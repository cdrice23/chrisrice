import { useState } from "react";
import {
  SwipeableDrawer,
  Button,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { theme } from "@/styles/theme";

export default function SwipeableEdgeDrawer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.sm}px`
  );

  const topOffset = isMobile ? "150px" : "50px";
  const bottomOffset = isMobile ? "250px" : "150px";

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
    props.handleOpen(open);
  };

  return (
    <>
      <Button
        sx={{
          width: "300px",
          height: "100px",
          position: "absolute",
          zIndex: 1,
          transform: props.transform,
          marginTop: props.anchor === "top" ? topOffset : 0,
          top:
            props.anchor === "top"
              ? 0
              : props.anchor === "bottom"
              ? `calc(100% - ${bottomOffset})`
              : "50%",
          //   bottom:
          //     props.anchor === "bottom"
          //       ? 0
          //       : props.anchor === "top"
          //       ? "75%"
          //       : "50%",
          left:
            props.anchor === "left"
              ? 0
              : props.anchor === "right"
              ? "calc(100% - 200px)"
              : "50%",
          //   right:
          //     props.anchor === "right"
          //       ? 0
          //       : props.anchor === "left"
          //       ? "75%"
          //       : "50%",
        }}
        onClick={toggleDrawer(true)}
        style={{ [props.anchor]: 0 }}
      >
        <Typography variant="h5">{props.label}</Typography>
      </Button>
      <SwipeableDrawer
        sx={{ width: props.drawerWidth, flexShrink: 0 }}
        anchor={props.anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {props.children}
      </SwipeableDrawer>
    </>
  );
}
