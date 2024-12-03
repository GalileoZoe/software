import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaAppleAlt, FaBroadcastTower, FaCloud, FaCode, FaCog, FaComment, FaDatabase, FaDeskpro, FaDesktop, FaEnvelope, FaExchangeAlt, FaFacebook, FaFutbol, FaGamepad, FaGlobe, FaHandshake, FaHeart, FaIgloo, FaImage, FaImages, FaLaptopCode, FaMobile, FaMobileAlt, FaMusic, FaNetworkWired, FaPaintBrush, FaPeopleArrows, FaPeopleCarry, FaPhone, FaProjectDiagram, FaRobot, FaServer, FaUser, FaUserFriends, FaUserMd, FaUsers, FaVideo, FaWhatsapp, FaWifi } from 'react-icons/fa';
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
          tittle='Temazcal'
          description='Favorece al proceso de desintoxicación y beneficia a la salud física y mental de los usuarios. ¡ Servicio abierto al público !.'
          button='Más Información'
        />;
      case 2:
        return <Window
          tittle='Psicología'
          description='Atención Psicológica Profesional. Sesiones individuales, grupales y familiares.'
          button='Más Información'
        />;
      case 3:
        return <Window
          tittle='Nutrición'
          description='Dieta basada en alimentos frescos y naturales que ayudan en el proceso de desintoxicación del cuerpo, mejoran la salud física y brindan mayor energía; manteniendo un mejor estado de ánimo.'
          button='Más Información'
        />;
      case 4:
        return <Window
          tittle='Sesiones AL-ANON'
          description='Estrategias para saber como lidiar con personas con conductas adictivas.'
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


  return (

    <section className='section'>

      <div>

        
      <h1 className='title fade-in-element' style={{color:'transparent'}} >
       Servicios | Centro de Rehabilitación | Tierra Prometida
        </h1>

        <h1 className={theme===2?'titleRed':'title'}>Servicios</h1>
        <img className='img' src={require('../../assets/galileozoe-02.png')} />
        <p className='item'>24 horas</p>

        {service===0 ? <div>
          <ul className='slider'>
          <li className='item fade-in-element' title='Activación Física' onClick={() => changeService(7)}>
              <FaCode className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Software {'\n'} Personalizado</p>
            </li>
          <li className='item fade-in-element' title='ArteTerapia' onClick={() => changeService(8)}>
              <FaMobile className={theme === 2 ? 'iconred' : 'icon'} />
              <p>APPS</p>
            </li>
          <li className='item fade-in-element' title='ArteTerapia' onClick={() => changeService(8)}>
              <FaGlobe className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Sitios Web</p>
            </li>
            <li className='item fade-in-element' title='Psicología' onClick={() => changeService(2)}>
              <FaProjectDiagram className={theme === 2 ? 'iconred' : 'icon'} />
              <p>API´s</p>
            </li>
            <li className='item fade-in-element' title='Activación Física' onClick={() => changeService(7)}>
              <FaLaptopCode className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Mantenimineto</p>
            </li>
            <li className='item fade-in-element' title='ArteTerapia' onClick={() => changeService(8)}>
              <FaVideo className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Seguridad</p>
            </li>
       
            <li className='item fade-in-element' title='Eventos Culturales' onClick={() => changeService(9)}>
              <FaGamepad className={theme === 2 ? 'iconred' : 'icon'} />
              <p>VideoJuegos</p>
            </li>
            <li className='item fade-in-element' title='ArteTerapia' onClick={() => changeService(8)}>
            <FaWifi className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Redes {'\n'} Digitales</p>
            </li>
        
            <li className='item fade-in-element' title='Eventos Culturales' onClick={() => changeService(9)}>
              <FaServer className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Deploy</p>
            </li>
            <li className='item fade-in-element' title='Desintoxicación' onClick={() => changeService(5)}>
              <FaHeart className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Marketing {'\n'} Dígital</p>
            </li>
            <li className='item fade-in-element' title='Eventos Culturales' onClick={() => changeService(9)}>
              <FaCloud className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Servicios {'\n'}en la Nube</p>
            </li>
            <li className='item fade-in-element' title='Desarrollo Humano' onClick={() => changeService(6)}>
              <FaUsers className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Dirección {'\n'}
                de Proyectos</p>
            </li>
            <li className='item fade-in-element' title='AL-ANON' onClick={() => changeService(4)}>
              <FaImages className={theme === 2 ? 'iconred' : 'icon'} />
              <p>Diseño {'\n'} Gráfico</p>
            </li>
          </ul>
        </div> :
          <div>
            <br />

            <Services />
          </div>}
        <br />
        <br />
        <a className='icon fade-in-element' title='Contacto' onClick={() => changeFeed(6)}>
          {icons[iconIndex]}
          <p className={theme===0?'button':'buttonblack'}>Contáctanos</p>
        </a>

            <div className='marginvertical'></div>

      </div>
    </section>
  )
}