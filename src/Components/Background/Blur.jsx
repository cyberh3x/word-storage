import { forwardRef } from "react";
import Container from "@mui/material/Container";
import makeStyles from "@mui/styles/makeStyles";
import { alpha } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    background: alpha(theme.palette.background.default, "0.7"),
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)",
    backdropFilter: `blur(${theme.spacing(2)})`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    height: theme.spacing(60),
    maxHeight: theme.spacing(65),
    overflowY: "auto",
  },
}));

const BlurContainer = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md" ref={ref} {...props}>
      {props.children}
    </Container>
  );
});

export default BlurContainer;
