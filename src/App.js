import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import LandingPage from './Views/LandingPage';
import GenerateOfferPage from './Views/GenerateOfferPage';
import OfferDetailsPage from './Views/OfferDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Ruta para la página de Generar Oferta */}
        <Route path="/generar-oferta" element={<GenerateOfferPage />} />
        <Route path="/detalle-oferta" element={<OfferDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;