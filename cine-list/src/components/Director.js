import React from 'react';

/**
 * Definindo o componente Diretor capturado da API
 * @param {string} name Nome do diretor pertencente ao componente
 * @return Componente diretor exibindo seu nome
 */
const Director = ({name}) => {

    return (
    <div className="director">
        <p>{name}</p>
    </div>
    );
};

export default Director;