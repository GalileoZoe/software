import React from 'react'
import { useService } from '../../context/ServiceContext'
import { FaAppleAlt,  FaCamera,  FaCloud,  FaCode,  FaDatabase,  FaFileImage,  FaFutbol, FaGamepad, FaGlobe, FaHandPointUp, FaHeart, FaInfo, FaLaptopCode, FaMobile, FaMusic, FaPaintBrush, FaProjectDiagram, FaRegImages, FaRobot, FaServer, FaSpa, FaThumbsUp, FaUser, FaUserMd, FaUsers, FaVideo, FaWifi, FaWindowClose } from 'react-icons/fa';

interface WindowProps {
  action?: () => void,
  button?: string,
  description?: string,
  href?: string,
  icon?: ()=>void,
  tittle?: string,
  image?: string,
}

export const Window: React.FC<WindowProps> = ({ action, button, href, tittle, description }) => {

  const { service, changeService } = useService();

  const Icons = () => {
    switch (service) {
      case 0:
        return null ;
      case 1:
        return  <FaCode className='icon' onClick={() => changeService(0)} />;
      case 2:
        return  <FaDatabase className='icon' onClick={() => changeService(0)} />;
      case 3:
        return  <FaProjectDiagram className='icon' onClick={() => changeService(0)} />;
      case 4:
        return  <FaMobile className='icon' onClick={() => changeService(0)} />;
      case 5:
        return  <FaGlobe className='icon' onClick={() => changeService(0)} />;
      case 6:
        return  <FaLaptopCode className='icon' onClick={() => changeService(0)} />;
      case 7:
        return  <FaVideo className='icon' onClick={() => changeService(0)} />;
      case 8:
        return  <FaRobot className='icon' onClick={() => changeService(0)} />;
      case 9:
        return  <FaGamepad className='icon' onClick={() => changeService(0)} />;
      case 10:
        return  <FaServer className='icon' onClick={() => changeService(0)} />;
      case 11:
        return  <FaUsers className='icon' onClick={() => changeService(0)} />;
      case 12:
        return  <FaRegImages className='icon' onClick={() => changeService(0)} />;
      case 13:
        return  <FaWifi className='icon' onClick={() => changeService(0)} />;
      case 14:
        return  <FaHeart className='icon' onClick={() => changeService(0)} />;
      case 15:
        return  <FaThumbsUp className='icon' onClick={() => changeService(0)} />;
      case 16:
        return  <FaCloud className='icon' onClick={() => changeService(0)} />;
      default:
        return null;
    }
  };

  return (

      <div className='window' onClick={() => changeService(0)}>
        {/* <FaWindowClose className='iconclose' onClick={() => changeService(0)} /> */}
        <h1 onClick={() => changeService(0)} className='title'>{tittle}</h1>
       <Icons/>
        <p className='paragraphwhite'>
          {description}
        </p>
        <a href={href} onClick={action}>{button}</a>
        <br />
        <br />
      </div>

  )
}
