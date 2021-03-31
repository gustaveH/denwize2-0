import React from 'react';

const HeaderLine = (props) => {
  return (
    <div className='section-header'>
      <h1 className='header-text'>{props.headerLine}</h1>
      <span className='header-line' />
    </div>
  );
};

export default HeaderLine;
