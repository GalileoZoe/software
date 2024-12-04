import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaAppleAlt, FaBroadcastTower, FaCloud, FaCode, FaCog, FaComment, FaDatabase, FaDeskpro, FaDesktop, FaEnvelope, FaExchangeAlt, FaFacebook, FaFutbol, FaGamepad, FaGlobe, FaHandshake, FaHeart, FaIgloo, FaImage, FaImages, FaLaptopCode, FaMobile, FaMobileAlt, FaMusic, FaNetworkWired, FaPaintBrush, FaPeopleArrows, FaPeopleCarry, FaPhone, FaProjectDiagram, FaRobot, FaServer, FaThumbsUp, FaUser, FaUserFriends, FaUserMd, FaUsers, FaVideo, FaWhatsapp, FaWifi } from 'react-icons/fa';
import { Window } from '../Components/Window';
import { useService } from '../../context/ServiceContext';

export const Services = () => {

  const { changeFeed } = useFeed();
  const { theme } = useTheme();
  const { service, changeService } = useService();


  const Services = () => {
    switch (service) {
      case 1:
        return <Window
          tittle='Software personalizado'
          description='Desarrollo de Sistemas de Software Adaptados a las necesidades específicas de tu negocio u organización.
           Implementación de sistemas robustos acccesiebles agilicen los procesos  .'
          button='Más Información'
        />;
      case 2:
        return <Window
          tittle='Aplicaciones Móviles'
          description='de aplicaciones móviles para la gestion y manejo de procesoscomo venta, transporte, producción, etc.'
          button='Más Información'
        />;
      case 3:
        return <Window
          tittle='Sitios Web'
          description='Immplementación de páginas web personalizadas que permitan gestionar los procesos de tu empresa y conectar con tus clientes'
          button='Más Información'
        />;
      case 4:
        return <Window
          tittle='API´S'
          description='Despliegue de API´S RestFull y Applicaciones Back-End escalables  que permiten el acceso seguro y eficiente a la Base de Dtos  '
          button='Más Información'
        />;
      case 5:
        return <Window
          tittle='Desintoxicación'
          description='Temazcal, Activación Física, Sesiones de Psicología,  Juntas de Recuperación y una Dieta Saludable para desintoxicar el cuerpo, el alma y la mente.'
          button='Más Información'
        />;
      case 6:
        return <Window
          tittle='Desarrollo Humano'
          description='Se impulsa a los usuarios a alcanzar su máximo potencial, cultivando una personalidad feliz y libre de adicciones mediante el desarrollo de hábitos saludables y una mentalidad positiva.'
          button='Más Información'
        />;
      case 7:
        return <Window
          tittle='Activación Física'
          description='Favorece a la salud física y mental, al proceso de desintoxicación y la creación de habitos saludables.'
          button='Más Información'
        />;
      case 8:
        return <Window
          tittle='ArteTerapia'
          description='Fomentamos actividades artisticas para estimular la creatividad y la expresión asertiva de emociones .'
          button='Más Información'
        />;
      case 9:
        return <Window
          tittle='Eventos Culturales'
          description='
Organizamos sesiones de arte, pintura, música en vivo y excursiones para fomentar el desarrollo de una personalidad libre de adicciones y promover el aprecio por la cultura y el arte. Recibimos visitas de artistas, conferencistas y profesionales que comparten su experiencia con el fin de impartir formas de recreación saludables'
          button='Más Información'
        />
      default:
        return null;
    }
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);


   // Arreglo de imágenes de fondo
   const bgImages = [
    require('../../assets/bg-01.png'),
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
      className='section'
      onScroll={()=>changeFeed(4)}
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
          backgroundColor: 'rgba(7, 7, 7, 0.8)', // Capa oscura con opacidad
          zIndex: 1, // Mantiene la capa detrás del contenido
        }}
      >

        
      <h1 className='title fade-in-element' style={{color:'transparent'}} >
       Servicios | Desarrollo de Software | Galileo Zoe
        </h1>

          <div className="fade-in-element">
        <p className='text'>Servicios</p>
        <img className='img' src={require('../../assets/galileozoe-02.png')} />
        {/* <p className='item'>24 horas</p> */}
        </div>

        <div className='marginVertical'></div>


        {service===0 ? <div>
          <ul className='slider'>
          <li className='item fade-in-element' title='Software Personalizado | Software Customizado | Software Hecho a Medida' onClick={() => changeService(1)}>
              <FaCode />
              <p>Software {'\n'} Personalizado</p>
            </li>
          <li className='item fade-in-element' title='Bases de Datos' onClick={() => changeService(2)}>
              <FaDatabase />
              <p>Base de Datos</p>
            </li>
              <li className='item fade-in-element' title='API´s RestFull ' onClick={() => changeService(4)}>
              <FaProjectDiagram />
              <p>API´s</p>
            </li>
          <li className='item fade-in-element' title='Aplicaciones Móviles' onClick={() => changeService(2)}>
              <FaMobile />
              <p>APPS</p>
            </li>
   
          <li className='item fade-in-element' title='Aplicaciones Web | Páginas Web | Sitios Web' onClick={() => changeService(3)}>
              <FaGlobe />
              <p>Sitios Web</p>
            </li>
            <li className='item fade-in-element' title='Mantenimiento Preventivo y Correctivo de Software y Hardware' onClick={() => changeService(7)}>
              <FaLaptopCode />
              <p>Mantenimiento</p>
            </li>
         
          
            <li className='item fade-in-element' title='Instalaci´´on de Sistemas de Monitoreo y Seguridad.' onClick={() => changeService(8)}>
              <FaVideo />
              <p>Seguridad</p>
            </li>
            <li className='item fade-in-element' title='IoT | Internet de las Cosas' onClick={() => changeService(5)}>
              <FaRobot />
              <p>IOT</p>
            </li>
       
            <li className='item fade-in-element' title='Diseño, Desarrollo, Implementación y Mantenimiento de Videojuegos' onClick={() => changeService(9)}>
              <FaGamepad />
              <p>VideoJuegos</p>
            </li>
            <li className='item fade-in-element' title='Despliegue y Mantenimiento de Aplicaciones Back-End y Front-End' onClick={() => changeService(10)}>
              <FaServer />
              <p>Deploy</p>
            </li>
            <li className='item fade-in-element' title='Diseño y Dirección de Proyectos.' onClick={() => changeService(15)}>
              <FaUsers />
              <p>Dirección {'\n'}
                de Proyectos</p>
            </li>
         
            <li className='item fade-in-element' title='Diseño Gráfico | Recursos de Marca | Publicidad' onClick={() => changeService(6)}>
              <FaImages />
              <p>Diseño{'\n'} Gráfico</p>
            </li>
           
            <li className='item fade-in-element' title='Ciberseguridad | Infrestructura de Redes | Integración de Sistemas de Red' onClick={() => changeService(11)}>
            <FaWifi />
              <p>Redes {'\n'} Digitales</p>
            </li>
            <li className='item fade-in-element' title='Marketing Dígital | Publicidad | Difusión | Redes Sociales' onClick={() => changeService(12)}>
              <FaHeart />
              <p>Marketing {'\n'} Dígital</p>
            </li>
            <li className='item fade-in-element' title='Redes Sociales | Communnity Managger' onClick={() => changeService(12)}>
              <FaThumbsUp />
              <p>Redes {'\n'} Sociales</p>
            </li>
            <li className='item fade-in-element' title='Gestión de Servicios en la Nube' onClick={() => changeService(14)}>
              <FaCloud />
              <p>Servicios {'\n'}en la Nube</p>
            </li>
        
        
          </ul>
        </div> :
          <div>

            <Services />
          </div>}

        <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)}>
          {icons[iconIndex]}
          <p className={'button'}>Contacto</p>
        </a>

            <div className='marginvertical'></div>

            <a className=' fade-in-element' title='Contacto' onClick={() => changeFeed(6)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contacto</p>
        </a>

      </div>

    </section>
  )
}