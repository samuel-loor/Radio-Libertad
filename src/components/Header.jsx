import '../assets/css/Header.css';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export function Header({ onOpenReport }) {
  Header.propTypes = {
    onOpenReport: PropTypes.func.isRequired,
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='header__content'>
        <button className='header__button' onClick={toggleMenu}>
          <svg
            className='svg'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
          </svg>
        </button>
        <nav className={`header__menu ${menuOpen ? 'active' : ''}`}>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <a id='#'>Escucha en vivo</a>
            </li>
            <li className='header__menu-item'>
              <a onClick={onOpenReport}>Rendición de cuentas</a>
            </li>
            <li className='header__menu-item'>
              <a
                href='/src/assets/document/codigo-etica-2024.pdf'
                target='__blank'
                rel='noopener noreferrer'
              >
                Código de Ética
              </a>
            </li>
            <li className='header__menu-item'>
              <a href='#'>Contáctanos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
