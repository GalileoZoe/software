import React, { useEffect, useState } from 'react';
import '../../App.css';
import { FaInfoCircle } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useFeed } from '../../context/FeedContext';

export const Projects = () => {

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

        require('../../assets/city.png'),

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
        id='web'
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
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',

                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >
                   <div style={{ position: 'relative', zIndex: 2 }}>

                    <h1 className='title fade-in-element' style={{ color: 'transparent' }} >
                        Información | Desarrollo de Software | Galileo Zoe
                    </h1>

                    <p className='text'>Proyectos</p>

                    <img className='img' src={require('../../assets/galileozoe-00.png')} />

          
                {/* <p className='paragraph'>Desarrollo de Software Multiplataforma</p> */}


          
                <div className="cards" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '20px',
                    margin: '40px auto',
                    flexWrap: 'wrap',
                    maxWidth: '900px'
                }}>

                    <a href="https://galileozoe.github.io/tierraprometidawebsite">
                  <div className="cardimage" style={{ backgroundImage: `url(${require('../../assets/tp.png')})` }}>
                 <div className="card-overlay">
                <p className="tip">Tierra Prometida</p>
                <p className="second-text">Descripción breve y atractiva del proyecto.</p>
                </div>
                </div>
                </a>
                <a href="https://galileozoe.github.io/pizzas">
                  <div className="cardimage" style={{ backgroundImage: `url(${require('../../assets/under.png')})` }}>
                 <div className="card-overlay">
                <p className="tip">Pizzería Sorella</p>
                <p className="second-text">Descripción breve y atractiva del proyecto.</p>
                </div>
                </div>
                </a>
                  {/* <div className="cardimage" style={{ backgroundImage: `url(${require('../../assets/pc.png')})` }}>
                 <div className="card-overlay">
                <p className="tip">Pizzería Sorella</p>
                <p className="second-text">Descripción breve y atractiva del proyecto.</p>
                </div>
                </div> */}
                <a href="https://galileozoe.github.io/kaspas">
                  <div className="cardimage" style={{ backgroundImage: `url(${require('../../assets/pc.png')})` }}>
                 <div className="card-overlay">
                <p className="tip">Kaspas</p>
                <p className="second-text">Descripción breve y atractiva del proyecto.</p>
                </div>
                </div>
                </a>
                <a href="https://galileozoe.github.io/panaderia">
                  <div className="cardimage" style={{ backgroundImage: `url(${require('../../assets/pc.png')})` }}>
                 <div className="card-overlay">
                <p className="tip">Panadería Bernal</p>
                <p className="second-text">Descripción breve y atractiva del proyecto.</p>
                </div>
                </div>
                </a>
                </div>



                <div className='marginvertical'></div>
            </div>
            </div>
        </section>
    );
}

