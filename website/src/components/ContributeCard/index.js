import React from 'react';
import './styles.css';

const ContributeCard = ({ text, link }) => {
  return (
    <div className="card-container">
      <div>
        <h2>{text}</h2>
        {link && <a>{link}</a>}
      </div>
    </div>
  );
};

export default ContributeCard;
