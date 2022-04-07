import styled from "@mui/system/styled";
import Grid from "@mui/material/Grid";
import { generateRandomInteger } from "Utility/Number";
import bg1 from "Assets/Images/Background/1.jpg";
import bg2 from "Assets/Images/Background/2.jpg";
import bg3 from "Assets/Images/Background/3.jpg";
import bg4 from "Assets/Images/Background/4.jpg";
import bg5 from "Assets/Images/Background/5.jpg";

const backgroundList = [bg1, bg2, bg3, bg4, bg5],
  background =
    backgroundList[generateRandomInteger(0, backgroundList.length - 1)];

const StyledGrid = styled(Grid)(() => ({
  height: "100vh",
  overflow: "hidden",
  background: `url(${background}) center bottom fixed`,
  backgroundSize: "cover",
}));

const ImageBackground = ({ children, classes, ...props }) => {
  return (
    <StyledGrid item {...props}>
      {children}
    </StyledGrid>
  );
};

export default ImageBackground;
