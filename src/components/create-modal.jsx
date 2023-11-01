import React from 'react';
import style from '../style/modal.module.css'

function CreateModal(props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className={style.ParentDiv}>
      <div className={style.modalContent}>
        <span className={style.close} onClick={onClose}><h6>Close</h6></span>
        {children}
      </div>
    </div>
  );
}

export default CreateModal;