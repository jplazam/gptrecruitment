import React from 'react';

function GenerateOfferPage() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">GPTRecruitment</a>
        </div>
      </nav>

      <section className="section">
        <h1 className="title">Generar nueva oferta</h1>
        <form>
          <div className="field">
            <label className="label">Nombre del rol</label>
            <div className="control">
              <input className="input" type="text" placeholder="Analista de Recursos Humanos" name="name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Descripción del rol</label>
            <div className="control">
              <textarea className="textarea" placeholder="Descripción del rol" name="description"></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Requisitos</label>
            <div className="control">
              <textarea className="textarea" placeholder="Requisitos" name="requirements"></textarea>
            </div>
          </div>

          <label className="label">Renta ofrecida</label>

          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">$</a>
            </p>
            <p className="control">
              <input className="input" type="number" placeholder="1000000" />
            </p>
          </div>

          <div className="field">
            <label className="label">Email de contacto</label>
            <div className="control has-icons-left">
              <input className="input" type="email" placeholder="contacto@gptrecruitment.cl" name="contact_email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Tipo de publicación</label>
            <div className="select" name="type">
              <select>
                <option>Publicación LinkedIn</option>
                <option>Correo electrónico masivo</option>
                <option>Publicación genérica</option>
              </select>
            </div>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success">Generar oferta</button>
            </p>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">© 2024 GPTRecruitment Labs</div>
      </footer>
    </div>
  );
}

export default GenerateOfferPage;
