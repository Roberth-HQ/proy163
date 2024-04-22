import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div style={{ 
            backgroundColor: 'rgba(80, 160, 80, 1.2)',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    marginRight: '10px',
                    overflow: 'hidden'
                }}>
                    <img src="ruta_de_la_imagen" alt="Usuario" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h1 style={{ marginBottom: '0' }}>Jhon Miguel Cuevas Carillo</h1>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '20px' }}>
                    <button style={{ 
                        marginRight: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#008000',
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>Horarios</button>
                    <button style={{ 
                        marginRight: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#008000',
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>Materias</button>
                    <button style={{ 
                        marginRight: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#008000',
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>Administracion Personal</button>
                    <button style={{ 
                        marginRight: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#008000',
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>Notas</button>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleDropdownToggle} style={{ marginLeft: '5px', cursor: 'pointer' }} />
                </div>
                {isDropdownOpen && (
                    <div style={{ position: 'absolute', top: '50px', right: '20px', backgroundColor: 'rgba(80, 160, 80, 0.8)', padding: '10px', borderRadius: '5px' }}>
                        <p>Estudiante</p>
                        <p onClick={() => setIsDropdownOpen(false)}>Cerrar sesión</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
