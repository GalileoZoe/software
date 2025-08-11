import React, { useState, useEffect } from 'react';
import { useFeed } from '../../context/FeedContext';
import { FaPhone, FaFacebook, FaWhatsapp, FaComment, FaEnvelope, FaCode, FaLaptop } from 'react-icons/fa';

export const Feed: React.FC = () => {
  const { changeFeed } = useFeed();
  const [textIndex, setTextIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);


  const icons = [
    <FaCode className='icon' />,
    <FaLaptop className='icon' />,
    <FaPhone className='icon' />,
    <FaComment className='icon' />,
    <FaWhatsapp className='icon' />,
    <FaFacebook className='icon' />,
    <FaEnvelope className='icon' />,

  ];

  const logos = [
    <img style={{'width':'8rem', 'height':'5em'}} src={require('../../assets/logotipo-000.png')} alt='Logo Tierra Prometida' />,
    <img style={{'width':'8rem', 'height':'5em'}} src={require('../../assets/gzgzgz.png')} alt='Logo GalileoZoe' />,
    <img style={{'width':'8rem', 'height':'5em'}} src={require('../../assets/logokaspasbg.png')} alt='Logo Kaspas' />,
    <img style={{'width':'8rem', 'height':'5em'}} src={require('../../assets/strawberry.png')} alt='Logo Strawberry' />,
    <img style={{'width':'5em', 'height':'1em'}} src={require('../../assets/GALIXGAMES.png')} alt='Logo Galix' />,
  ]


  const texts = [
    <code className="paragraphs">IA</code>,
    <code className="paragraphs">Software</code>,
    <code className="paragraphs">Bases de Datos</code>,
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

    require('../../assets/bg-24.png'),
    require('../../assets/bg-20.png'),
    require('../../assets/city.png'),
    require('../../assets/game.png'),
    // require('../../assets/vga.png'),

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
      setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [logos.length]);

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
      id='feed'
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
        // onScroll={ () => changeFeed(2)}
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
         <a style={{fontSize:'25px'}} onClick={()=>changeFeed(3)}>
          {texts[textIndex]}
        </a>
        <div className='marginVertical'></div>

        <a onClick={()=>changeFeed(2)}>
        <img
          className='logotype'
          src={require('../../assets/galileozoe-00.png')}
          alt='Logo Galileo Zoe'
        />
        </a>
       <br />

         <a onClick={()=>changeFeed(6)}>
        <code className='paragraphs'>Ing. Galileo Zoe Romero Gaytán</code>
        </a>
        <a onClick={()=>changeFeed(3)}>
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

        {/* < img
          style={{ 
            width: '20%',
            height: 'auto',
            zIndex: 1,
          }}
          src={require('../../assets/GalixxxBG.png')}
          alt='Logo Galileo Zoe'
        /> */}

        <div style={{
          backgroundColor:'white',
          borderRadius:'50%',
          width:'5em',
          height:'5em',
          alignSelf:'center',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
           {logos[logoIndex]}

        </div>

           </a>
        {navigator.userAgent.toLowerCase().includes('mobi') && <> <br/> <br/> <br /> </>}
        <a onClick={()=>changeFeed(6)}>
          <img
            className='logo'
            src={require('../../assets/gzgz.png')}
            alt='Logo Galileo Zoe'
          />
           </a>

          <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(5)}>
            {icons[iconIndex]}
          </a>
          <br />
          <a onClick={()=>changeFeed(5)} className={'button'}>Contacto</a>
        </div>

        </div>
      </div>
    </section>
  );
};
