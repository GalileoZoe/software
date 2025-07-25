import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import {  FaCode,  FaComment,  FaEnvelope, FaFacebook,  FaGlobe,  FaMapPin,FaPhone,  FaTiktok, FaWhatsapp } from 'react-icons/fa';

export const Contact = () => {

  const { feed, changeFeed } = useFeed();
  const { theme, changeTheme } = useTheme();

  // Estado para manejar el icono actual
  const [iconIndex, setIconIndex] = useState(0);

  // Array de íconos
  const icons = [
    <FaPhone className='icon' />,
    <FaComment className='icon' />,
    <FaWhatsapp className='icon' />,
    <FaFacebook className='icon' />,
    <FaEnvelope className='icon' />,
    // <FaTiktok className='icon' />,
    // <FaCode className='icon' />,
  ];

    // Arreglo de imágenes de fondo
    const bgImages = [
      require('../../assets/bg-00.png'),
    ];
  
    // Estado para manejar el índice de imagen de fondo
    const [bgIndex] = useState(0);
  
 
    useEffect(() => {
      const interval = setInterval(() => {
          setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
      }, 3000);

      // Cleanup al desmontar el componente
      return () => clearInterval(interval);
    }, [icons.length]);
  


  return (

    <section     
    className='section'
    onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(11) : undefined}
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
              minHeight:'100%',
              height: 'auto',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',

              zIndex: 1, // Mantiene la capa detrás del contenido
            }}
      >

      <h1 className='title fade-in-element' style={{color:'transparent'}} onScroll={()=>changeFeed(11)}>
       Contacto | Desarrollo de Software | Galileo  Zoe
        </h1>

        <p className={'text'}>Contacto</p>

   
        <div className='item'>
        <img className='img' src={require('../../assets/galileozoe-00.png')} onScroll={()=>changeFeed(11)} />
      </div>
      <p className='paragraph'>Desarrollo de Software Multiplataforma</p>


      <div className='marginvertical'></div>
      <div className='marginvertical'></div>



        <ul className='slider' onScroll={()=>changeFeed(11)}>

          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Llamada' >
            <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='tel:7224995219'><FaPhone size={25} /><p>Teléfono</p></a>
            
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Mensaje' >
          <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='sms:527224995219'> <FaComment size={25} /> <p>Mensaje</p></a> 
           
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Correo Electrónico' >
           <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='mailto:al222210067@gmail.com'><FaEnvelope size={25} /> <p>Correo Electrónico</p></a> 
           
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='WhatsApp' >
           <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='https://wa.me/527224995219'> <FaWhatsapp size={25} /><p>WhatsApp</p></a>
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Facebook' >
           <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/galileozoe'> <FaFacebook size={25} /><p>FaceBook</p></a>
            
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='TikTok' >
            <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/@galileozoe'><FaTiktok size={25} /> <p>TikTok</p></a>
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Ubicación' >
           <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='https://maps.app.goo.gl/BbAamPhpYbJFzwyJ8'> <FaMapPin size={25} /><p>Ubicación</p></a>
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Software' >
            <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='https://galileozoe.github.io/software'> <FaGlobe size={25} /><p>Sitio Web</p></a>
          </li>
        </ul>

        {/* <div className='marginvertical'></div> */}

    
        <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)} onScroll={()=>changeFeed(11)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contacto</p>
        </a>
        <div className="marginvertical"></div>
      </div>

    </section>
  )
}






