import React, { useState, useEffect } from 'react';
import { useFeed } from '../../context/FeedContext';
import { FaPhone, FaFacebook, FaWhatsapp, FaComment, FaEnvelope } from 'react-icons/fa';

export const Feed: React.FC = () => {
  const { changeFeed } = useFeed();
  const [textIndex, setTextIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);

  const icons = [
    <FaPhone className='icon' />,
    <FaComment className='icon' />,
    <FaWhatsapp className='icon' />,
    <FaFacebook className='icon' />,
    <FaEnvelope className='icon' />,
  ];

  const texts = [
    <code className="paragraphs">IA</code>,
    <code className="paragraphs">Software</code>,
    <code className="paragraphs">Aplicaciones Móviles</code>,
    <code className="paragraphs">Videojuegos</code>,
    <code className="paragraphs">Hardware</code>,
    <code className="paragraphs">Sistemas Operativos</code>,
    <code className="paragraphs">API´S</code>,

  ];

  const bgImages = [

    // require('../../assets/bg-19.png'),
    // require('../../assets/bg-11.png'),
    require('../../assets/bg-13.png'),
    require('../../assets/bg-12.png'),
    require('../../assets/bg-00.png'),
    require('../../assets/bg-10.png'),

  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length, bgImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      onScroll={window.innerWidth > 700 ? () => changeFeed(6) : undefined}
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
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(7, 7, 7, 0.95)',

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

        <div>
          {texts[textIndex]}
        </div>


        <p className='text fade-in-element'>'Creando el Futuro'</p>

        <div className='center fade-in-element'>
          <img
            className='logo'
            src={require('../../assets/GZX10000.png')}
            alt='Logo Galileo Zoe'
          />

          <h2 className='paragraph' >Programando Sueños. Creando el futuro.</h2>



          <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(5)}>
            {icons[iconIndex]}

            <p className={'button'}>Contacto</p>
          </a>
        </div>


        <div className='marginvertical'></div>
      </div>
    </section>
  );
};
