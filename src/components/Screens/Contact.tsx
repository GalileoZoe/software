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
   
      // require('../../assets/bg-06.png'),
      // require('../../assets/bg-07.png'),
      // require('../../assets/bg-08.png'),
      // require('../../assets/bg-09.png'),
      // require('../../assets/bg-13.png'),
      require('../../assets/bg-00.png'),
      // require('../../assets/bg-10.png'),
      
    ];
  
    // Estado para manejar el índice de imagen de fondo
    const [bgIndex, setBgIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length); // Cambia el fondo de imagen
      });
  
      // Cleanup al desmontar el componente
      return () => clearInterval(interval);
    }, [icons.length, bgImages.length]);
  


  return (

    <section     
    className='section'
    onScroll={window.innerWidth > 700 ? () => changeFeed(5) : undefined}
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
      onScroll={()=>changeFeed(3)}
             style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              minHeight:'100%',
              height: 'auto',
              backgroundColor: 'rgba(7, 7, 7, 0.8)', // Capa oscura con opacidad
              zIndex: 1, // Mantiene la capa detrás del contenido
            }}
      >

      <h1 className='title fade-in-element' style={{color:'transparent'}} onScroll={()=>changeFeed(5)}>
       Contacto | Desarrollo de Software | Galileo  Zoe
        </h1>

        <p className={'text'}>Contacto</p>

   
        <div className='item'>
        <img className='img' src={require('../../assets/galileozoe-02.png')} onScroll={()=>changeFeed(5)} />
        {/* <p>24 horas</p> */}
      </div>

      <div className='marginvertical'></div>
      <div className='marginvertical'></div>



        <ul className='slider' onScroll={()=>changeFeed(5)}>

          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='Llamada' >
            <a className='item' href='tel:7298906600'><FaPhone size={25} /><p>Teléfono</p></a>
            
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='Mensaje' >
          <a className='item' href='sms:527298906600'> <FaComment size={25} /> <p>Mensaje</p></a> 
           
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='Correo Electrónico' >
           <a className='item' href='mailto:al222210067@gmail.com'><FaEnvelope size={25} /> <p>Correo Electrónico</p></a> 
           
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='WhatsApp' >
           <a className='item' href='https://wa.me/527298906600'> <FaWhatsapp size={25} /><p>WhatsApp</p></a>
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='Facebook' >
           <a className='item' href='https://www.facebook.com/profile.php?id=61565903937768'> <FaFacebook size={25} /><p>FaceBook</p></a>
            
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='TikTok' >
            <a className='item' ><FaTiktok size={25} /> <p>TikTok</p></a>
           
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='Ubicación' >
           <a className='item' href='https://maps.app.goo.gl/qg6mNeMVLKEW3vDY7'> <FaMapPin size={25} /><p>Ubicación</p></a>
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(5)} title='Software' >
            <a className='item' href='https://galileozoe.github.io/software'> <FaGlobe size={25} /><p>SITIO WEB</p></a>
          </li>
        </ul>

        <div className='marginvertical'></div>

    
        <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)} onScroll={()=>changeFeed(5)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contacto</p>
        </a>

            <div className='marginvertical'></div>

            <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)} onScroll={()=>changeFeed(5)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contacto</p>
        </a>

   
      </div>

    </section>
  )
}






