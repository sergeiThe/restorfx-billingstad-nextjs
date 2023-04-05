import React from "react";
import { useModalContext, MODAL_TYPES } from "../../store/Context";
import Modal from "./Modal";
import services from "../../data/services";

function ModalWindow() {
    const modalCtx = useModalContext();

    const closeModal = () => {
        modalCtx.setModalType(MODAL_TYPES.NONE);
        console.log("Closed!");
    };

    const modalType = services.get(modalCtx.modalType);

    return (
        <React.Fragment>
            {services.has(modalCtx.modalType) && (
                <Modal
                    title={modalType.title}
                    shortDesc={modalType.shortDesc}
                    longDesc={modalType.longDesc}
                    videoUrl={modalType.videoUrl}
                    features={modalType.features.map((f) => {
                        return <li key={f}>{f}</li>;
                    })}
                    onConfirm={closeModal}
                />
            )}
        </React.Fragment>
    );
}

export default ModalWindow;
