import { useState } from 'react';
import '../assets/css/Buzon.css';

export function Buzon() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/mensajes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert('Mensaje enviado correctamente');
      setFormData({ nombre: '', apellido: '', email: '', mensaje: '' });
    } else {
      alert('Error al enviar mensaje');
    }
  };

  return (
    <section className='buzon__content'>
      <h2 className='buzon__title'>Buzón Ciudadano</h2>
      <form className='buzon__form' onSubmit={handleSubmit}>
        <div className='form__left'>
          <input className='input' type='text' name='nombre' placeholder='Nombre' required value={formData.nombre} onChange={handleChange} />
          <input className='input' type='text' name='apellido' placeholder='Apellido' required value={formData.apellido} onChange={handleChange} />
          <input className='input' type='email' name='email' placeholder='Correo electrónico' required value={formData.email} onChange={handleChange} />
        </div>
        <div className='form__right'>
          <textarea className='textarea' name='mensaje' placeholder='Escribe tu mensaje' rows='8' required value={formData.mensaje} onChange={handleChange}></textarea>
        </div>
        <div className='form__footer'>
          <button className='button' type='submit'>Enviar</button>
        </div>
      </form>
    </section>
  );
}
