import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import ProteinPage from "./pages/protein/Protein.tsx";
import HomePage from "./pages/home/Home.tsx";
import ProteinProductPage from "./pages/protein/ProteinProduct.tsx";

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="protein" element={<ProteinPage />} />
          <Route path="protein/product/1" element={<ProteinProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
