import React, { useState } from 'react';
import inscripciones from './assets/inscripciones.png';
import calificaciones from './assets/calificaciones.png';
import documentos from './assets/documentos.png';
import user from './assets/ins.jpg';

const BarraLateral = ({ backgroundColor, borderColor, buttonColor }) => {
    const images = [
        { id: 0, name: 'KARDEX: nombre de usuario KArdex', url: user },
        { id: 4, name: 'AGREGAR DOCENTE', url: documentos },
        { id: 2, name: 'AGREGAR ALUMNO', url: inscripciones },
        { id: 3, name: 'AGRAGAR MATERIA', url: inscripciones },
        { id: 5, name: 'GUARDAR LISTA', url: calificaciones },
        { id: 5, name: 'GENERAR NOTAS', url: calificaciones },
    ];

    const [content, setContent] = useState(''); // Estado para controlar el contenido

    const renderContent = () => {
        
            return (
                <>
                    <h1 style={{ textAlign: 'center' }}>Bienvenido al sistema KARDEX</h1>
                    <p style={{ textAlign: 'center' }}>{content}</p>
                </>
            );
        
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
