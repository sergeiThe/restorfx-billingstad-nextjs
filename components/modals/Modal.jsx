import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useModalContext, MODAL_TYPES } from "../../store/Context";
import { IoMdCloseCircle } from "react-icons/io";
import services from "../../data/services";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
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
                <p className={styles.text}>{props.shortDesc}</p>
                <p className={styles.text}>{props.longDesc}</p>
                <ul>{props.features}</ul>
            </div>

            <div>
                <iframe
                    width="560"
                    height="315"
                    src={props.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
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
                <Backdrop onConfirm={props.onConfirm} />,
                document.querySelector("#backdrop")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    title={props.title}
                    shortDesc={props.shortDesc}
                    longDesc={props.longDesc}
                    videoUrl={props.videoUrl}
                    features={props.features}
                />,
                document.querySelector("#modal")
            )}
        </React.Fragment>
    );
}

export default Modal;
