import React from 'react';

const Header = ({title}) => {
    return (  
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">Este proyecto Ilustra los personajes de la Famosa Serie de Rick y Morty</p>
                </div>
            </div>
        </header>
    );
}
 
export default Header;
