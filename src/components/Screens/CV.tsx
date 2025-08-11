import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import {  FaArrowLeft, FaCode,  FaComment,  FaEnvelope, FaFacebook,  FaFileAlt,  FaGlobe,  FaMapPin,FaPhone,  FaTiktok, FaWhatsapp, FaExpand, FaDownload } from 'react-icons/fa';

export const CV = () => {

  const { changeFeed } = useFeed();
  const { theme } = useTheme();
  const [show, setShow]=useState(false);

  const showCV =()=>{
    setShow(!show);
  }

  const [iconIndex, setIconIndex] = useState(0);

  const icons = [
    <FaPhone className='icon' />,
    <FaComment className='icon' />,
    <FaWhatsapp className='icon' />,
    <FaFacebook className='icon' />,
    <FaEnvelope className='icon' />,
    <FaTiktok className='icon' />,
    <FaCode className='icon' />,
  ];

    const bgImages = [
      require('../../assets/etherneth.png'),
    ];

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
    id='cv'    
    className='section'
    // onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(11) : undefined}
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

      {!show?
      <>
      <h1 className='title fade-in-element' style={{color:'transparent'}} onScroll={()=>changeFeed(11)}>
       Contacto | Desarrollo de Software | Galileo  Zoe
        </h1>

        <p className={'text'}>Curriculum Vitae</p>

   
        <div className='item'>
        <img className='img' src={require('../../assets/galileozoe-00.png')} onScroll={()=>changeFeed(11)} />
      </div>
      <p className='paragraph'>Desarrollo de Software Multiplataforma</p>
      
        <div
          className='fade-in-element'
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '20px'
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <a onClick={showCV}>
            <FaFileAlt 
              style={{ 
                fontSize: '3rem', 
                color: '#fff', 
                marginBottom: '15px',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }} 
            />
            </a>
          </div>

          <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.3em' }}>
            Ingeniero en Desarrollo de Software Multiplataforma
          </h3>
          
          <p style={{ color: '#ccc', marginBottom: '20px', lineHeight: '1.6' }}>
            Programador Full Stack y C.E.O. de Galix. Especializado en desarrollo web, 
            aplicaciones móviles y soluciones tecnológicas innovadoras.
          </p>
        </div>
          </>
            :
            <>
             <div className="marginVertical"></div>
          
          {/* Botones de control */}
          <div className='fade-in-element' style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => changeFeed(6)}
              className='button'
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <FaArrowLeft /> Volver
            </button>
            
            {/* <button
               onClick={() => {
                 const iframe = document.querySelector('iframe[name="cvFrame"]') as HTMLIFrameElement;
                 if (iframe) {
                   // Cambiar el src para zoom 100% antes de pantalla completa
                   iframe.src = require('../../assets/GalileoZoe .pdf') + '#zoom=100';
                   if (iframe.requestFullscreen) {
                     iframe.requestFullscreen();
                   }
                 }
               }}
              className='button'
              style={{
                background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <FaExpand /> Pantalla Completa
            </button>
             */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = require('../../assets/GalileoZoe .pdf');
                link.download = 'CV_Galileo_Zoe_Romero_Gaytan.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className='button'
              style={{
                background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                border: 'none',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <FaDownload /> Descargar CV
            </button>
          </div>
          
          <iframe
            src={require('../../assets/GalileoZoe .pdf')}
            width="350px"
            height="500px"
            style={{
              border: 'none',
              borderRadius: '15px'
            }}
            title="CV Galileo Zoe Romero Gaytán"
            name="cvFrame"
            loading="lazy"
          />
        
        <div className='fade-in-element'>
          <p style={{ color: '#888', fontSize: '0.9em' }}>
            Última actualización: 14 de Julio 2025
          </p>
            </div>
            </>
           }
        <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)} onScroll={()=>changeFeed(11)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contacto</p>
        </a>
        <div className="marginvertical"></div>
      </div>

          
    </section>
  )
}










