import React, { useEffect,  useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaCloud, FaCode,  FaComment, FaDatabase,  FaEnvelope,  FaFacebook, FaGamepad, FaGlobe,  FaHeart, FaImages, FaLaptopCode, FaMobile,FaPhone, FaProjectDiagram, FaRobot, FaServer, FaThumbsUp, FaUsers, FaVideo, FaWhatsapp, FaWifi, FaArrowLeft, FaStar } from 'react-icons/fa';
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
    // onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(4) : undefined}
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
            zIndex: 1,
        }}
    >

        
      <h1 className='title fade-in-element' style={{color:'transparent'}} >
       Servicios | Desarrollo de Software | Galileo Zoe
        </h1>

          <div>
        <p className='text'>Servicios</p>
        <img className='img' src={require('../../assets/galileozoe-00.png')} />
        </div>
        <p className='paragraph'>Desarrollo de Software Multiplataforma</p>


        {/* <div className='marginvertical'></div> */}


        {service===0 ? 
        
        <div>
          {/* Grid de servicios mejorado */}
          <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              padding: '1rem',
              marginBottom: '1rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
            {/* Fila 1 */}
            {[
              { icon: <FaCode />, title: 'Software Personalizado', desc: 'Software Customizado | Software Hecho a Medida', service: 1 },
              { icon: <FaDatabase />, title: 'Base de Datos', desc: 'Bases de Datos', service: 2 },
              { icon: <FaProjectDiagram />, title: 'API´s', desc: 'API´s RestFull', service: 3 },
              { icon: <FaMobile />, title: 'APPS', desc: 'Aplicaciones Móviles', service: 4 },
              { icon: <FaGlobe />, title: 'Sitios Web', desc: 'Páginas Web | Sitios Web | Aplicaciones Web', service: 5 },
              { icon: <FaLaptopCode />, title: 'Mantenimiento', desc: 'Mantenimiento Preventivo y Correctivo de Software y Hardware', service: 6 },
              { icon: <FaVideo />, title: 'Seguridad', desc: 'Instalación de Sistemas de Monitoreo y Seguridad', service: 7 },
              { icon: <FaRobot />, title: 'IOT', desc: 'IoT | Internet de las Cosas', service: 8 },
              { icon: <FaGamepad />, title: 'VideoJuegos', desc: 'Diseño, Desarrollo, Implementación y Mantenimiento de Videojuegos', service: 9 },
              { icon: <FaServer />, title: 'Deploy', desc: 'Despliegue y Mantenimiento de Aplicaciones Back-End y Front-End', service: 10 },
              { icon: <FaImages />, title: 'Diseño Gráfico', desc: 'Diseño Gráfico | Recursos de Marca | Publicidad', service: 12 },
              { icon: <FaWifi />, title: 'Redes Digitales', desc: 'Ciberseguridad | Infraestructura de Redes | Integración de Sistemas de Red', service: 13 },
              { icon: <FaHeart />, title: 'Marketing Digital', desc: 'Marketing Digital | Publicidad | Difusión | Redes Sociales', service: 14 },
              { icon: <FaThumbsUp />, title: 'Redes Sociales', desc: 'Redes Sociales | Community Manager', service: 15 },
              { icon: <FaUsers />, title: 'Dirección de Proyectos', desc: 'Diseño y Dirección de Proyectos', service: 11 },
              { icon: <FaCloud />, title: 'Servicios en la Nube', desc: 'Gestión de Servicios en la Nube', service: 16 }
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => changeService(item.service)}
                title={item.desc}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transform: 'translateY(0)',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  color: 'white',
                  marginBottom: '0.8rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '0',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                  whiteSpace: 'pre-line'
                }}>
                  {item.title}
                </h3>
                <div style={{
                  marginTop: '0.8rem',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.3rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ color: '#ffd700', fontSize: '0.7rem' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> :
          <div style={{
            position: 'relative'
          }}>
            {/* Botón de regreso */}
            <button
              onClick={() => changeService(0)}
              style={{
                position: 'relative',
                margin: '20px auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: '15px',
                padding: '12px 24px',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <FaArrowLeft /> Volver
            </button>
            <Services />
          </div>}

      </div>

    </section>
  )
}