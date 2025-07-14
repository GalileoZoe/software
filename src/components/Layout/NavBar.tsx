import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';


export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const { theme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={'navbartransparent'} style={{
      backgroundColor: 'transparent',
      transition: 'background-color 0.3s ease'
    }}>
      <div className='navbarlogo'>
        <a onClick={() => changeFeed(1)} >
          <img
            src={require('../../assets/galileozoe-00.png')}
            alt='Logo'
          />
        </a>
      </div>
      <button className='hamburger' onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <ul className={`navbaritems ${theme === 1 ? '' : 'navbaritemswhite'} ${isMenuOpen ? 'show' : ''}`}>
         {feed!==1&&
          <li>
            <a
              className={feed===1?'navbaritemselected':'navbaritem'}
              onClick={() => {
                changeFeed(1);
                setMenuOpen(false);
              }}
            >
              Inicio
            </a>
          </li>
          }
       
        <li>
          <a
            className={feed===2?'navbaritemselected':'navbaritem'}
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
            className={feed===3?'navbaritemselected':'navbaritem'}
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
            className={feed===4?'navbaritemselected':'navbaritem'}
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
            className={feed===7?'navbaritemselected':'navbaritem'}
            onClick={() => {
              changeFeed(7);
              setMenuOpen(false);
            }}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            className={feed===5?'navbaritemselected':'navbaritem'}
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
            className={feed===6?'navbaritemselected':'navbaritem'}
            onClick={() => {
              changeFeed(6);
              setMenuOpen(false);
            }}
          >
          Sobre Mí
          </a>
        </li>
        {/* <li>
          <a
            className={feed===11?'navbaritemselected':'navbaritem'}

            onClick={() => {
              changeFeed(11);
              setMenuOpen(false);
            }}
          >
            Ayuda
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
