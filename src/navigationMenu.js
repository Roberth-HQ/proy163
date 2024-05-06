import React, { useState } from 'react';

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '50px' ,color:'white' }}>NOMBRE DEL USUARIO</div>
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={toggleOptions}
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
                        Mas Opciones
                    </button>
                    {showOptions && (
                        <div style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: 'white', border: `3px solid ${borderColor}`, borderRadius: '5px', padding: '10px', zIndex: 1 }}>
                            <button onClick={handleSendMessage} style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>Enviar mensaje</button>
                            <button onClick={handleLogout} style={{ display: 'block', cursor: 'pointer' }}>Cerrar sesión</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;

