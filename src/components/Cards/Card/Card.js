import React from 'react';

const card = (props) => {

    return(
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.contenido}</p>
            <span>{props.responsable}</span>
        </div>
    );

}

export default card;