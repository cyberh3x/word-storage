import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { useApp } from "Store/App/AppProvider";
import Home from "./Home/Index";

const PageRoot = () => {
  const [{ theme }] = useApp(),
    muiTheme = createTheme(theme);
  return (
    <main>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </main>
  );
};

export default PageRoot;
