import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Servicios from "../pages/Servicios";
import SobreNosotros from "../pages/SobreNosotros";
import Pedidos from "../pages/Pedidos";
import NotFound from "../pages/NotFound";
import Personal from "../pages/Personal";
import Layout from "../containers/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
