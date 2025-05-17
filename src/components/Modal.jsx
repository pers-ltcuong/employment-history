import React from 'react';
import './Modal.css';

const Modal = ({ header, onClose, children, footer }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {header && (
          <h4 className="modal-title">
            {header}
          </h4>
        )}

        <div className="modal-scrollable-content">
          {children}
        </div>

        <div className="modal-footer">
          {footer ? (
            footer
          ) : (
            <button className="close-btn" onClick={onClose}>Close</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
