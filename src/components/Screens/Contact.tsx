import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import {  FaCode,  FaComment,  FaEnvelope, FaFacebook,  FaGlobe,  FaInstagram,  FaMapPin,FaPhone,  FaTiktok, FaWhatsapp } from 'react-icons/fa';

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
      require('../../assets/phones.png'),
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
    id='contact'
    className='section'
    // onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(11) : undefined}
    style={{
      position: 'relative',
      backgroundImage: `url(${bgImages[bgIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>

      <div
             style={{
              width: '100%',
              height:'100%',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',

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


<ul
  {...(!navigator.userAgent.toLowerCase().includes('mobi')
    ? { className: 'slider' }
    : {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(4, auto)',
          gap: '1rem', 
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          padding: '1rem',


        },
      })}
  onScroll={() => changeFeed(11)}
>

          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Llamada' >
            <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='tel:7224995219'><FaPhone size={25} /><p>Teléfono</p></a>
            
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Mensaje' >
          <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='sms:527224995219'> <FaComment size={25} /> <p>Mensaje</p></a> 
           
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Correo Electrónico' >
           <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='mailto:al222210067@gmail.com'><FaEnvelope size={25} /> <p>CORREO</p></a> 
           
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
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Instagram' >

           <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" href='https://maps.app.goo.gl/BbAamPhpYbJFzwyJ8'> <FaInstagram size={25} /><p>Instagram</p></a>
          </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(11)} title='Software' >
            <a className='item fade-in-element' target="_blank" rel="noopener noreferrer" onClick={()=>changeFeed(1)}> <FaGlobe size={25} /><p>Sitio Web</p></a>

          </li>
        </ul>
        <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)} onScroll={()=>changeFeed(11)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contacto</p>
        </a>
        <div className="marginvertical"></div>
      </div>

    </section>
  )
}






