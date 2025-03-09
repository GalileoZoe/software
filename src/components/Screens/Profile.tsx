import React, { useState, useEffect } from 'react';
import { useFeed } from '../../context/FeedContext';
import { FaPhone, FaFacebook, FaWhatsapp, FaComment, FaEnvelope } from 'react-icons/fa';

export const Profile: React.FC = () => {
  const { changeFeed } = useFeed();

  const [iconIndex, setIconIndex] = useState(0);

  const icons = [
    <FaPhone className='icon' />,
    <FaComment className='icon' />,
    <FaWhatsapp className='icon' />,
    <FaFacebook className='icon' />,
    <FaEnvelope className='icon' />,
  ];

  const bgImages = [

    // require('../../assets/bg-19.png'),
    // require('../../assets/bg-13.png'),
    // require('../../assets/bg-12.png'),
    // require('../../assets/bg-00.png'),
    // require('../../assets/bg-10.png'),
    require('../../assets/bg-11.png'),
    // require('../../assets/bg-15.png'),

  ];

  const [bgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <section
    onScroll={ () => changeFeed(1)}
    className='section'
    style={{
      position: 'relative',
      backgroundImage: `url(${bgImages[bgIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw', // 100% del ancho de la ventana
      height: '100vh', // 100% del alto de la ventana
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Alinea el texto horizontalmente
      backgroundColor: 'whitesmoke',
    }}
  >



    <div
    onScroll={ () => changeFeed(1)}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.93)',
        zIndex: 1,
      }}
    />

    <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className='title fade-in-element' style={{ color: 'transparent' }} >
          Desarrollo de Software | Galileo Zoe
        </h1>

        <div className='marginvertical'></div>



        <img
          className='logotype'
          src={require('../../assets/galileozoe-blue.png')}
          alt='Logo Galileo Zoe'
        />
        <br />
        <img
          className='image'
          src={require('../../assets/gz.png')}
          alt='Logo Galileo Zoe'
        />
        <p className='text fade-in-element'>Galileo Zoe Romero Gaytán</p>

        <div className='center fade-in-element'>
      

          <h2 className='paragraph' style={{ color: '#fff' }}>Ingeniero en Desarrollo de Software, programador Full Stack y C.E.O. de Galix {'\n'}
             (StartUp de Tecnologías de la Información y Desarrollo de Aplicaciones Multiplataforma) </h2>

          <img
            className='logo'
            src={require('../../assets/GZX10000.png')}
            alt='Logo Galileo Zoe'
          />
               <a href='https://wa.me/527298906600' className={'button'}>Curriculum</a>
               <a href='https://wa.me/527298906600' className={'button'}>Contacto</a>
               <a href='https://wa.me/527298906600' className={'button'}>WhatsApp</a>
        </div>
        <div className='marginvertical'></div>
      </div>
    </section>
  );
};
