import React from 'react';

const Contenido = ({ seleccion }) => {
    let contenido = null;

    switch (seleccion) {
        case 'usuario':
            contenido = <div>Contenido para la opción Usuario</div>;
            break;
        case 'inscripciones':
            contenido = <div>Contenido para la opción Inscripciones</div>;
            break;
        case 'calificaciones':
            contenido = <div>Contenido para la opción Calificaciones</div>;
            break;
        case 'documentos':
            contenido = <div>Contenido para la opción Documentos</div>;
            break;
        default:
            contenido = <div>Seleccione una opción de la barra lateral</div>;
    }

    return (
        <div style={{ flex: 1, marginLeft: '20px' }}>
            {contenido}
        </div>
    );
};

export default Contenido;
