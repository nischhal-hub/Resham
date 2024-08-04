import React from "react";
import ReactDOM from "react-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const Modal = ({ children,close }) => {
    const modalRoot = document.getElementById("modal-root");

    return ReactDOM.createPortal(
        <div className="w-full h-full fixed z-50 bg-primary/50 flex justify-center items-center">
            <div className="modal relative min-w-[500px] min-h-[200px] bg-white rounded-md p-4">
                <div className="absolute top-4 right-4 cursor-pointer" onClick={close}>
                    <FaRegTimesCircle className="text-destructive" />
                </div>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
