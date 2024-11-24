import React from 'react';
import { useLocation } from 'react-router-dom';

function OfferDetailsPage() {
  const location = useLocation();
  const offerData = location.state; // Datos pasados desde la navegación

  if (!offerData || !offerData.content) {
    return <p>No se encontraron datos para esta oferta.</p>;
  }

  const { role, content } = offerData.content;

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">GPTRecruitment</a>
        </div>
      </nav>

      <section className="section">
        <h1 className="title">Detalles de la Oferta</h1>
        <div className="box">
          <div className="content">
            <p>{content}</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">© 2024 GPTRecruitment Labs</div>
      </footer>
    </div>
  );
}

export default OfferDetailsPage;