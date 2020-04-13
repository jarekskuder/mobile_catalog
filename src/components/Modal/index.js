import React from "react";

const Modal = ({data, closeModal}) => {
    return(
        <div className="modalOverlay" onClick={() => closeModal(false)}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <div className="closeButton" onClick={() => closeModal(false)} />
                <p style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '20px'}}>
                    {`Phone name: ${data.displayName}`}
                </p>
                <p style={{fontSize: '14px'}}>{`Phone id: ${data.id}`}</p>
            </div>
        </div>
    );
};

export default Modal;
