import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import MenuLink from "./AnchorLink";
import Link from "next/link";
import { useModalContext, MODAL_TYPES } from "../../store/Context";
import AnchorLink from "./AnchorLink";
import PageLink from "./PageLink";

function Header({ isHomePage }) {
    const modalCtx = useModalContext();

    return (
        <header className={styles.header}>
            <Link className={styles["logo-wrapper"]} href={"/"}>
                <Image
                    className={styles.img}
                    alt="Logo"
                    src={"/images/rfx-logo.png"}
                    width="200"
                    height="100"
                    objectFit="contain"
                />
            </Link>

            {isHomePage && (
                <nav className={styles.nav}>
                    <ul className={styles["nav-list"]}>
                        <li>
                            <PageLink to={"/"} name={"Hjem"} />
                        </li>
                        <li>
                            <AnchorLink to="tjenester" name={"Tjeneter"} />
                        </li>
                        <li>
                            <AnchorLink to="omoss" name={"Om oss"} />
                        </li>
                        <li>
                            <AnchorLink to="kontakt" name={"Kontakt"} />
                        </li>
                        <li>
                            <PageLink
                                to={"restorfx"}
                                name={"RestorFX Lakkfornyelse"}
                            />
                        </li>
                        <li>
                            <PageLink
                                to={"clearfx"}
                                name={"ClearFX Lakkbeskyttelse"}
                            />
                        </li>
                    </ul>
                </nav>
            )}
            {!isHomePage && (
                <nav className={styles.nav}>
                    <ul className={styles["nav-list"]}>
                        <li>
                            <PageLink to={"/"} name={"Hjem"} />
                        </li>
                        <li>
                            <Link href={"/#tjenester"} scroll={false}>
                                Tjenester
                            </Link>
                        </li>
                        <li>
                            <Link href={"/#omoss"} scroll={false}>
                                Om oss
                            </Link>
                        </li>
                        <li>
                            <AnchorLink to="kontakt" name={"Kontakt"} />
                        </li>
                        <li>
                            <PageLink
                                to={"restorfx"}
                                name={"RestorFX Lakkfornyelse"}
                            />
                        </li>
                        <li>
                            <PageLink
                                to={"clearfx"}
                                name={"ClearFX Lakkbeskyttelse"}
                            />
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
