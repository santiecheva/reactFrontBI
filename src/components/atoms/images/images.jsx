import React from 'react';
import './images.scss';

const Images = ({ Imagen, alt, ...otherImagesProps }) => (
    <div className="content-image">
        <img {...otherImagesProps} src={Imagen} alt={alt} />
    </div>
);
export default Images;