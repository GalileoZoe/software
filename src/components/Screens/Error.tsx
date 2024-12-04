import React, { useEffect, useState } from 'react'
import { FaComment, FaEnvelope, FaFacebook, FaHeart, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'

export const Error = () => {

    const { theme } = useTheme();
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
        require('../../assets/bg-15.png'),

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
            className='feed'
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
                    backgroundColor: 'rgba(7, 7, 7, 0.7)', // Capa oscura con opacidad
                    zIndex: 1, // Mantiene la capa detrás del contenido
                }}
            >

                <div className='marginvertical' ></div>


                <h1 className='title'>ERROR 404</h1>

                <br />

                <p className='texts'>Página Web No Disponible </p>

                <div className='item'>
                    <img className='img' src={require('../../assets/galileozoe-02.png')} />
                    <p>24 horas</p>
                </div>


                <br />
                <p className='texts'>Tu apoyo contribuye a la conservación y recuperación de nuestros ecosistemas naturales.   </p>

                <br />
                <br />

                <a className='icon fade-in-element' href='https://wa.me/527298906600' title='Contacto' >
                    <p className='paragraph'>Quiero Ayudar </p>
                    <FaHeart className={theme === 0 ? 'button' : 'buttonblack'} />
                    <br />
                    <br />
                </a>

            </div>
        </section>
    )
}
