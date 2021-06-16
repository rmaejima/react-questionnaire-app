import React from "react";
import ReactDOM from "react-dom";
import "styles/global.css";
import "ress";
import { App } from "App";
import { ThemeProvider } from "styled-components";
import * as theme from "consts/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
