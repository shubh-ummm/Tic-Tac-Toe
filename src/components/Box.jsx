// Box.jsx
import React from 'react';
import './styles.css';

const Box = ({ value, onClick }) => {
  const style = value === 'X' ? 'box x' : 'box o';
  
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Box;
