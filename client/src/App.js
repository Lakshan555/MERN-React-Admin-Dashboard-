import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

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
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
