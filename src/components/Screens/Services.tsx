import React, { useEffect,  useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaCloud, FaCode,  FaComment, FaDatabase,  FaEnvelope,  FaFacebook, FaGamepad, FaGlobe,  FaHeart, FaImages, FaLaptopCode, FaMobile,FaPhone, FaProjectDiagram, FaRobot, FaServer, FaThumbsUp, FaUsers, FaVideo, FaWhatsapp, FaWifi, FaArrowLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Window } from '../Components/Window';
import { useService } from '../../context/ServiceContext';

export const Services = () => {

  const { changeFeed } = useFeed();
  const { theme } = useTheme();
  const { service, changeService } = useService();


  const renderServiceWindow = () => {
    switch (service) {
      case 1:
        return <Window
          tittle='Software personalizado'
          description='Desarrollo de Sistemas de Software Adaptados a las necesidades específicas de tu negocio.
           Implementación de sistemas robustos y acccesiebles agilicen los procesos y aumenten el alcance de tu organización. .'
          // button='Más Información'
        />;
        case 2:
          return <Window
            tittle='Base de Datos'
            description='Diseño de Bases de Datos adaptadas a las necesidades de tu organización. Permitiendo acceder y gestionar información de manera segura,
             sin perder registros ni exponer información ni procesos confidenciales de tu empresa .'
            // button='Más Información'
          />;
          case 3:
            return <Window
              tittle='API´S'
              description='Desarrollo de APIs RESTful a medida y sistemas Back-End escalables que garantizan el acceso seguro y eficiente a la(s) base(s) de datos,
               facilitando la integración segura entre aplicaciones.'
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
          description='Immplementación de tu sitio web personalizado, permitiendo facilitar y monitorear los procesos de tu empresa,
           optimizando tu trabajo y mejorando la experiencia del cliente.'
          // button='Más Información'
        />;
      case 6:
        return <Window
          tittle='Mantenimiento'
          description='Mantenimiento preventivo y correctivo de sistemas de hardware y software.'
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
          description='Implementación de sistemas automatizados y dispositivos inteligentes, robótica y domótica.'
          // button='Más Información'
        />;
      case 9:
        return <Window
          tittle='Videojuegos'
          description='Desarrollo e implentación de videojuegos, animación, ambientación, doblaje, audio, sonido, efectos visuales, etc.'
          // button='Más Información'
        />
      case 10:
        return <Window
          tittle='Deploy'
          description='Despliegue y configuración de aplicaciones en entornos de producción. Configuración de servidores y
           optimización de procesos de despliegue para garantizar la disponibilidad y escalabilidad de tus sistemas.'
          // button='Más Información'
        />
      case 11:
        return <Window
          tittle='Dirección de Proyectos'
          description='Gestión integral de proyectos: planificación, seguimiento y control de recursos, tiempos y presupuestos.
           Implementación de metodologías ágiles y tradicionales para garantizar la entrega exitosa de proyectos.'
          // button='Más Información'
        />
      case 12:
        return <Window
          tittle='Diseño Gráfico'
          description='Maquetado de recursos de marca (paleta de colores, logotipos, make up, videos, imágenes, anuncios etc) personalizadodos'
          // button='Más Información'
        />
      case 13:
        return <Window
          tittle='Redes Digitales'
          description='Diseño e implementación de infraestructuras de red seguras y escalables. 
          Configuración de sistemas de monitoreo y protección contra amenazas digitales, garantizando la continuidad operativa de tu organización.'
          // button='Más Información'
        />
      case 14:
        return <Window
          tittle='Marketing Digital'
          description='Estrategias de marketing digital personalizadas que maximizan tu presencia online. 
          Análisis de mercado, campañas publicitarias y métricas de rendimiento para optimizar tu alcance y conversiones.'
          // button='Más Información'
        />
      case 15:
        return <Window
          tittle='Redes Sociales'
          description='Gestión profesional de redes sociales: creación de contenido, programación de publicaciones, interacción con audiencia y
           análisis de métricas para potenciar tu marca en plataformas digitales.'
          // button='Más Información'
        />
      case 16:
        return <Window
          tittle='Servicios en la nube'
          description='Implementación de soluciones en la nube para almacenamiento, procesamiento y gestión de datos.
           Migración segura de sistemas y optimización de recursos tecnológicos en entornos cloud.'
          // button='Más Información'
        />
      default:
        return null;
    }
  };


  // Estado para manejar el icono actual
  const [iconIndex, setIconIndex] = useState(0);
  // Estado para el carrusel de servicios
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

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

  // Array de servicios para el carrusel
  const servicesData = [
    { icon: <FaCode />, title: 'Software Personalizado', desc: 'Software Customizado | Software Hecho a Medida', service: 1, details: 'Desarrollo de Sistemas de Software Adaptados a las necesidades específicas de tu negocio.' },
    { icon: <FaDatabase />, title: 'Base de Datos', desc: 'Bases de Datos', service: 2, details: 'Diseño de Bases de Datos adaptadas a las necesidades de tu organización.' },
    { icon: <FaProjectDiagram />, title: 'API´s', desc: 'API´s RestFull', service: 3, details: 'Desarrollo de APIs RESTful a medida y sistemas Back-End escalables.' },
    { icon: <FaMobile />, title: 'APPS', desc: 'Aplicaciones Móviles', service: 4, details: 'Implementación de aplicaciones móviles para la gestión y manejo de procesos.' },
    { icon: <FaGlobe />, title: 'Sitios Web', desc: 'Páginas Web | Sitios Web | Aplicaciones Web', service: 5, details: 'Implementación de tu sitio web personalizado, optimizando tu trabajo.' },
    { icon: <FaLaptopCode />, title: 'Mantenimiento', desc: 'Mantenimiento Preventivo y Correctivo de Software y Hardware', service: 6, details: 'Mantenimiento preventivo y correctivo de sistemas de hardware y software.' },
    { icon: <FaVideo />, title: 'Seguridad', desc: 'Instalación de Sistemas de Monitoreo y Seguridad', service: 7, details: 'Sistemas de seguridad y monitoreo avanzado. Automatización de procesos.' },
    { icon: <FaRobot />, title: 'IOT', desc: 'IoT | Internet de las Cosas', service: 8, details: 'Implementación de sistemas automatizados y dispositivos inteligentes.' },
    { icon: <FaGamepad />, title: 'VideoJuegos', desc: 'Diseño, Desarrollo, Implementación y Mantenimiento de Videojuegos', service: 9, details: 'Desarrollo e implementación de videojuegos, animación, ambientación.' },
    { icon: <FaServer />, title: 'Deploy', desc: 'Despliegue y Mantenimiento de Aplicaciones Back-End y Front-End', service: 10, details: 'Despliegue y configuración de aplicaciones en entornos de producción.' },
    { icon: <FaImages />, title: 'Diseño Gráfico', desc: 'Diseño Gráfico | Recursos de Marca | Publicidad', service: 12, details: 'Maquetado de recursos de marca personalizados.' },
    { icon: <FaWifi />, title: 'Redes Digitales', desc: 'Ciberseguridad | Infraestructura de Redes | Integración de Sistemas de Red', service: 13, details: 'Diseño e implementación de infraestructuras de red seguras y escalables.' },
    { icon: <FaHeart />, title: 'Marketing Digital', desc: 'Marketing Digital | Publicidad | Difusión | Redes Sociales', service: 14, details: 'Estrategias de marketing digital personalizadas que maximizan tu presencia online.' },
    { icon: <FaThumbsUp />, title: 'Redes Sociales', desc: 'Redes Sociales | Community Manager', service: 15, details: 'Gestión profesional de redes sociales: creación de contenido, programación.' },
    { icon: <FaUsers />, title: 'Dirección de Proyectos', desc: 'Diseño y Dirección de Proyectos', service: 11, details: 'Gestión integral de proyectos: planificación, seguimiento y control de recursos.' },
    { icon: <FaCloud />, title: 'Servicios en la Nube', desc: 'Gestión de Servicios en la Nube', service: 16, details: 'Implementación de soluciones en la nube para almacenamiento y procesamiento.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);

  // useEffect para el carrusel automático
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(carouselInterval);
  }, [servicesData.length]);


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
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
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




        {service===0 ? 
        
        <div>
          {/* Carrusel de servicios */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            // padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Contenedor principal del carrusel */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              position: 'relative'
            }}>
              {/* Botón anterior */}
               <button
                 onClick={() => setCurrentServiceIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length)}
                 style={{
                   position: 'absolute',
                   left: '20px',
                   top: '50%',
                   transform: 'translateY(-50%)',
                   background: 'rgba(255,255,255,0.1)',
                   border: 'none',
                   borderRadius: '50%',
                   width: '50px',
                   height: '50px',
                   color: 'white',
                   fontSize: '1.2rem',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   backdropFilter: 'blur(10px)',
                   zIndex: 4,
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.background = 'rgba(0,123,255,0.8)';
                   e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                   e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                 }}
               >
                 <FaChevronLeft />
               </button>

               {/* Botón siguiente */}
               <button
                 onClick={() => setCurrentServiceIndex((prev) => (prev + 1) % servicesData.length)}
                 style={{
                   position: 'absolute',
                   right: '20px',
                   top: '50%',
                   transform: 'translateY(-50%)',
                   background: 'rgba(255,255,255,0.1)',
                   border: 'none',
                   borderRadius: '50%',
                   width: '50px',
                   height: '50px',
                   color: 'white',
                   fontSize: '1.2rem',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   backdropFilter: 'blur(10px)',
                   zIndex: 4,
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.background = 'rgba(0,123,255,0.8)';
                   e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                   e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                 }}
               >
                 <FaChevronRight />
               </button>

               {/* Card principal (centro) */}
               <div
                 onClick={() => changeService(servicesData[currentServiceIndex].service)}
                 style={{
                   background: 'rgba(255,255,255,0.1)',
                   borderRadius: '18px',
                   padding: '2rem 1.5rem',
                   textAlign: 'center',
                   cursor: 'pointer',
                   transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                   backdropFilter: 'blur(20px)',
                   boxShadow: '0 15px 45px rgba(255,255,255,0.2)',
                   transform: 'scale(1.05)',
                   zIndex: 3,
                   width: '280px',
                   minHeight: '250px',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   animation: 'slideInCenter 0.8s ease-out'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.1) translateY(-8px)';
                   e.currentTarget.style.boxShadow = '0 25px 60px rgba(255, 255, 255, 0.3)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05) translateY(0)';
                   e.currentTarget.style.boxShadow = '0 15px 45px rgba(255,255,255,0.2)';
                 }}
               >
                 <div style={{
                   fontSize: '3rem',
                   color: '#007bff',
                   marginBottom: '1rem',
                   filter: 'drop-shadow(0 4px 8px rgba(0,123,255,0.5))',
                   animation: 'iconPulse 2s ease-in-out infinite'
                 }}>
                   {servicesData[currentServiceIndex].icon}
                 </div>
                 <h3 style={{
                   color: '#fff',
                   fontSize: '1.2rem',
                   fontWeight: 'bold',
                   margin: '0 0 0.8rem 0',
                   textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                 }}>
                   {servicesData[currentServiceIndex].title}
                 </h3>
                 <p style={{
                   color: 'rgba(255,255,255,0.9)',
                   fontSize: '0.9rem',
                   lineHeight: '1.5',
                   margin: '0 0 1rem 0',
                   textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                 }}>
                   {servicesData[currentServiceIndex].details}
                 </p>
                 <div style={{
                   display: 'flex',
                   justifyContent: 'center',
                   gap: '0.2rem',
                   marginBottom: '0.5rem'
                 }}>
                   {[...Array(5)].map((_, i) => (
                     <FaStar key={i} style={{ 
                       color: '#ffd700', 
                       fontSize: '0.8rem',
                       filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.5))'
                     }} />
                   ))}
                 </div>
               </div>

              {/* Cards laterales (vista previa) */}
              {/* Card izquierda */}
               <div style={{
                 position: 'absolute',
                 left: '12%',
                 background: 'rgba(255,255,255,0.05)',
                 borderRadius: '12px',
                 padding: '1.5rem 1rem',
                 textAlign: 'center',
                 backdropFilter: 'blur(10px)',
                 boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                 transform: 'scale(0.75) translateX(-15px)',
                 opacity: 0.6,
                 zIndex: 1,
                 width: '200px',
                 transition: 'all 0.8s ease'
               }}>
                 <div style={{
                   fontSize: '2rem',
                   color: 'rgba(255,255,255,0.7)',
                   marginBottom: '0.8rem'
                 }}>
                   {servicesData[(currentServiceIndex - 1 + servicesData.length) % servicesData.length].icon}
                 </div>
                 <h4 style={{
                   color: 'rgba(255,255,255,0.8)',
                   fontSize: '0.9rem',
                   margin: '0'
                 }}>
                   {servicesData[(currentServiceIndex - 1 + servicesData.length) % servicesData.length].title}
                 </h4>
               </div>

               {/* Card derecha */}
               <div style={{
                 position: 'absolute',
                 right: '12%',
                 background: 'rgba(255,255,255,0.05)',
                 borderRadius: '12px',
                 padding: '1.5rem 1rem',
                 textAlign: 'center',
                 backdropFilter: 'blur(10px)',
                 boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                 transform: 'scale(0.75) translateX(15px)',
                 opacity: 0.6,
                 zIndex: 1,
                 width: '200px',
                 transition: 'all 0.8s ease'
               }}>
                 <div style={{
                   fontSize: '2rem',
                   color: 'rgba(255,255,255,0.7)',
                   marginBottom: '0.8rem'
                 }}>
                   {servicesData[(currentServiceIndex + 1) % servicesData.length].icon}
                 </div>
                 <h4 style={{
                   color: 'rgba(255,255,255,0.8)',
                   fontSize: '0.9rem',
                   margin: '0'
                 }}>
                   {servicesData[(currentServiceIndex + 1) % servicesData.length].title}
                 </h4>
               </div>
            </div>

            {/* Indicadores de progreso */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}>
              {servicesData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  style={{
                    width: index === currentServiceIndex ? '30px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: index === currentServiceIndex ? '#007bff' : 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: index === currentServiceIndex ? '0 0 10px rgba(0,123,255,0.5)' : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Estilos CSS en línea para animaciones */}
          <style>{`
            @keyframes slideInCenter {
               from {
                 opacity: 0;
                 transform: scale(0.8) translateY(40px);
               }
               to {
                 opacity: 1;
                 transform: scale(1.05) translateY(0);
               }
             }
            
            @keyframes iconPulse {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
            }
          `}</style>
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
            {renderServiceWindow()}
          </div>}

      </div>

    </section>
  )
}