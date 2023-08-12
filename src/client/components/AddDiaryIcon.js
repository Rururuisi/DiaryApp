import React from "react";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const StyledFab = styled(Fab)({
  position: "fixed",
  zIndex: 1,
  bottom: 25,
  left: 0,
  right: 0,
  margin: "auto",
});

export default function AddDiaryIcon() {
  return (
    <StyledFab
      sx={{
        "&:hover": {
          backgroundColor: (theme) => theme.palette.ternary.light,
        },
        backgroundColor: (theme) => theme.palette.primary.dark,
      }}
      color="primary"
      aria-label="add"
    >
      <AddIcon style={{ color: "white" }} />
    </StyledFab>
  );
}
