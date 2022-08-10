import React from 'react';
import "../style/Actor.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Actor = ({name,character,profile_path}) => {

    return (
    <div className="actor">
        <div className="actor-card">
            <img src={profile_path ? (IMG_API + profile_path) : 'https://static.thenounproject.com/png/1554490-200.png'} alt={name} />
            <div className="actor-info">
                <h6>{name}</h6>
            </div>
        </div>  
    </div>
    );
};

export default Actor;