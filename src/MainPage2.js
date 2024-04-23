import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Header from './header'; // Importa el componente Header
import NavigationMenu from './navigationMenu'; // Importa el componente NavigationMenu
import BarraLateral from './barraLateral'; // Importa el componente BarraLateral


const MainPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <Header color="#008000" />
            <NavigationMenu
                backgroundColor="#004d00"
                borderColor="#002600"
                buttonColor="#008000"
                buttons={[
                    { label: 'Panel Principal' },
                    { label: 'Otros Permisos' },
                    { label: 'Enlaces Rápidos' },
                ]}
            />
                <BarraLateral
                    backgroundColor="#004d00"
                    borderColor="#002600"
                    buttonColor="#008000"
                />
        </div>
    );
};
export default MainPage;


