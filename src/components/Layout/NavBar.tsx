import React, { useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';


export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const { theme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className={'navbartransparent'}>
      <div className='navbarlogo'>
        <a onClick={() => changeFeed(1)} >
          <img
            src={require('../../assets/galileozoe-blue.png')}
            alt='Logo'
          />
        </a>
      </div>
      <button className='hamburger' onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <ul className={`navbaritems ${theme === 1 ? '' : 'navbaritemswhite'} ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a
              className={'navbaritem'}
            style={feed === 1 ? { color:'white'} : undefined}
              onClick={() => {
                changeFeed(1);
                setMenuOpen(false);
              }}
            >
              Inicio
            </a>
          </li>
       
        <li>
          <a
            className={'navbaritem'}
            style={feed === 2 ? { color:'white'} : undefined}
            onClick={() => {
              changeFeed(2);
              setMenuOpen(false);
            }}
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            className={'navbaritem'}
            style={feed === 3 ? { color:'white'} : undefined}
            onClick={() => {
              changeFeed(3);
              setMenuOpen(false);
            }}
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            className={'navbaritem'}
            style={feed === 4 ? { color:'white'} : undefined}
            onClick={() => {
              changeFeed(4);
              setMenuOpen(false);
            }}
          >
            Tecnologías
          </a>
        </li>
        <li>
          <a
            className={'navbaritem'}
            style={feed === 5 ? { color:'white'} : undefined}
            onClick={() => {
              changeFeed(5);
              setMenuOpen(false);
            }}
          >
            Contacto
          </a>
        </li>
        <li>
          <a
            className={'navbaritem'}
            style={feed === 6 ? { color:'white'} : undefined}
            onClick={() => {
              changeFeed(6);
              setMenuOpen(false);
            }}
          >
          Sobre Mí
          </a>
        </li>
        <li>
          <a
            className={'navbaritem'}
            style={feed === 11 ? { color:'white'} : undefined}
            onClick={() => {
              changeFeed(11);
              setMenuOpen(false);
            }}
          >
            Ayuda
          </a>
        </li>
      </ul>
    </nav>
  );
};
