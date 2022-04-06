import useWords from "Hooks/UseWords";
import styled from "@mui/system/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Box from "@mui/system/Box";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledContainer = styled("div")(() => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)",
  textAlign: "center",
  width: "70%",
  margin: "0 auto",
}));

const StyledNotFoundGrid = styled("div")(() => ({
  position: "absolute",
  right: 0,
  left: 0,
  top: "50%",
  transform: "translate(0, -50%)",
}));

const Content = () => {
  const { word, words, edit, remove } = useWords(),
    handleSpeech = () => {
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = word.word;
      window.speechSynthesis.speak(speech);
    };

  return (
    <>
      {words.length ? (
        <StyledContainer>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid item xs={4}>
              <Grid container justifyContent="start">
                <Fab
                  color="warning"
                  aria-label="add"
                  size="small"
                  onClick={edit}
                >
                  <EditIcon color="action" />
                </Fab>
                <Box ml={1}>
                  <Fab
                    color="error"
                    aria-label="add"
                    size="small"
                    onClick={remove}
                  >
                    <DeleteIcon color="action" />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h2">{word.word}</Typography>
            </Grid>
            <Grid item xs={4} textAlign="right">
              <Grid container justifyContent="end">
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  onClick={handleSpeech}
                  title="Listen"
                >
                  <VolumeUpIcon color="action" />
                </Fab>
                <Box ml={1}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    title="Source"
                  >
                    <Link href={word.pageUrl} target="_blank" alignSelf={"end"}>
                      <LinkIcon color="action" />
                    </Link>
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Typography variant="h5">{word.translation}</Typography>
        </StyledContainer>
      ) : (
        <Grid item xs={12} textAlign="center">
          <StyledNotFoundGrid>
            <Typography variant="h2">No word found</Typography>
          </StyledNotFoundGrid>
        </Grid>
      )}
    </>
  );
};

export default Content;
