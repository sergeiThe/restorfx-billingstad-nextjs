import React from "react";
import { useModalContext, MODAL_TYPES } from "../../store/Context";
import Modal from "./Modal";
import services from "../../data/services";

function ModalWindow() {
    const modalCtx = useModalContext();
    return (
        <React.Fragment>
            {modalCtx.modalType === MODAL_TYPES.RESTOR_FX ? (
                <Modal
                    title={services.at(0).title}
                    text={services.at(0).longDesc}
                />
            ) : modalCtx.modalType === MODAL_TYPES.CLEAR_FX ? (
                <Modal
                    title={services.at(1).title}
                    text={services.at(1).longDesc}
                />
            ) : modalCtx.modalType === MODAL_TYPES.FRONTLYS_RESTAURERING ? (
                <Modal
                    title={services.at(2).title}
                    text={services.at(2).longDesc}
                />
            ) : null}
        </React.Fragment>
    );
}

export default ModalWindow;
