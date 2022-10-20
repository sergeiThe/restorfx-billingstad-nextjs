import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { motion } from "framer-motion";
import { useModalContext, MODAL_TYPES } from "../../store/Context";
import { IoMdCloseCircle } from "react-icons/io";

const ModalWindow = (props) => {
    const modalCtx = useModalContext();

    return (
        <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles["text-wrapper"]}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.text}>{props.text}</p>
            </div>

            <IoMdCloseCircle
                onClick={() => {
                    modalCtx.setModalType(MODAL_TYPES.NONE);
                }}
                className={styles.close}
            />
        </motion.div>
    );
};

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalWindow title={props.title} text={props.text} />,
                document.querySelector("#modal")
            )}
        </React.Fragment>
    );
}

export default Modal;
