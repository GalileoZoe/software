import React, { useState, useEffect } from 'react';
import { useFeed } from '../../context/FeedContext';
import { FaPhone, FaFacebook, FaWhatsapp, FaComment, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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
    require('../../assets/bg-15.png'),
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
    id='profile'
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
    // onScroll={ () => changeFeed(1)}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
         backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 1,
        backgroundSize: 'cover',
      }}
    />

    <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className='title fade-in-element' style={{ color: 'transparent' }} >
          Desarrollo de Software | Galileo Zoe
        </h1>
        <p className={'text'}>Acerca de mí</p>

        <img
          className='logotype'
          src={require('../../assets/galileozoe-00.png')}
          alt='Logo Galileo Zoe'
        />


        <br />
        <>
        <img
          className='image'
          src={require('../../assets/gz.png')}
          alt='Logo Galileo Zoe'
        />
        <p className='text fade-in-element'>Galileo Zoe Romero Gaytán</p>
        <div className='center fade-in-element'>
          <h2 className='paragraph' style={{ color: '#fff' }}>Ingeniero en Desarrollo de Software Multiplataforma, programador Full Stack y C.E.O. de Galix.</h2>

          <img
            className='logo'
            src={require('../../assets/gzgz.png')}
            alt='Logo Galileo Zoe'
          />
   <div className="button-row">
  <a onClick={()=>changeFeed(8)} className="button" style={{cursor: 'pointer'}}>Curriculum</a>
  <a href="https://wa.me/527224995219" className="button">Contacto</a>
  <a href="https://wa.me/527224995219" className="button">WhatsApp</a>
</div>

        </div>
        </>
        {/* <>
               
            <a onClick={()=>changeFeed(8)}>
            <FaFileAlt 
              style={{ 
                fontSize: '3rem', 
                color: '#fff', 
                marginBottom: '15px',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }} 
            />
            Mostrar CV
            </a>
         

          <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.3em' }}>
            Ingeniero en Desarrollo de Software Multiplataforma
          </h3>
          
          <p style={{ color: '#ccc', marginBottom: '20px', lineHeight: '1.6' }}>
            Programador Full Stack y C.E.O. de Galix. Especializado en desarrollo web, 
            aplicaciones móviles y soluciones tecnológicas innovadoras.
          </p>
   
            
          <iframe
            src={require('../../assets/GalileoZoe .pdf')}
            width="700px"
            height="950px"
            style={{
              border: 'none',
              borderRadius: '15px'
            }}
            title="CV Galileo Zoe Romero Gaytán"
            name="cvFrame"
            loading="lazy"
          />
        
        </> */}
        
        <div className='marginvertical'></div>
      </div>
    </section>
  );
};
