import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ header, onClose, children, footer }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Modal content
  const modalContent = (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="document"
        aria-labelledby="modal-title"
      >
        {header && (
          <h4 id="modal-title" className="modal-title">
            {header}
          </h4>
        )}
        <div className="modal-scrollable-content">{children}</div>
        <div className="modal-footer">
          {footer || <button className="close-btn" onClick={onClose}>Close</button>}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
};

export default Modal;
