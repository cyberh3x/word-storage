import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import styled from "@mui/system/styled";
import Link from "@mui/material/Link";
import Box from "@mui/system/Box";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)",
  textAlign: "center",
  width: "70%",
  margin: "0 auto",
}));

const TestContent = () => {
  return (
    <StyledContainer>
      <Grid container alignItems={"center"}>
        <Grid item xs={4}>
          <Grid container justifyContent="start">
            <Fab color="warning" aria-label="add" size="small">
              <EditIcon color="action" />
            </Fab>
            <Box ml={1}>
              <Fab color="error" aria-label="add" size="small">
                <DeleteIcon color="action" />
              </Fab>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2">Word</Typography>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <Grid container justifyContent="end">
            <Fab color="primary" aria-label="add" size="small">
              <VolumeUpIcon color="action" />
            </Fab>
            <Box ml={1}>
              <Fab color="info" aria-label="add" size="small">
                <Link target="_blank" alignSelf={"end"}>
                  <LinkIcon color="action" />
                </Link>
              </Fab>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h5">Translation</Typography>
    </StyledContainer>
  );
};

export default TestContent;
