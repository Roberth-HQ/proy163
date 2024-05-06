import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = ({ backgroundColor, borderColor, buttonColor, buttons }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleLogout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión
        console.log("Cerrar sesión");
    };

    const handleSendMessage = () => {
        // Aquí puedes agregar la lógica para enviar un mensaje
        console.log("Enviar mensaje");
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor, padding: '20px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', marginLeft: '50px' }}>
                    <button
                        onClick={toggleOptions}
                        style={{
                            backgroundColor: buttonColor,
                            color: 'white',
                            border: `3px solid ${borderColor}`,
                            borderRadius: '5px',
                            padding: '10px 10px',
                            cursor: 'pointer',
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                        <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />
                    </button>
                    {showOptions && (
                        <div style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: 'green', border: '3px solid white', borderRadius: '5px', padding: '10px', zIndex: 1 }}>
                            <button onClick={handleSendMessage} style={{ display: 'block', marginBottom: '10px', cursor: 'pointer', backgroundColor: 'green', color: 'white', border: '3px solid white', borderRadius: '5px', padding: '10px' }}>Enviar mensaje</button>
                            <button onClick={handleLogout} style={{ display: 'block', cursor: 'pointer', backgroundColor: 'green', color: 'white', border: '3px solid white', borderRadius: '5px', padding: '10px' }}>Cerrar sesión</button>
                        </div>
                    )}
                </div>
            </div>

            <div>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        style={{
                            backgroundColor: buttonColor,
                            color: 'white',
                            border: `3px solid ${borderColor}`,
                            borderRadius: '5px',
                            padding: '10px 10px',
                            marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NavigationMenu;
