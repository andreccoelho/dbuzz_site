import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Privacidade from "./pages/Privacidade";
import ControlSignage from "./pages/ControlSignage";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/control-signage" element={<ControlSignage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
