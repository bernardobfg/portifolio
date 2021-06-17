import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/global';
import {lightTheme, darkTheme} from "./styles/theme.js";
import {useProvider} from './Provider'
import Home from "./pages/Home";

function App() {
  const { themeName } = useProvider();
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    setTheme(themeName === "light"? lightTheme: darkTheme)
  }, [themeName])
  return (
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle/>
      </ThemeProvider>
  );
}

export default App;
