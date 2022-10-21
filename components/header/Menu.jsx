import React from "react";
import ReactDOM from "react-dom";
import styles from "./Menu.module.scss";
import { Link } from "react-scroll";
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
                    <li>
                        <Link
                            onClick={menuCtx.toggleNav}
                            to="tjenester"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Tjenester
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={menuCtx.toggleNav}
                            to="omoss"
                            spy={true}
                            offset={50}
                            smooth={true}
                            duration={500}
                        >
                            Om oss
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={menuCtx.toggleNav}
                            to="kontakt"
                            smooth={true}
                            spy={true}
                            offset={50}
                            duration={500}
                        >
                            Kontakt
                        </Link>
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
