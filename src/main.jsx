import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/home/Page";
import Page from "./pages/mdx-example/Page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mdx-example" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
