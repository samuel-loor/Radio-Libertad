import { useState } from 'react';
import '../assets/css/Buzon.css';

export function Buzon() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //http://localhost/ImpacTics/radio-libertad-react/server/guardar_mensaje.php
      //http://pruebas2002.radiolibertad740am.com/guardar_mensaje.php
      const response = await fetch(
        'http://localhost/ImpacTics/radio-libertad-react/server/guardar_mensaje.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowModal(true); // Mostrar modal
        setTimeout(() => setShowModal(false), 2000);
        setFormData({ nombre: '', apellido: '', email: '', mensaje: '' });
      } else {
        alert('Error al enviar el mensaje ❌');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className='buzon__content'>
      <h2 className='buzon__title'>Buzón Ciudadano</h2>

      <form className='buzon__form' onSubmit={handleSubmit}>
        <div className='form__left'>
          <input
            className='input'
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            className='input'
            type='text'
            name='apellido'
            placeholder='Apellido'
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            className='input'
            type='email'
            name='email'
            placeholder='Correo electrónico'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='form__right'>
          <textarea
            className='textarea'
            name='mensaje'
            placeholder='Escribe tu mensaje'
            rows='8'
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='form__footer'>
          <button className='button' type='submit'>
            Enviar
          </button>
        </div>
      </form>

      {showModal && (
        <div className='modal'>
          <p>✅ Mensaje enviado con éxito</p>
        </div>
      )}
    </section>
  );
}
