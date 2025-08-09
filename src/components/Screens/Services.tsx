import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import {
  FaCloud, FaCode, FaComment, FaDatabase, FaEnvelope, FaFacebook, FaGamepad,
  FaGlobe, FaHeart, FaImages, FaLaptopCode, FaMobile, FaPhone, FaProjectDiagram,
  FaRobot, FaServer, FaThumbsUp, FaUsers, FaVideo, FaWhatsapp, FaWifi, FaArrowLeft,
  FaLaptop, FaBullhorn
} from 'react-icons/fa';
import { Window } from '../Components/Window';
import { useService } from '../../context/ServiceContext';

export const Services = () => {
  const { changeFeed } = useFeed();
  const { theme } = useTheme();
  const { service, changeService } = useService();

  // Definición de servicios en un array para escalabilidad
  const servicesData = [
    { service: 1, icon: <FaCode />, title: 'Software', desc: 'Software Customizado | Software Hecho a Medida', details: 'Desarrollo de Sistemas de Software Adaptados a las necesidades específicas de tu negocio.' },
    { service: 2, icon: <FaDatabase />, title: 'Base de Datos', desc: 'Bases de Datos', details: 'Diseño de Bases de Datos adaptadas a las necesidades de tu organización.' },
    { service: 3, icon: <FaProjectDiagram />, title: 'API´s', desc: 'API´s RestFull', details: 'Desarrollo de APIs RESTful a medida y sistemas Back-End escalables.' },
    { service: 4, icon: <FaMobile />, title: 'APPS', desc: 'Aplicaciones Móviles', details: 'Implementación de aplicaciones móviles para la gestión y manejo de procesos.' },
    { service: 5, icon: <FaGlobe />, title: 'Sitios Web', desc: 'Páginas Web | Sitios Web | Aplicaciones Web', details: 'Implementación de tu sitio web personalizado, optimizando tu trabajo.' },
    { service: 6, icon: <FaLaptopCode />, title: 'Mantenimiento', desc: 'Mantenimiento Preventivo y Correctivo de Software y Hardware', details: 'Mantenimiento preventivo y correctivo de sistemas de hardware y software.' },
    { service: 7, icon: <FaVideo />, title: 'Seguridad', desc: 'Instalación de Sistemas de Monitoreo y Seguridad', details: 'Sistemas de seguridad y monitoreo avanzado. Automatización de procesos.' },
    { service: 8, icon: <FaRobot />, title: 'IOT', desc: 'IoT | Internet de las Cosas', details: 'Implementación de sistemas automatizados y dispositivos inteligentes.' },
    { service: 9, icon: <FaGamepad />, title: 'VideoJuegos', desc: 'Diseño, Desarrollo, Implementación y Mantenimiento de Videojuegos', details: 'Desarrollo e implementación de videojuegos, animación, ambientación.' },
    { service: 10, icon: <FaServer />, title: 'Servidores', desc: 'Despliegue y Mantenimiento de Aplicaciones Back-End y Front-End', details: 'Despliegue y configuración de aplicaciones en entornos de producción.' },
    { service: 11, icon: <FaUsers />, title: 'Dirección de Proyectos', desc: 'Diseño y Dirección de Proyectos', details: 'Gestión integral de proyectos: planificación, seguimiento y control de recursos.' },
    { service: 12, icon: <FaImages />, title: 'Diseño Gráfico', desc: 'Diseño Gráfico | Recursos de Marca | Publicidad', details: 'Maquetado de recursos de marca personalizados.' },
    { service: 13, icon: <FaWifi />, title: 'Redes Digitales', desc: 'Ciberseguridad | Infraestructura de Redes | Integración de Sistemas de Red', details: 'Diseño e implementación de infraestructuras de red seguras y escalables.' },
    { service: 14, icon: <FaHeart />, title: 'Marketing Digital', desc: 'Marketing Digital | Publicidad | Difusión | Redes Sociales', details: 'Estrategias de marketing digital personalizadas que maximizan tu presencia online.' },
    { service: 15, icon: <FaThumbsUp />, title: 'Redes Sociales', desc: 'Redes Sociales | Community Manager', details: 'Gestión profesional de redes sociales: creación de contenido, programación.' },
    { service: 16, icon: <FaCloud />, title: 'Servicios en la Nube', desc: 'Gestión de Servicios en la Nube', details: 'Implementación de soluciones en la nube para almacenamiento y procesamiento.' },
    { service: 17, icon: <FaBullhorn />, title: 'Publicidad', desc: 'Publicidad Digital', details: 'Campañas de publicidad digital creativas y efectivas para maximizar el alcance de tu marca.' },
  ];

  // Grupos para la cuadrícula
  const serviceGroups = {
    FRONTEND: [1, 5, 4, 9],
    BACKEND: [2, 3, 10, 16, 13],
    MARKETING: [12, 14, 15, 17],
    OTROS: [6, 8, 7, 11],
  };

  // Renderizar ventana de servicio según el service seleccionado
  const renderServiceWindow = () => {
    const current = servicesData.find(s => s.service === service);
    if (!current) return null;
    return <Window tittle={current.title} description={current.details} />;
  };

  // Estado para manejar el icono actual (animación no usada en render actual, pero respetada)
  const [iconIndex, setIconIndex] = useState(0);

  // Estado para el carrusel automático
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Array solo con iconos para animación
  const icons = servicesData.map(s => s.icon);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % servicesData.length);
    }, 4000);
    return () => clearInterval(carouselInterval);
  }, [servicesData.length]);

  // Imagenes de fondo (un solo fondo en tu código original)
  const bgImages = [require('../../assets/bg-13.png')];
  const [bgIndex] = useState(0);

  return (
    <section
      id='services'
      className='section'
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
      }}
    >
      <div
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
        <h1 className='title fade-in-element' style={{ color: 'transparent' }}>
          Servicios | Desarrollo de Software | Galileo Zoe
        </h1>

        <div>
          <p className='text'>Servicios</p>
          <img className='img' src={require('../../assets/galileozoe-00.png')} />
        </div>
        <p className='paragraph'>Desarrollo de Software Multiplataforma</p>
        {!navigator.userAgent.toLowerCase().includes('mobi') && <div className='marginvertical'></div>}


        {service === 0 ? (
          <div>
            {/* Cuadrícula de servicios por categorías */}
            <div className='tech-grid'>
              {Object.entries(serviceGroups).map(([groupName, serviceIds]) => (
                <div key={groupName} className='tech-block'>
                  <h3>{groupName}</h3>
                  <div className='tech-icons'>
                    {serviceIds.map((id) => {
                      const srv = servicesData.find(s => s.service === id);
                      if (!srv) return null;
                      return (
                        <a
                          key={srv.service}
                          className='item'
                          onClick={() => changeService(srv.service)}
                        >
                          {srv.icon}
                          <p>{srv.title}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ position: 'relative' }}>
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
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
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
          </div>
        )}
      </div>
      
    </section>
  );
};
