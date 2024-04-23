import React from 'react';

const NavigationMenu = ({ backgroundColor, borderColor, buttonColor, buttons }) => {
    return (
        <div style={{ backgroundColor, padding: '20px', borderRadius: '5px' }}>
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
    );
};

export default NavigationMenu;
