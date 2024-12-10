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
  const type = "Oferta Generada";
  let publication = "No se pudo generar la publicación.";
  let keywords = null;

  try {
    // Intentar separar el contenido si sigue el formato esperado
    const parts = content.split("Palabras clave:");
    publication = parts[0]?.replace("Publicación:", "").trim() || publication;
    keywords = parts[1]?.trim();
  } catch (error) {
    console.error("Error al procesar la respuesta de la API:", error);
  }

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
            {publication.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        {keywords ? (
          <div className='card'>
            <header className='card-header'>
              <p className='card-header-title'>Palabras claves</p>
            </header>
            <div className='card-content'>
              {keywords.split(',').map((keyword, index) => (
                <span key={index} className='tag is-info' style={{ marginRight: '5px' }}>
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className='card'>
            <header className='card-header'>
              <p className='card-header-title'>Palabras claves</p>
            </header>
            <div className='card-content'>
              <p>No se encontraron palabras claves.</p>
            </div>
          </div>
        )}

      </section>

      <footer className="footer">
        <div className="content has-text-centered">© 2024 GPTLabs</div>
      </footer>
    </div>
  );
}

export default OfferDetailsPage;
