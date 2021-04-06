import React from 'react';

const Button = (props) => {
  return (
    <>
      <button className='button'>{props.message}</button>
    </>
  );
};

export default Button;
