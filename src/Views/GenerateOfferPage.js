import React, { useState } from 'react';

function GenerateOfferPage() {

  const [offerData, setOfferData] = useState({
    role: '',
    description: '',
    requirements: '',
    rent: 0,
    mail: '',
    type: 'Publicación LinkedIn'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfferData({
      ...offerData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://zueux19alh.execute-api.us-east-2.amazonaws.com/crear-publicacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(offerData)
      });

      if (!response.ok) {
        throw new Error('Error al generar oferta');
      }

      const data = await response.json();
      alert('Oferta generada con éxito');
      console.log(data);

    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al generar la oferta');
    }
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">GPTRecruitment</a>
        </div>
      </nav>

      <section className="section">
        <h1 className="title">Generar nueva oferta</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Nombre del rol</label>
            <div className="control">
              <input className="input" 
                type="text" 
                placeholder="Analista de Recursos Humanos" 
                name="role" 
                value={offerData.role}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Descripción del rol</label>
            <div className="control">
              <textarea className="textarea" 
                placeholder="Descripción del rol" 
                name="description"
                value={offerData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Requisitos</label>
            <div className="control">
              <textarea className="textarea" 
                placeholder="Requisitos" 
                name="requirements"
                value={offerData.requirements}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <label className="label">Renta ofrecida</label>

          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">$</a>
            </p>
            <p className="control">
              <input className="input" 
                type="number" 
                placeholder="1000000"
                name='rent'
                value={offerData.rent}
                onChange={handleChange}
              />
            </p>
          </div>

          <div className="field">
            <label className="label">Email de contacto</label>
            <div className="control has-icons-left">
              <input className="input" 
                type="email" 
                placeholder="contacto@gptrecruitment.cl" 
                name="mail"
                value={offerData.mail}
                onChange={handleChange}
                />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Tipo de publicación</label>
            <div className="select" >
              <select
                name="type"
                value={offerData.type}
                onChange={handleChange}
              >
                <option>Publicación LinkedIn</option>
                <option>Correo electrónico masivo</option>
                <option>Publicación genérica</option>
              </select>
            </div>
          </div>

          <div className="field">
            <p className="control">
              <button type="submit" className="button is-success">Generar oferta</button>
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
