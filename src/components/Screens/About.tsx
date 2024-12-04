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
        {render===0?
        setRender(1):
        setRender(0)
    }
    }

    // Arreglo de imágenes de fondo
    const bgImages = [

        // require('../../assets/bg-06.png'),
        // require('../../assets/bg-07.png'),
        // require('../../assets/bg-08.png'),
        // require('../../assets/bg-09.png'),
        // require('../../assets/bg-13.png'),
        require('../../assets/bg-12.png'),
        // require('../../assets/bg-10.png'),



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
            onScroll={()=>changeFeed(3)}
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
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    backgroundColor: 'rgba(7, 7, 7, 0.8)', // Capa oscura con opacidad
                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >
                <div className='about-header'>

                    <h1 className='title fade-in-element' style={{ color: 'transparent' }} >
                        Información | Desarrollo de Software | Galileo Zoe
                    </h1>

                    <p className='text'>Nosotros</p>

                    <img className='img' src={require('../../assets/galileozoe-02.png')} />

                </div>

                    <p className='texts'>Desarrollo de Software Multiplataforma.</p>
        

                <div className='cards-container'>
                    <div className={theme === 0 ? 'card' : 'cardblack'}>
                        <h2 className='title'>Misión</h2>
                        <p>Implememtar herramientas tecnológicas de vanguardia que empoderen a las industrias, les permitan
                            aumentar su alcance, conectar con su público objetivo,  y ofrecer una mejor expereincia a sus clientes. .</p>
                        {render === 1 &&
                            <p>Desarrollar soluciónes de software y hardware para abordar las distintas .</p>
                        }
                    </div>
                    <div className={theme === 0 ? 'card' : 'cardblack'}>
                        <h2 className='title'>Visión</h2>
                        <p>Ser el StartUp líder en el diseño, desarollo, implementación y mantenimiento de soluciones que implican
                            hardware, software, tecnologías de la información y asociados.</p>

                            
                <a onClick={() => changeRender()} className='fade-in-element' title='Contacto'>
                    <FaInfoCircle className='paragraph' />
                    <p className={'paragraph'}>Más Información</p>
                </a>

                            {render === 1 &&
                            <p>Desarrollar soluciónes de software y hardware para abordar las distintas .</p>
                        }
                    </div>
                    <div className={theme === 0 ? 'card' : 'cardblack'}>
                        <h2 className='title'>Valores</h2>
                        <p>Innovación, Respeto, Compañerismo, .</p>
                        {render === 1 &&
                            <p>Desarrollar soluciónes de software y hardware para abordar las distintas .</p>
                        }
                    </div>
                </div>
                <br />

                <br />

                <a onClick={() => changeRender()} className='icon fade-in-element' title='Contacto'>
                    <FaInfoCircle className='icon' />
                    <p className={theme === 0 ? 'button' : 'buttonblack'}>Más Información</p>
                </a>

                <div className='marginvertical'></div>
            </div>
        </section>
    );
}
