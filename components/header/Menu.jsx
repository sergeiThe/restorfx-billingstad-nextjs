import React from "react";
import ReactDOM from "react-dom";
import styles from "./Menu.module.scss";
import { Link } from "react-scroll";
import { useNavContext } from "../../store/Context";
import { motion } from "framer-motion";
import MenuLink from "./AnchorLink";

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
                    <MenuLink
                        to={"tjenester"}
                        name={"Tjenester"}
                        onClick={menuCtx.toggleNav}
                    />
                    <MenuLink
                        to={"omoss"}
                        name={"Om oss"}
                        onClick={menuCtx.toggleNav}
                    />
                    <MenuLink
                        to={"kontakt"}
                        name={"Tjenester"}
                        onClick={menuCtx.toggleNav}
                    />
                </ul>
            </nav>
        </motion.div>
    );
}

export function Hamburger() {
    const navCtx = useNavContext();
    return (
        <div className="hamburger" onClick={navCtx.toggleNav}>
            <div
                className={
                    navCtx.navIsOpen ? "burgerLine menuOpened" : "burgerLine"
                }
            ></div>
        </div>
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
