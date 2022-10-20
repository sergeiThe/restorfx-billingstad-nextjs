import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

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
                        <Link href="#tjenester">Tjenester</Link>
                    </li>
                    <li className={styles.text}>
                        <Link href="#omoss">Om oss</Link>
                    </li>
                    <li className={styles.text}>
                        <Link href="#kontakt">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
