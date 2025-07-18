import React from 'react'
import { useService } from '../../context/ServiceContext'
import { FaAppleAlt,  FaCamera,  FaCloud,  FaCode,  FaDatabase,  FaFileImage,  FaFutbol, FaGamepad, FaGlobe, FaHandPointUp, FaHeart, FaInfo, FaLaptopCode, FaMobile, FaMusic, FaPaintBrush, FaProjectDiagram, FaRegImages, FaRobot, FaServer, FaSpa, FaThumbsUp, FaUser, FaUserMd, FaUsers, FaVideo, FaWifi, FaWindowClose, FaArrowLeft } from 'react-icons/fa';

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
        return  <FaCode />;
      case 2:
        return  <FaDatabase />;
      case 3:
        return  <FaProjectDiagram />;
      case 4:
        return  <FaMobile />;
      case 5:
        return  <FaGlobe />;
      case 6:
        return  <FaLaptopCode />;
      case 7:
        return  <FaVideo />;
      case 8:
        return  <FaRobot />;
      case 9:
        return  <FaGamepad />;
      case 10:
        return  <FaServer />;
      case 11:
        return  <FaUsers />;
      case 12:
        return  <FaRegImages />;
      case 13:
        return  <FaWifi />;
      case 14:
        return  <FaHeart />;
      case 15:
        return  <FaThumbsUp />;
      case 16:
        return  <FaCloud />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.5s ease-out'
    }}>
      {/* Botón de regreso */}
      <button
        onClick={() => changeService(0)}
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0,123,255,0.8)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FaArrowLeft />
      </button>

      {/* Contenedor principal */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '1.5rem 2rem',
        textAlign: 'center',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 15px 40px rgba(255,255,255,0.2)',
        maxWidth: '400px',
        width: '85%',
        animation: 'slideInCenter 0.8s ease-out',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Icono del servicio */}
        <div style={{
          fontSize: '2.5rem',
          color: '#007bff',
          marginBottom: '1rem',
          filter: 'drop-shadow(0 4px 8px rgba(0,123,255,0.5))',
          animation: 'iconPulse 2s ease-in-out infinite'
        }}>
          <Icons />
        </div>

        {/* Título */}
        <h1 style={{
          color: '#fff',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          margin: '0 0 1rem 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}>
          {tittle}
        </h1>

        {/* Descripción */}
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          margin: '0 0 1.5rem 0',
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
        }}>
          {description}
        </p>

        {/* Botón de acción (si existe) */}
        {button && (
          <a 
            href={href} 
            onClick={action}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #007bff, #0056b3)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)';
            }}
          >
            {button}
          </a>
        )}
      </div>

      {/* Estilos CSS en línea para animaciones */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInCenter {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
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
    </div>
  )
}
