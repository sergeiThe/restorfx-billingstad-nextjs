import React from "react";
import ReactDOM from "react-dom";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { useNavContext } from "../../store/Context";
import { motion } from "framer-motion";

function Menu() {
    const menuCtx = useNavContext();

    return (
        <motion.div
            className={styles["mobile-menu"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <nav>
                <ul>
                    <li onClick={menuCtx.toggleNav}>
                        <Link href={"#tjenester"}>Tjenester</Link>
                    </li>
                    <li onClick={menuCtx.toggleNav}>
                        <Link href={"#omoss"}>Om oss</Link>
                    </li>
                    <li onClick={menuCtx.toggleNav}>
                        <Link href={"#kontakt"}>Kontakt</Link>
                    </li>
                    <li onClick={menuCtx.toggleNav}>
                        <Link href={"#anmeldelser"}>Anmeldelser</Link>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
}

function MobileMenu() {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Menu />, document.getElementById("menu"))}
        </React.Fragment>
    );
}

export default MobileMenu;
