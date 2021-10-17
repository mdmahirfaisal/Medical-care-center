import React from 'react';
import img404 from './404-img.jpg';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <img src={img404} alt="" />
        </div>
    );
};

export default NotFound;