import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import LFFInfo from '../components/LFFInfo';
import SobreNosotros from '../pages/SobreNosotros';
import Pedidos from '../pages/Pedidos';
import NotFound from '../pages/NotFound';
import Personal from '../pages/Personal';
import Layout from '../containers/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Inicio />}>
            <Route path="/luna-food-fest" element={<LFFInfo />} />
          </Route>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export { App };
