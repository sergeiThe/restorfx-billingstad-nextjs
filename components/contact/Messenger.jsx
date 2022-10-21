import React from "react";
import { BsMessenger } from "react-icons/bs";
import styles from "./Messenger.module.scss";

function Messenger() {
    return (
        <a href="https://m.me/rfx.billingstad" rel="noreferrer" target="_blank">
            <BsMessenger className={styles.icon} />
        </a>
    );
}

export default Messenger;
