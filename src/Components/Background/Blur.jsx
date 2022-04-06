import { forwardRef } from "react";
import Container from "@mui/material/Container";
import styled from "@mui/system/styled";
import { alpha } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
  background: alpha(theme.palette.background.default, "0.7"),
  position: "absolute",
  left: 0,
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)",
  backdropFilter: `blur(${theme.spacing(2)})`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  height: theme.spacing(60),
  maxHeight: theme.spacing(65),
  overflowY: "auto",
}));

const BlurContainer = forwardRef((props, ref) => {
  return (
    <StyledContainer maxWidth="md" ref={ref} {...props}>
      {props.children}
    </StyledContainer>
  );
});

export default BlurContainer;
