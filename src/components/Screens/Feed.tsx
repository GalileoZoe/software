import React, { useState, useEffect } from 'react';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaPhone, FaFacebook, FaWhatsapp, FaComment, FaEnvelope } from 'react-icons/fa';

export const Feed: React.FC = () => {
  const { changeFeed } = useFeed();
  const { theme } = useTheme();

  // Estado para manejar el icono actual
  const [iconIndex, setIconIndex] = useState(0);

  // Array de íconos
  const icons = [
    <FaPhone className='icon' />,
    <FaComment className='icon' />,
    <FaWhatsapp className='icon' />,
    <FaFacebook className='icon' />,
    <FaEnvelope className='icon' />,
  ];

  // Arreglo de imágenes de fondo
  const bgImages = [
   

    // require('../../assets/bg-03.png'),
    require('../../assets/bg-08.png'),
    require('../../assets/bg-13.png'),
    require('../../assets/bg-00.png'),
    require('../../assets/bg-10.png'),
   


  ];

  // Estado para manejar el índice de imagen de fondo
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length); // Cambia el fondo de imagen
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length, bgImages.length]);

  return (
    <section
      onScroll={()=>changeFeed(2)}
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
        backgroundColor:'whitesmoke',
      }}
    >
      


      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(7, 7, 7, 0.7)', // Capa oscura con opacidad
          zIndex: 1, // Mantiene la capa detrás del contenido
        }}
      />

      {/* Contenido principal */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className='title fade-in-element' style={{color:'transparent'}} >
         Desarrollo de Software | Galileo Zoe 
        </h1>

        <div className='marginvertical'></div>


     
          <img
            className='logotype'
            src={require('../../assets/galileozoe-02.png')}
            alt='Logo Galileo Zoe'
          />


          {/* <p className='item fade-in-element'>24 horas</p> */}

          <p className='text fade-in-element'>'Creando el Futuro'</p>

          <div className='center fade-in-element'>
            <img
              className='logo'
              src={require('../../assets/gz-00.png')}
              alt='Logo Galileo Zoe'
            />

            <h2 className='paragraph' style={{ color: '#fff' }}>Programando Sueños. Creando el futuro.</h2>

        <div className='marginvertical'></div>


            <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)}>
              {icons[iconIndex]}

              <p className={'button'}>Contacto</p>
            </a>
          </div>
      

        <div className='marginvertical'></div>
      </div>
    </section>
  );
};
