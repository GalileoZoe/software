import React, { useEffect, useState } from 'react'
import { FaComment, FaEnvelope, FaFacebook, FaHeart, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'
import { useFeed } from '../../context/FeedContext';

export const Help = () => {

    const { theme } = useTheme();
    const {changeFeed}=useFeed();
    const [iconIndex, setIconIndex] = useState(0);

    const icons = [
        <FaPhone className='icon' />,
        <FaComment className='icon' />,
        <FaWhatsapp className='icon' />,
        <FaFacebook className='icon' />,
        <FaEnvelope className='icon' />,
    ];


    // Arreglo de imágenes de fondo
    const bgImages = [
        require('../../assets/bg-18.png'),

    ];

    // Estado para manejar el índice de imagen de fondo
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
            setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length); // Cambia el fondo de imagen
        });

        // Cleanup al desmontar el componente
        return () => clearInterval(interval);
    }, [icons.length, bgImages.length]);

    return (
        <section
            className='section'
            onScroll={!navigator.userAgent.toLowerCase().includes('mobi') ? () => changeFeed(6) : undefined}
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
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.93)',
                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >

                <div className='marginvertical' ></div>


                <h1 className='text'>Ayuda</h1>
                {/* <div className='item'>
                    <img className='img' src={require('../../assets/galileozoe-02.png')} />
                    <p>24 horas</p>
                </div> */}


                <p className='paragraph'>Gracias por formar parte de   </p>
                <img
          className='logotype'
          src={require('../../assets/galileozoe-blue.png')}
          alt='Logo Galileo Zoe'
        />
                <div className='item'>
                    <img className='logo' src={require('../../assets/GZX10000.png')} />
                </div>


                <br />
                <p className='paragraphwhite'>Tu apoyo contribuye a la conservación y recuperación de nuestros ecosistemas naturales.</p>
                <a className='icon fade-in-element' href='https://wa.me/527294899630' title='Contacto' >
                <p className='paragraph'>Quiero Ayudar</p>
                <FaHeart className={'buttonred'} />
                </a>
                <br />
                <br />
                <a href='https://wa.me/527294899630' className={'button'}>Más Información</a>

            
             

            </div>
        </section>
    )
}
