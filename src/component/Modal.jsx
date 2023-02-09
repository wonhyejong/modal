import React from 'react';
import './Modal.css'

const Modal = (props) => {
    const {modalOpen,setModalOpen,modalContents} = props ;
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <div className={modalOpen ? "openModal modal" : "modal"}>
            <div>
                {modalContents}
            </div>
            <button className='close' onClick={closeModal}>
                닫기
            </button>
        </div>
    );
};

export default Modal;