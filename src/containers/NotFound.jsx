import React from 'react';
import {Link} from 'react-router-dom';
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
    <React.Fragment>
        <section className="notFound">
            <div className="error-container"> 
                <h1 className="error">No encontrado</h1>
                <h1 className="error-num">404</h1>
                <Link to="/">
                <button className="button">Ir al Home</button>
                </Link>
            </div>

        </section>
       
    </React.Fragment>
);

export default NotFound;