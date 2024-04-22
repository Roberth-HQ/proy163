import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div style={{ backgroundColor: 'rgba(80, 160, 80, 1.2)', padding: '20px', textAlign: 'center', color: 'white' }}>
                <h1>Unidad educativa McLovin</h1>
                <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleDropdownToggle} style={{ marginLeft: '5px', cursor: 'pointer' }} />
                </div>
                {isDropdownOpen && (
                    <div style={{ position: 'absolute', top: '50px', left: '100px', backgroundColor: 'rgba(80, 160, 80, 0.8)', padding: '10px', borderRadius: '5px' }}>
                        <p>académico</p>
                        <p onClick={() => setIsDropdownOpen(false)}>Cerrar sesión</p>
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgba(80, 160, 80, 1.2)', justifyContent: 'space-between', minHeight: 'calc(100vh - 104px)' }}>
                <div style={{ flex: 1, backgroundColor: 'rgba(80, 160, 80, 1.2)', padding: '20px', color: 'white' }}>
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
                    <h2>Jhon Miguel Cuevas Carillo</h2>

                    <div>
                        <button style={{
                            marginBottom: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#008000',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            display: 'block',
                            width: '100%'
                        }}>Profesores</button>
                        <button style={{
                            marginBottom: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#008000',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            display: 'block',
                            width: '100%'
                        }}>Alumnos</button>
                        <button style={{
                            marginBottom: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#008000',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            display: 'block',
                            width: '100%'
                        }}>Materias</button>
                        <button style={{
                            marginBottom: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#008000',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            display: 'block',
                            width: '100%'
                        }}>Gestión</button>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', flex: 2, padding: '20px' }}>

                </div>
            </div>
        </div>
    );
};

export default MainPage;
