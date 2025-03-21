import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { useTheme } from '../../context/ThemeContext';
import { FaAngular, FaApple, FaBatteryEmpty, FaBootstrap, FaCode, FaComment, FaCompass, FaCpanel, FaCss3, FaDatabase, FaEnvelope, FaFacebook, FaGit, FaGithub, FaGithubAlt, FaGlobe, FaHtml5, FaJs, FaLaravel, FaLeaf, FaLinux, FaMapPin, FaMicrochip, FaMicrosoft, FaNode, FaNodeJs, FaNpm, FaPhone, FaPhp, FaPython, FaRaspberryPi, FaReact, FaReacteurope, FaRedRiver, FaRobot, FaTiktok, FaTypo3, FaUsb, FaWhatsapp } from 'react-icons/fa';

export const Tech = () => {

    const { changeFeed } = useFeed();
    const { theme } = useTheme();
    const [bgIndex] = useState(0);



    const bgImages = [
        require('../../assets/bg-12.png'),
    ];



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
                    backgroundColor: 'rgba(0, 0, 0, 0.93)',
                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >

                <h1 className='title fade-in-element' style={{ color: 'transparent' }} onScroll={() => changeFeed(5)}>
                    Contacto | Desarrollo de Software | Galileo  Zoe
                </h1>

                <p className={'text'}>Tecnologías</p>


                <div className='item'>
                    <img className='img' src={require('../../assets/galileozoe-blue.png')} />
                </div>
                <p className='paragraph'>Desarrollo de Software Multiplataforma</p>

                <div className='marginvertical'></div>
                <div className='marginvertical'></div>


                <ul className='slider' onScroll={() => changeFeed(5)}>

             
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='GitHub' >
                        <a className='item' href='mailto:al222210067@gmail.com'><FaReact size={25} /> <p>React</p></a>
                    </li>

                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Linux' >
                        <a className='item' href='mailto:al222210067@gmail.com'><FaLinux size={25} /> <p>Linux</p></a>
                    </li>
             
        
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='PHP' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaGit size={25} /><p>Git</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Facebook' >
                        <a className='item' href='https://www.facebook.com/profile.php?id=61565903937768'> <FaGithub size={25} /><p>GitHub</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='TikTok' >
                        <a className='item' ><FaReact size={25} /> <p>ReactNative</p></a>

                    </li>
                
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Windows' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaMicrosoft size={25} /><p>Windows</p></a>
                    </li>

                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='IOS' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaApple size={25} /><p>IOS</p></a>
                    </li>
               
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Phyton' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaPython size={25} /><p>Python</p></a>
                    </li>
               
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Node Package Manager' >
                        <a className='item' href='mailto:al222210067@gmail.com'><FaNpm size={25} /> <p>NPM</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='JavaScript' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaJs size={25} /><p>JavaScript</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='HTML' >
                        <a className='item' href='tel:7298906600'><FaHtml5 size={25} /><p>HTML</p></a>

                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='CSS' >
                        <a className='item' href='sms:527298906600'> <FaCss3 size={25} /> <p>CSS</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='TypeScript' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaReact size={25} /><p>TypeScript</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Bootstrap' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaBootstrap size={25} /><p>Bootstrap</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Arduino' >
                        <a className='item' href='https://maps.app.goo.gl/qg6mNeMVLKEW3vDY7'> <FaMicrochip size={25} /><p>Arduino</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='RaspBerryPi' >
                        <a className='item' href='https://maps.app.goo.gl/qg6mNeMVLKEW3vDY7'> <FaRaspberryPi size={25} /><p>RaspberryPi</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Bootstrap' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaCompass size={25} /><p>Mongo DB</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Node JS' >
                        <a className='item' href='https://wa.me/527298906600'> <FaNodeJs size={25} /><p>Node JS</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='CPanel' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaCpanel size={25} /><p>C Panel</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='PHP' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaPhp size={25} /><p>PHP</p></a>
                    </li>
                    <li className='item fade-in-element' onScroll={() => changeFeed(5)} title='Laravel' >
                        <a className='item' href='https://galileozoe.github.io/software'> <FaLaravel size={25} /><p>Laravel</p></a>
                    </li>
                </ul>

                <div className='marginvertical'></div>


            </div>

        </section>
    )
}






