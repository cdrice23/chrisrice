import { useState } from "react";
import {
  SwipeableDrawer,
  Button,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import { theme } from "@/styles/theme";

export default function SwipeableEdgeDrawerMobile(props) {
  const [isOpen, setIsOpen] = useState(false);

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
        disableFocusRipple
        sx={{
          width: "300px",
          height: "100px",
          position: "absolute",
          zIndex: 1,
          transform: props.transformButton,
          marginTop: props.anchor === "top" ? "150px" : 0,
          top:
            props.anchor === "top"
              ? 0
              : props.anchor === "bottom"
              ? `calc(100% - 250px)`
              : "50%",
          left:
            props.anchor === "left"
              ? 0
              : props.anchor === "right"
              ? "calc(100% - 200px)"
              : "50%",
          display: { xs: "block", md: "none" },
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
