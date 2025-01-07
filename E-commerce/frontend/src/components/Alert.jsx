import React from 'react';
import './Alert.css';

const Alert = ({ message, type, onClose }) => {
  if (!message) return null;  // Do not render if no message
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">&times;</button>
    </div>
  );
};

export default Alert;
