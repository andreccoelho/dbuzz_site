import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Privacidade from "./pages/Privacidade";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
