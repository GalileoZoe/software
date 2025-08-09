import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaHome, FaInfoCircle, FaCog, FaCode, FaProjectDiagram, FaEnvelope, FaUser, FaFileAlt } from 'react-icons/fa';

export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const { theme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || navigator.userAgent.toLowerCase().includes('mobi'));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items base
  const baseMenuItems = [
    { id: 1, label: 'Inicio', icon: <FaHome />, show: feed !== 1 },
    { id: 2, label: 'Nosotros', icon: <FaInfoCircle />, show: true },
    { id: 3, label: 'Servicios', icon: <FaCog />, show: true },
    { id: 4, label: 'Tecnologías', icon: <FaCode />, show: true },
    { id: 7, label: 'Proyectos', icon: <FaProjectDiagram />, show: true },
    { id: 5, label: 'Contacto', icon: <FaEnvelope />, show: true },
    { id: 6, label: 'Perfil', icon: <FaUser />, show: true }
  ];

  // En móvil, añadimos el ítem "CV" con icono y feed 8
  const menuItems = isMobile
    ? [...baseMenuItems, { id: 8, label: 'CV', icon: <FaFileAlt />, show: true }]
    : baseMenuItems;

  return (
    <>
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
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className={`navbaritems ${theme === 1 ? '' : 'navbaritemswhite'}`}>
            {menuItems.map(item => (
              item.show && (
                <li key={item.id}>
                  <a
                    className={feed === item.id ? 'navbaritemselected' : 'navbaritem'}
                    onClick={() => changeFeed(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            ))}
          </ul>
        )}
      </nav>

      {/* Mobile Drawer */}
      {isMobile && (
        <>
          {/* Overlay */}
          {isMenuOpen && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 998,
                transition: 'opacity 0.3s ease'
              }}
              onClick={() => setMenuOpen(false)}
            />
          )}
          
          {/* Drawer */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: isMenuOpen ? 0 : '-300px',
              width: '280px',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              transition: 'left 0.3s ease',
              padding: '20px 0',
              boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)'
            }}
            onClick={() => setMenuOpen(false)}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px 30px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div>
                  <div className="marginvertical"></div>
                  <img
                    src={require('../../assets/gzgz.png')}
                    alt='Logo'
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Canva-style Tab */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
              }}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '80px',
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)',
                zIndex: 1000
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.9)';
                e.currentTarget.style.transform = 'translateY(-50%) translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                e.currentTarget.style.transform = 'translateY(-50%) translateX(0px)';
              }}
            >
              <div style={{
                width: '3px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '2px',
                margin: '0 2px'
              }} />
              <div style={{
                width: '3px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '2px',
                margin: '0 2px'
              }} />
            </div>

            {/* Menu Items */}
            <div style={{ padding: '20px 0' }}>
              {menuItems.map(item => (
                item.show && (
                  <div
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeFeed(item.id);
                      setMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '15px 20px',
                      color: feed === item.id ? '#007bff' : 'white',
                      backgroundColor: feed === item.id ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderLeft: feed === item.id ? '4px solid #007bff' : '4px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (feed !== item.id) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (feed !== item.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span style={{ fontSize: '16px', fontWeight: '500' }}>{item.label}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
