import React, { useContext, useEffect } from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { AuthContext } from '../../context/AuthContext';
import { About } from '../Screens/About';
import { Contact } from '../Screens/Contact';
import { Services } from '../Screens/Services';
import { Location } from '../Screens/Location';
import { Feed } from '../Screens/Feed';
import { Tech } from '../Screens/Tech';
import { Help } from '../Screens/Help';
import { Error } from '../Screens/Error';
import { Profile } from '../Screens/Profile';

export const Layout: React.FC = () => {
    const { feed, changeFeed } = useFeed();
    const { authState } = useContext(AuthContext);

    // Verificar autenticación y ajustar feed en consecuencia
    useEffect(() => {
        if (authState.isLoggenIn) {
            changeFeed(1); // Cambiar feed a la pantalla principal
        }
    }, [authState.isLoggenIn]);

    // Renderizado de pantallas basado en feed
    switch (feed) {
        // case 0:
        //     return <LoginScreen />;
        case 1:
            return <Feed />;
        case 2:
            return <About />;
        case 3:
            return <Services />;
        case 4:
            return <Tech />;
        case 5:
            return <Contact />;
        case 6:
            return <Profile/>;
        case 11:
            return <Help />;
        default:
            return <Error />;
    }
};
