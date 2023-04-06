import React from "react";
import ReactDOM from "react-dom";
import styles from "./Menu.module.scss";
import { useNavContext } from "../../store/Context";
import { motion } from "framer-motion";
import AnchorLink from "./AnchorLink";
import PageLink from "./PageLink";
import Link from "next/link";
import { useRouter } from "next/router";

function Menu() {
    const menuCtx = useNavContext();

    const router = useRouter();

    const goTo = (location) => {
        menuCtx.toggleNav();
        router.push("/" + location);
    };

    return (
        <motion.div
            className={styles["mobile-menu"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={menuCtx.toggleNav}
        >
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={() => menuCtx.toggleNav}>Hjem</a>
                        </Link>
                    </li>
                    <li>
                        <AnchorLink
                            to="tjenester"
                            name={"Tjeneter"}
                            onClick={menuCtx.toggleNav}
                        />
                    </li>
                    <li>
                        <AnchorLink
                            to="omoss"
                            name={"Om oss"}
                            onClick={menuCtx.toggleNav}
                        />
                    </li>
                    <li>
                        <AnchorLink
                            to="kontakt"
                            name={"Kontakt"}
                            onClick={menuCtx.toggleNav}
                        />
                    </li>
                    <li>
                        <Link href="/restorfx">
                            <a onClick={() => menuCtx.toggleNav}>
                                RestorFX Lakkfornyelse
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/clearfx">
                            <a onClick={() => menuCtx.toggleNav}>
                                ClearFX Lakkbeskyttelse
                            </a>
                        </Link>
                    </li>
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
