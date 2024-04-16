import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./contexts/authentication.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./customTheme.js";
import { SittersProvider } from "./contexts/getSitters.jsx";
import { MyPetsToolsProvider } from "./contexts/myPetsTools.jsx";

import { BookingToolsProvider } from "./contexts/BookingTools.jsx";
import { MyHistoryToolsProvider } from "./contexts/myHistoryTools.jsx";
import { AlternativeLoginProvider } from "./contexts/alternativeLogin.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AlternativeLoginProvider>
          <MyPetsToolsProvider>
            <SittersProvider>
              <BookingToolsProvider>
                <MyHistoryToolsProvider>
                  <ThemeProvider theme={theme}>
                    <App />
                  </ThemeProvider>
                </MyHistoryToolsProvider>
              </BookingToolsProvider>
            </SittersProvider>
          </MyPetsToolsProvider>
        </AlternativeLoginProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
