import React, { useState } from 'react';
import usuario from './assets/usuario.png';
import inscripciones from './assets/inscripciones.png';
import calificaciones from './assets/calificaciones.png';
import documentos from './assets/documentos.png';
import user from './assets/fotoDire.jpg';

const BarraLateral = ({ backgroundColor, borderColor, buttonColor }) => {
    const images = [
        { id: 0, name: 'MAUGE GARCIA', url: user },
        { id: 1, name: 'Informacion del usuario', url: usuario },
        { id: 4, name: 'MATERIAS', url: documentos },
        { id: 2, name: 'PROFESORES', url: inscripciones },
        { id: 3, name: 'ALUMNOS', url: inscripciones },
        { id: 5, name: 'GESTION', url: calificaciones },
    ];

    const [content, setContent] = useState(''); // Estado para controlar el contenido

    const renderContent = () => {
        if (content === 'Informacion del usuario') {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', overflowY: 'auto' }}>
                    <img src={user} alt="Usuario" style={{ borderRadius: '50%', width: '200px', height: '200px', marginBottom: '20px' }} />
                    <div style={{ textAlign: 'left', fontSize: '20px' }}>
                        <p><strong>Nombre:</strong> MAUGE GARCIA </p>
                        <p><strong>Edad:</strong> 41</p>
                        <p><strong>facultad:</strong> Ciencias Puras Y Naturales</p>
                        <p><strong>CI:</strong> 45644886</p>
                        <p><strong>Domicilio:</strong> Zona Sur, Santa Cruz</p>
                    </div>
                </div>
            );
        } else if (content === 'MATERIAS') {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', overflowY: 'auto' }}>
                    <h2>Materias</h2>
                    <div style={{ width: '80%', height: '80%' }}>
                        <table style={{ width: '100%', height: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th>Materia</th>
                                    <th>Horario</th>
                                    <th>Estudiante</th>
                                    <th>Profesores</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(7)].map((_, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td style={{ border: '1px solid black', padding: '5px' }}></td>
                                        <td style={{ border: '1px solid black', padding: '5px' }}></td>
                                        <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center', width: '30%', height: '50px' }}>
                                            <button style={{ backgroundColor: 'green', color: 'white', border: '3px solid white', borderRadius: '5px', padding: '5px', cursor: 'pointer', width: '100%', boxSizing: 'border-box' }}>Desplegar estudiantes</button>
                                        </td>
                                        <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center', width: '30%', height: '50px' }}>
                                            <button style={{ backgroundColor: 'green', color: 'white', border: '3px solid white', borderRadius: '5px', padding: '5px', cursor: 'pointer', width: '100%', boxSizing: 'border-box' }}>Desplegar Profersor</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return (
                <>
                    <h1 style={{ textAlign: 'center' }}>Bienvenido al sistema Directora</h1>
                    <p style={{ textAlign: 'center' }}>{content}</p>
                </>
            );
        }
    };
    const buttons = images.map((image, index) => (
        <div key={image.id} style={{ marginBottom: '10px' }}>
            <button
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: buttonColor,
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    width: '100px',
                    fontSize: '16px',
                    margin: '0 auto',
                }}
                onClick={() => setContent(image.name)}
            >
                {image.url === user ? (
                    <img src={image.url} alt={image.name} style={{ width: '100px', height: '100px', marginBottom: '5px', borderRadius: '50%' }} />
                ) : (
                    <img src={image.url} alt={image.name} style={{ width: '60px', height: '60px', marginBottom: '5px', borderRadius: '50%' }} />
                )}
                <span>{image.name}</span>
            </button>
        </div>
    ));
    

    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{ 
                backgroundColor: backgroundColor,
                border: `1px solid ${borderColor}`,
                borderRadius: '5px',
                padding: '5px',
                margin: '10px',
                width: '150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {buttons}
            </div>
            <div style={{ 
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '5px',
                padding: '20px',
                margin: '10px',
                flex: '1',
            }}>
                {renderContent()}
            </div>
        </div>
    );
};

export default BarraLateral;
