import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";
import { generateRandomInteger } from "utility/number-utility";
import bg1 from "assets/images/background/1.jpg";
import bg2 from "assets/images/background/2.jpg";
import bg3 from "assets/images/background/3.jpg";
import bg4 from "assets/images/background/4.jpg";
import bg5 from "assets/images/background/5.jpg";

const backgroundList = [bg1, bg2, bg3, bg4, bg5],
  background =
    backgroundList[generateRandomInteger(0, backgroundList.length - 1)];

const useStyles = makeStyles({
  root: {
    height: "100vh",
    overflow: "hidden",
    background: `url(${background}) center bottom fixed`,
    backgroundSize: "cover",
  },
});

const ImageBackground = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.root} {...props}>
      {children}
    </Grid>
  );
};

export default ImageBackground;
