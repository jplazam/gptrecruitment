import React from 'react';
import { useLocation } from 'react-router-dom';

function OfferDetailsPage() {
  const location = useLocation();
  const offerData = location.state; // Datos pasados desde la navegación

  console.log(offerData);

  if (!offerData || !offerData.content) {
    return <p>No se encontraron datos para esta oferta.</p>;
  }

  const { role, content } = offerData.content;
  const type = offerData.type || "Oferta Generada";
  const keywords = offerData.keywords || ""

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">GPTRecruitment</a>
        </div>
      </nav>

      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{type}</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className='card'>
          <header className='card-header'>
            <p className='card-header-title'>{type}</p>
          </header>
          <div className='card-content'>
            {content.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className='card'>
          <header className='card-header'>
            <p className='card-header-title'>Palabras claves</p>
          </header>
          <div className='card-content'>
            {keywords}
          </div>
        </div>

      </section>

      <footer className="footer">
        <div className="content has-text-centered">© 2024 GPTLabs</div>
      </footer>
    </div>
  );
}

export default OfferDetailsPage;
