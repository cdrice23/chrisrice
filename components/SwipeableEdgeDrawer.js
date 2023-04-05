import { useState } from "react";
import { SwipeableDrawer, Button } from "@mui/material";

export default function SwipeableEdgeDrawer(props) {
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
        sx={{
          width: "300px",
          height: "100px",
          position: "absolute",
          zIndex: 1,
          transform: props.transform,
          top:
            props.anchor === "top"
              ? 0
              : props.anchor === "bottom"
              ? "calc(100% - 100px)"
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
        {props.label}
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
