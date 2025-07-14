import React, { useEffect, useState } from 'react';
import '../../App.css';
import { FaInfoCircle } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useFeed } from '../../context/FeedContext';

export const About = () => {

    const [render, setRender] = useState<number>(0);

    const { changeFeed } = useFeed();
    const { theme } = useTheme();

    // Estado para manejar el icono actual
    const [iconIndex, setIconIndex] = useState(0);

    // Array de íconos
    const icons = [
        <FaInfoCircle className='icon' />,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 2000);

        // Cleanup al desmontar el componente
        return () => clearInterval(interval);
    }, [icons.length]);

    const changeRender = () => {
        {
            render === 0 ?
            setRender(1) :
            setRender(0)
        }
    }

    // Arreglo de imágenes de fondo
    const bgImages = [

        require('../../assets/bg-22.png'),

    ];

    // Estado para manejar el índice de imagen de fondo
    const [bgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        },2000);

        // Cleanup al desmontar el componente
        return () => clearInterval(interval);
    }, [icons.length, bgImages.length]);


    return (
        <section
        onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(3) : undefined}
        className='section'
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
                    backgroundColor: 'rgba(0, 0, 0, 0.97)',

                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >
                   <div style={{ position: 'relative', zIndex: 2 }}>

                    <h1 className='title fade-in-element' style={{ color: 'transparent' }} >
                        Información | Desarrollo de Software | Galileo Zoe
                    </h1>

                    <p className='text'>Nosotros</p>

                    <img className='img' src={require('../../assets/galileozoe-00.png')} />

          
                <p className='paragraph'>Desarrollo de Software Multiplataforma</p>


          
                <div className="cards" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '20px',
                    margin: '40px auto',
                    flexWrap: 'wrap',
                    maxWidth: '900px'
                }}>
                   <div>
  <div className="card">
    <p className="tip">Misión</p>
    <p>"Desarrollar soluciones innovadoras de software, hardware y asociados."</p>
  </div>
</div>

<div>
  <div className="card">
    <p className="tip">Visión</p>
    <p>"Ser la StartUp líder en servicios tecnológicos personalizados para usuarios y organizaciones."</p>
  </div>
</div>

<div>
  <div className="card">
    <p className="tip">Valores</p>
    <p>"Pasión, Respeto, Amor, Fé, Innovación."</p>
  </div>
</div>

                </div>

                <div className='marginvertical'></div>
            </div>
            </div>
        </section>
    );
}

