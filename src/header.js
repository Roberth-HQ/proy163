import React from 'react';
import logoColegio from './assets/logoColegio.png';

const Header = () => {
    return (
        <div style={{ 
            backgroundColor: 'green',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logoColegio} alt="Logo Colegio" style={{ width: '120px', marginRight: '20px' }} />
                <h1 style={{ margin: '0', fontSize: '40px' }}>Unidad Educativa San Salvador Bolivia</h1>
            </div>
            <div>
                {/* Aquí iría el código para el menú de navegación */}
            </div>
        </div>
    );
};

export default Header;

