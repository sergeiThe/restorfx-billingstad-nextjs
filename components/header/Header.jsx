import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Link } from "react-scroll";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles["logo-wrapper"]}>
                <Image
                    alt="Logo"
                    src={"/images/rfx-logo.png"}
                    width="200"
                    height="100"
                    objectFit="contain"
                />
            </div>
            <nav className={styles.nav}>
                <ul className={styles["nav-list"]}>
                    <li className={styles.text}>
                        <Link
                            to="tjenester"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Tjenester
                        </Link>
                    </li>
                    <li className={styles.text}>
                        <Link
                            to="omoss"
                            spy={true}
                            offset={50}
                            smooth={true}
                            duration={500}
                        >
                            Om oss
                        </Link>
                    </li>
                    <li className={styles.text}>
                        <Link
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
        </header>
    );
}

export default Header;
