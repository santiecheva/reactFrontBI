import React from 'react';
import './images.scss';

const Images = ({ Imagen, alt, ...otherImagesProps}) => (
      <img {...otherImagesProps} src={Imagen} alt={alt} />
  );
export default Images;