import { CssBaseline, ThemeProvider } from "@mui/material/styles";
import createTheme from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Routes } from "react-router-dom";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  console.log(mode);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
