import React from 'react';

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div>
      {/* Modal overlay */}
      <div className="modal-backdrop show" style={{ opacity: 0.5, zIndex: 1040 }}></div>

      {/* Modal */}
      <div className="modal show d-block" style={{ zIndex: 1050 }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Survey</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
