import React from 'react';
import "../style/Actor.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Actor = ({name,profile_path}) => {

    return (
    <div className="actor-card">
        <img src={profile_path ? (IMG_API + profile_path) : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'} alt={name} />
        <h6>{name}</h6>
    </div>  
    );
};

export default Actor;