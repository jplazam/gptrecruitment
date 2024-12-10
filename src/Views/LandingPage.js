import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">GPTRecruitment</a>
        </div>
      </nav>

      {/* Sección principal */}
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Bienvenido a GPTRecruitment</h1>
            <Link to="/generar-oferta" className="button is-light">Comenzar</Link>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="section" id="features">
        <div className="container">
          <h2 className="title">Con GPTRecruitment podrás:</h2>
          <div className="columns">
            <div className="column">
              <div className="box">
                <h3 className="title is-4">Redactar Ofertas Laborales de forma Automática</h3>
                <p>
                  Nuestra aplicación utiliza ChatGPT para generar correos, publicaciones y anuncios de ofertas laborales de forma automática, siguiendo los parámetros y formatos establecidos por los usuarios.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="title is-4">Personalizar tus Ofertas</h3>
                <p>
                Podrás definir estructuras personalizadas, adaptando las publicaciones a las necesidades específicas de cada vacante en tiempo real, lo que garantiza contenido adecuado y ajustado a cada contexto.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="title is-4">Ahorrar Tiempo</h3>
                <p>
                Al automatizar el proceso de redacción de publicaciones laborales, podrás dedicar más tiempo a tareas estratégicas, como la evaluación y selección de candidatos, optimizando el flujo de trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>© 2024 GPTLabs</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

