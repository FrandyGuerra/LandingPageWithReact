import React from 'react';
import PropTypes from 'prop-types';

export const Card=({url,alt,title,textBody,btnUrl,btnLabel})=>{
    return(
    
        <div className="card text-center mb-4">
            <img src={url} alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{textBody}</p>        
            </div>
            <div className="card-footer">
                <a href={btnUrl} className="btn btn-primary">{btnLabel}</a>
            </div>
        </div>
    
    );
}

Card.propTypes = {
    title:PropTypes.string,
    alt: PropTypes.string,
    url: PropTypes.string,
    textBody:PropTypes.string,
    btnUrl: PropTypes.string,
    btnLabel: PropTypes.number
}