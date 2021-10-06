import React from 'react';
import './styles.css';

const index = ({ text, link }) => {
  return (
    <div className="card-container">
      <div>
        <h3>{text}</h3>
        {link && <a>{link}</a>}
      </div>
    </div>
  );
};

export default index;
