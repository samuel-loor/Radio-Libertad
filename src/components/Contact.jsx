import '../assets/css/contact.css';
import { Element } from 'react-scroll';

export function Contact() {
  return (
    <Element name='contact' className='contact__section'>
      <div className='contact__header'>
        <h1 className='contact__title'>Información de Contacto</h1>
        <h2 className='contact__subtitle'>Sandra Espinel Zambrano</h2>
        <div className='contact__role'>Representante</div>
      </div>

      <div className='contact__list' id='contact__list'>
        <div className='contact__item'>
          <div className='icon__container'>
            <svg className='icon' viewBox='0 0 24 24'>
              <path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
            </svg>
          </div>
          <div className='contact__info'>
            <div className='contact__label'>Cabina</div>
            <a
              href='https://api.whatsapp.com/send?phone=593993499990'
              className='contact__value'
              rel='noopener noreferrer'
              target='__blank'
            >
              099 349 9990
            </a>
          </div>
        </div>

        <div className='contact__item'>
          <div className='icon__container'>
            <svg className='icon' viewBox='0 0 24 24'>
              <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
            </svg>
          </div>
          <div className='contact__info'>
            <div className='contact__label'>Email</div>
            <a
              href='mailto:radiolibertad740@hotmail.com'
              rel='noopener noreferrer'
              className='contact__value'
            >
              radiolibertad740@hotmail.com
            </a>
          </div>
        </div>

        <div className='contact__item'>
          <div className='icon__container'>
            <svg className='icon' viewBox='0 0 24 24'>
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
            </svg>
          </div>
          <div className='contact__info'>
            <div className='contact__label'>Dirección</div>
            <a
              href='https://g.co/kgs/ZvXQtMK'
              rel='noopener noreferrer'
              target='__blank'
              className='contact__value'
            >
              Washington 203 y Atahualpa | Chone - Manabí
            </a>
          </div>
        </div>

        <div className='contact__item'>
          <div className='icon__container'>
            <svg className='icon' viewBox='0 0 24 24'>
              <path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
            </svg>
          </div>
          <div className='contact__info'>
            <div className='contact__label'>Gerencia</div>
            <div className='contact__value'>
              <p className='contact__value'>099 769 7184</p>
              <p className='contact__value'>05 269 5411</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
