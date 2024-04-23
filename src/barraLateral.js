import React, { useState } from 'react';
import usuario from './assets/usuario.png';
import inscripciones from './assets/inscripciones.png';
import calificaciones from './assets/calificaciones.png';
import documentos from './assets/documentos.png';
import user from './assets/imagenUser.jpg';

const BarraLateral = ({ backgroundColor, borderColor, buttonColor }) => {
    const images = [
        { id: 1, name: 'Informacion del usuario', url: usuario },
        { id: 2, name: 'Inscripciones', url: inscripciones },
        { id: 3, name: 'Calificaciones', url: calificaciones },
        { id: 4, name: 'Documentos', url: documentos }
    ];

    const [content, setContent] = useState(''); // Estado para controlar el contenido
    /*
    const [selectedYear, setSelectedYear] = useState(''); // Estado para controlar el año seleccionado

    const handleYearSelection = (year) => {
        setSelectedYear(year);
    };
*/
    const renderContent = () => {
        if (content === 'Informacion del usuario') {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', overflowY: 'auto' }}>
                    <img src={user} alt="Usuario" style={{ borderRadius: '50%', width: '200px', height: '200px', marginBottom: '20px' }} />
                    <div style={{ textAlign: 'left', fontSize: '20px' }}>
                        <p><strong>Nombre:</strong> Eliseo Jimenez Jimenes</p>
                        <p><strong>Edad:</strong> 22</p>
                        <p><strong>Curso:</strong> Cuarto de secundaria</p>
                        <p><strong>CI:</strong> 9894531</p>
                        <p><strong>Domicilio:</strong> Sencata, cerca a SOBOCE</p>
                    </div>
                </div>
            );
        } else if (content === 'Inscripciones') {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', overflowY: 'auto' }}>
                    <div style={{ width: '80%', height: '80%' }}>
                        <table style={{ width: '100%', height: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th>Materia</th>
                                    <th>Nota</th>
                                    <th>Observaciones</th>
                                    <th>Profesor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(7)].map((_, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {[...Array(4)].map((_, colIndex) => (
                                            <td key={colIndex} style={{ border: '1px solid black', padding: '5px' }}></td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <p>Aprobados:</p>
                            <p>Reprobados:</p>
                            <p>Promedio:</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <>
                    <h1 style={{ textAlign: 'center' }}>Bienvenido al sistema</h1>
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
                <img src={image.url} alt={image.name} style={{ width: '60px', height: '60px', marginBottom: '5px' }} />
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
