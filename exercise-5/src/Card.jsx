import React from 'react';

function Card({ name, class: className, hobbies, image }) {
  return (
    <div className="card">
      <img src={image.src} alt={image.alt} />
      <h2>{name}</h2>
      <p>Class: {className}</p>
      <p>Hobbies: {hobbies}</p>
    </div>
  );
}

export default Card;