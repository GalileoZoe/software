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
    <code className="paragraphs">Tecnología</code>,
    <code className="paragraphs">Redes Sociales</code>,
    <code className="paragraphs">Aplicaciones Móviles</code>,
    <code className="paragraphs">Diseño Gráfico</code>,
    <code className="paragraphs">Publicidad</code>,
    <code className="paragraphs">Programación</code>,
    <code className="paragraphs">Marketing</code>,
    <code className="paragraphs">Videojuegos</code>,
    <code className="paragraphs">Sistemas Operativos</code>,
    <code className="paragraphs">API´S</code>,
    <code className="paragraphs">Hardware</code>,
    <code className="paragraphs">Mantenimiento</code>,
    <code className="paragraphs">Automatización</code>,
    <code className="paragraphs">IoT</code>,
    <code className="paragraphs">Seguridad</code>,
    <code className="paragraphs">Desarrollo Web</code>,
    <code className="paragraphs">Servidores</code>,


  ];

  const bgImages = [

    require('../../assets/bg-13.png'),
    require('../../assets/bg-12.png'),
    require('../../assets/bg-00.png'),
    require('../../assets/bg-10.png'),

  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    },3000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [bgImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      
      className='section'
      onScroll={ () => changeFeed(2) }
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
        overflow: 'auto', // Ensure scrolling is enabled
      }}
    >



      <div
            onScroll={ () => changeFeed(2)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }} >
     <div >
        <h1 className='title fade-in-element' style={{ color: 'transparent' }} >
          Desarrollo de Software | Galileo Zoe
        </h1>
        <a onClick={()=>changeFeed(2)}>
        <img
          className='logotype'
          src={require('../../assets/galileozoe-00.png')}
          alt='Logo Galileo Zoe'
        />
                <p className='paragraphs'>Tecnología e Innovación</p>
                </a>
    
        <div>
        
        <a onClick={()=>changeFeed(7)}>
        < img
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '10%',
            height: 'auto',
            marginLeft: '600px',
            zIndex: 1,
          }}
          src={require('../../assets/GalixxxBG.png')}
          alt='Logo Galileo Zoe'
        />
     
        < img
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            marginLeft: '600px',
            zIndex: 1,
          }}
          src={require('../../assets/GalixxxBG.png')}
          alt='Logo Galileo Zoe'
        />
           </a>
        </div>

        <div className='center fade-in-element'>
        <a onClick={()=>changeFeed(7)}>

        < img
          style={{
     
      
            width: '20%',
            height: 'auto',
            zIndex: 1,
          }}
          src={require('../../assets/GalixxxBG.png')}
          alt='Logo Galileo Zoe'
        />
           </a>

        <a onClick={()=>changeFeed(6)}>
          <img
            className='logo'
            src={require('../../assets/gzgz.png')}
            alt='Logo Galileo Zoe'
          />
           </a>

        <a onClick={()=>changeFeed(3)}>
          {texts[textIndex]}
        </a>

          <br />
          <br />

          {/* <h2 className='paragraphwhite' >Creando Sueños. Programando el futuro.</h2> */}
          <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(5)}>
            {icons[iconIndex]}
          </a>
          <a onClick={()=>changeFeed(5)} className={'button'}>Contacto</a>
        </div>

        </div>
      </div>
    </section>
  );
};
