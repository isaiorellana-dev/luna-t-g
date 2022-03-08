import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Layout from "../containers/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
