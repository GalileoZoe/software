import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useTheme } from '../../context/ThemeContext';
import { FaMap, FaMapPin } from 'react-icons/fa';
import { useFeed } from '../../context/FeedContext';

export const Location: React.FC = () => {
  const { changeFeed } = useFeed();
  const { theme } = useTheme();


  const [iconIndex, setIconIndex] = useState(0);

  const icons = [

    <FaMap className='icon' />,
    <FaMapPin className='icon' />,

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);


  const bgImages = [
    require('../../assets/bg-16.png'),
  ];

  // Estado para manejar el índice de imagen de fondo
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
    id='location'
    className='section'
    onScroll={window.innerWidth > 700 ? () => changeFeed(11) : undefined}
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
    }}>
    <div
           style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.93)',
            // Capa oscura con opacidad
            zIndex: 1, // Mantiene la capa detrás del contenido
          }}
    >

      
<h1 className='title fade-in-element' style={{color:'transparent'}} >
       Ubicación | Desarrollo de Software | Galileo Zoe
        </h1>



      <div className="fade-in-element">    
          <p className='text'>Ubicación</p>
        <img className='img' src={require('../../assets/galileozoe-02.png')} />    
        {/* <p className='item'>24 horas</p> */}
        </div>
     

      <div className='map-container fade-in-element'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240873.71713212508!2d-99.78011261328123!3d19.384222700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20b79f8c954f7%3A0xedc9d49fc5269ee2!2sCentro%20de%20rehabilitaci%C3%B3n%20%22Tierra%20Prometida%22!5e0!3m2!1ses-419!2smx!4v1723536707709!5m2!1ses-419!2smx'
          className='map fade-in-element'
        ></iframe>
      </div>

      <div>
        <p className='titlewhite fade-in-element'>Avenida Libertad S/N, Colonia Álvaro Obregón, Lerma, México. 52010 .</p>
      </div>
      <a className='icon fade-in-element' title='Ubicación' href='https://maps.app.goo.gl/qg6mNeMVLKEW3vDY7'>
        {icons[iconIndex]}
        <p className={`fade-in-element ${theme===0?'button':'buttonblack'}`}>Como Llegar</p>
      </a>
      <div className='marginvertical'></div>
      <a className='icon fade-in-element' title='Ubicación' href='https://maps.app.goo.gl/qg6mNeMVLKEW3vDY7'>
        {icons[iconIndex]}
        <p className={`fade-in-element ${theme===0?'button':'buttonblack'}`}>Como Llegar</p>
      </a>
    </div>
    </section>
  );
};
