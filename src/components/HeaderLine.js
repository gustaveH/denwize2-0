import React from 'react';

const HeaderLine = (props) => {
  return (
    <div>
      <div className='section-header'>
        <h1 className='header-text'>{props.headerLine}</h1>
        <div className='hr-line'>
          <hr className='header-line' />
        </div>
      </div>
    </div>
  );
};

export default HeaderLine;
