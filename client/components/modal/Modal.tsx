import React, { ReactNode } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onAction?: () => void;
  actionBtnName?: string;
  loading: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  onAction,
  actionBtnName = "process",
  loading
}) => {
  const modalClassName = isOpen ? "modal-container open" : "modal-container";

  return (
    <div className={modalClassName}>
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          {onAction && (
            <button className="save-button" onClick={onAction} disabled={loading}>
              {loading ?  "processing..." :  actionBtnName}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
