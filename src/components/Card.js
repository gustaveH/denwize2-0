import React from 'react';
const Card = (props) => {
  return (
    <div className='card'>
      <img alt='Avatar' src={props.avatar} className='image-avatar' />
      <div>
        <h1 className='card-service'>{props.service}</h1>
        <p className='card-message'>{props.message}</p>
      </div>
    </div>
  );
};

export default Card;
