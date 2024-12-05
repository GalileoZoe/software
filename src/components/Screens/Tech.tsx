import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaBootstrap, FaCode, FaComment, FaCompass, FaCss3, FaEnvelope, FaFacebook, FaGithub, FaGithubAlt, FaGlobe, FaHtml5, FaJs, FaLeaf, FaLinux, FaMapPin, FaMicrochip, FaNodeJs, FaNpm, FaPhone, FaReact, FaRobot, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export const Tech = () => {

    const { feed, changeFeed } = useFeed();
    const { theme, changeTheme } = useTheme();

    // Estado para manejar el icono actual
    const [iconIndex, setIconIndex] = useState(0);

    // Array de íconos
    const icons = [
        <FaPhone className='icon' />,
        <FaComment className='icon' />,
        <FaWhatsapp className='icon' />,
        <FaFacebook className='icon' />,
        <FaEnvelope className='icon' />,
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
        require('../../assets/bg-12.png'),
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
            onScroll={window.innerWidth > 700 ? () => changeFeed(5) : undefined}
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
                    minHeight: '100%',
                    height: 'auto',
                    backgroundColor: 'rgba(7, 7, 7, 0.8)', // Capa oscura con opacidad
                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >

                <h1 className='title fade-in-element' style={{ color: 'transparent' }} onScroll={() => changeFeed(5)}>
                    Contacto | Desarrollo de Software | Galileo  Zoe
                </h1>

                <p className={'text'}>Tecnologías</p>


                <div className='item'>
                    <img className='img' src={require('../../assets/galileozoe-02.png')} />
                    {/* <p>24 horas</p> */}
                </div>
                <div className='marginvertical'></div>
                <div className='marginvertical'></div>


                <ul className='slider' onScroll={() => changeFeed(5)}>

             
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='GitHub' >
                        <a className='item' href='mailto:al222210067@gmail.com'><FaReact size={25} /> <p>React</p></a>
                    </li>

                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Linux' >
                        <a className='item' href='mailto:al222210067@gmail.com'><FaLinux size={25} /> <p>Linux</p></a>
                    </li>
             
        
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Node JS' >
                        <a className='item' href='https://wa.me/527298906600'> <FaNodeJs size={25} /><p>Node JS</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Facebook' >
                        <a className='item' href='https://www.facebook.com/profile.php?id=61565903937768'> <FaGithub size={25} /><p>GitHub</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='TikTok' >
                        <a className='item' ><FaReact size={25} /> <p>ReactNative</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Ubicación' >
                        <a className='item' href='https://maps.app.goo.gl/qg6mNeMVLKEW3vDY7'> <FaMicrochip size={25} /><p>Arduino</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='TypeScript' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaReact size={25} /><p>TypeScript</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Bootstrap' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaBootstrap size={25} /><p>Bootstrap</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Node Package Manager' >
                        <a className='item' href='mailto:al222210067@gmail.com'><FaNpm size={25} /> <p>NPM</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='HTML' >
                        <a className='item' href='tel:7298906600'><FaHtml5 size={25} /><p>HTML</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='CSS' >
                        <a className='item' href='sms:527298906600'> <FaCss3 size={25} /> <p>CSS</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='JavaScript' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaJs size={25} /><p>JavaScript</p></a>
                    </li>
                </ul>

                <div className='marginvertical'></div>

                <a className='fade-in-element' title='Contacto' onClick={() => changeFeed(6)}>
                    {icons[iconIndex]}
                    <p className={theme === 0 ? 'button' : 'buttonblack'}>Contacto</p>
                </a>

                <div className='marginvertical'></div>
                <div className='marginvertical'></div>


                <a className='fade-in-element' title='Contacto' onClick={() => changeFeed(6)}>
                    {icons[iconIndex]}
                    <p className={theme === 0 ? 'button' : 'buttonblack'}>Contacto</p>
                </a>
                <div className='marginvertical'></div>


            </div>

        </section>
    )
}






