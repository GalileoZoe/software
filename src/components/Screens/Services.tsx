import React, { useEffect,  useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaCloud, FaCode,  FaComment, FaDatabase,  FaEnvelope,  FaFacebook, FaGamepad, FaGlobe,  FaHeart, FaImages, FaLaptopCode, FaMobile,FaPhone, FaProjectDiagram, FaRobot, FaServer, FaThumbsUp, FaUsers, FaVideo, FaWhatsapp, FaWifi } from 'react-icons/fa';
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
          description='Desarrollo de Sistemas de Software Adaptados a las necesidades específicas de tu negocio.
           Implementación de sistemas robustos acccesiebles agilicen los procesos y aumenten el alcance de tu organización. .'
          // button='Más Información'
        />;
        case 2:
          return <Window
            tittle='Base de Datos'
            description='Diseño de Bases de Datos adaptadas a las necesidades de tu organización. Permi un acceder y gestionar seguros,Sin Perder Dtos ni Exponer Información ni procesoso confidenciales de tu empresa .'
            // button='Más Información'
          />;
          case 3:
            return <Window
              tittle='API´S'
              description='Desarrollo de APIs RESTful a medida y sistemas Back-End escalables que garantizan el acceso seguro y eficiente a la(s) bases(s) de datos, facilitando la integración segura entre aplicaciones.'
    
              // button='Más Información'
            />;
      case 4:
        return <Window
          tittle='Aplicaciones Móviles'
          description='Implementación de aplicaciones móviles para la gestion y manejo de procesos como venta, transporte, producción, envíos, etc.'
          // button='Más Información'
        />;
      case 5:
        return <Window
          tittle='Sitios Web'
          description='Immplementación de tu sitio web personalizado, permitiendo facilitar y monoitorear los procesos de tu empresa, optimizando tu trabajo y mejorando la experiencia del cliente.'
          // button='Más Información'
        />;
      case 6:
        return <Window
          tittle='Mantenimiento'
          description='Mantenimiento preventivo y correctivo de sistemas de cómputo (hardware y software).'
        />;
      case 7:
        return <Window
          tittle='Seguridad'
          description='Sistemas de seguridad y monitoreo avanzado. Automatización de procesos de seguridad.'
          // button='Más Información'
        />;
      case 8:
        return <Window
          tittle='Internet de las Cosas'
          description='Implementación de sistemas automatizados y dispositivos inteligentes, (robótica y domótica).'
          // button='Más Información'
        />;
      case 9:
        return <Window
          tittle='Videojuegos'
          description='Desarrollo e implentación de videojuegos, animación, ambientación, doblaje, audio, sonido, etc'
          // button='Más Información'
        />
      case 10:
        return <Window
          tittle='Deploy'
          description='Despliegue y configuración de aplicaciones en entornos de producción. Configuración de servidores y optimización de procesos de despliegue para garantizar la disponibilidad y escalabilidad de tus sistemas.'
          // button='Más Información'
        />
      case 11:
        return <Window
          tittle='Dirección de Proyectos'
          description='Gestión integral de proyectos tecnológicos: planificación, seguimiento y control de recursos, tiempos y presupuestos. Implementación de metodologías ágiles y tradicionales para garantizar la entrega exitosa de proyectos de desarrollo de software.'
          // button='Más Información'
        />
      case 12:
        return <Window
          tittle='Diseño Gráfico'
          description='Maquetado de recursos de marca (paleta de colores, logotipos, make up, vieos, imágenes, etc) personalizadodos'
          // button='Más Información'
        />
      case 13:
        return <Window
          tittle='Redes Digitales'
          description='Diseño e implementación de infraestructuras de red seguras y escalables. Configuración de sistemas de monitoreo y protección contra amenazas digitales, garantizando la continuidad operativa de tu organización.'
          // button='Más Información'
        />
      case 14:
        return <Window
          tittle='Marketing Digital'
          description='Estrategias de marketing digital personalizadas que maximizan tu presencia online. Análisis de mercado, campañas publicitarias y métricas de rendimiento para optimizar tu alcance y conversiones.'
          // button='Más Información'
        />
      case 15:
        return <Window
          tittle='Redes Sociales'
          description='Gestión profesional de redes sociales: creación de contenido, programación de publicaciones, interacción con audiencia y análisis de métricas para potenciar tu marca en plataformas digitales.'
          // button='Más Información'
        />
      case 16:
        return <Window
          tittle='Servicios en la nube'
          description='Implementación de soluciones en la nube para almacenamiento, procesamiento y gestión de datos. Migración segura de sistemas y optimización de recursos tecnológicos en entornos cloud.'
          // button='Más Información'
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
    require('../../assets/bg-13.png'),
  ];

  // Estado para manejar el índice de imagen de fondo
  const [bgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length, bgImages.length]);



  return (

    <section
    className='section'
    onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(4) : undefined}
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
    }}>

    <div
      onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(4) : undefined}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100vh',
            height: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.93)',
            zIndex: 1, // Mantiene la capa detrás del contenido
        }}
    >

        
      <h1 className='title fade-in-element' style={{color:'transparent'}} >
       Servicios | Desarrollo de Software | Galileo Zoe
        </h1>

          <div>
        <p className='text'>Servicios</p>
        <img className='img' src={require('../../assets/galileozoe-blue.png')} />
        </div>
        <p className='paragraph'>Desarrollo de Software Multiplataforma</p>


        <div className='marginvertical'></div>


        {service===0 ? 
        
        <div>
          <ul className='slider' onScroll={()=>changeFeed(4)}>
          <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Software Personalizado | Software Customizado | Software Hecho a Medida' onClick={() => changeService(1)}>
              <FaCode />
              <p>Software {'\n'} Personalizado</p>
            </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Bases de Datos' onClick={() => changeService(2)}>
              <FaDatabase />
              <p>Base de Datos</p>
            </li>
              <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='API´s RestFull ' onClick={() => changeService(3)}>
              <FaProjectDiagram />
              <p>API´s</p>
            </li>
          <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Aplicaciones Móviles' onClick={() => changeService(4)}>
              <FaMobile />
              <p>APPS</p>
            </li>
   
          <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Páginas Web | Sitios Web | Aplicaciones Web ' onClick={() => changeService(5)}>
              <FaGlobe />
              <p>Sitios Web</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Mantenimiento Preventivo y Correctivo de Software y Hardware' onClick={() => changeService(6)}>
              <FaLaptopCode />
              <p>Mantenimiento</p>
            </li>

            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Instalación de Sistemas de Monitoreo y Seguridad.' onClick={() => changeService(7)}>
              <FaVideo />
              <p>Seguridad</p>
            </li>
            
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='IoT | Internet de las Cosas' onClick={() => changeService(8)}>
              <FaRobot />
              <p>IOT</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Diseño, Desarrollo, Implementación y Mantenimiento de Videojuegos' onClick={() => changeService(9)}>
              <FaGamepad />
              <p>VideoJuegos</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Despliegue y Mantenimiento de Aplicaciones Back-End y Front-End' onClick={() => changeService(10)}>
              <FaServer />
              <p>Deploy</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Diseño y Dirección de Proyectos.' onClick={() => changeService(11)}>
              <FaUsers />
              <p>Dirección {'\n'}
                de Proyectos</p>
            </li>
          </ul>
          <ul className='slider' onScroll={()=>changeFeed(4)}>
          <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Diseño Gráfico | Recursos de Marca | Publicidad' onClick={() => changeService(12)}>
              <FaImages />
              <p>Diseño{'\n'} Gráfico</p>
            </li>
           
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Ciberseguridad | Infrestructura de Redes | Integración de Sistemas de Red' onClick={() => changeService(13)}>
            <FaWifi />
              <p>Redes {'\n'} Digitales</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Marketing Dígital | Publicidad | Difusión | Redes Sociales' onClick={() => changeService(14)}>
              <FaHeart />
              <p>Marketing {'\n'} Dígital</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Redes Sociales | Communnity Managger' onClick={() => changeService(15)}>
              <FaThumbsUp />
              <p>Redes {'\n'} Sociales</p>
            </li>
            <li className='item fade-in-element' onScroll={()=>changeFeed(4)} title='Gestión de Servicios en la Nube' onClick={() => changeService(16)}>
              <FaCloud />
              <p>Servicios {'\n'}en la Nube</p>
            </li>
          </ul>
        </div> :
          <div>

            <Services />
          </div>}

      </div>

    </section>
  )
}