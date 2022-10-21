import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdMyLocation } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

function Footer() {
    return (
        <React.Fragment>
            <footer className={`${styles.section} section`} id="kontakt">
                <Image
                    alt="Logo"
                    src={"/images/teslaceramic1.jpg"}
                    layout="fill"
                    objectFit="cover"
                    className={styles.bg}
                />
                <div className={styles["logo-wrapper"]}>
                    <Image
                        alt="Logo"
                        src={"/images/logo2.png"}
                        width="200"
                        height="100"
                        objectFit="contain"
                    />
                </div>
                <a
                    href="https://goo.gl/maps/8tZKCMNPRck6JYdY6"
                    rel="noreferrer"
                    target="_blank"
                    className={styles["contact-wrapper"]}
                >
                    <MdMyLocation className={styles.icon} />
                    <span>Olav Brunborgsvei 4, 1396 Billingstad</span>
                </a>
                <a
                    href="mailto:rfx.asker.barum@gmail.com"
                    className={styles["contact-wrapper"]}
                >
                    <MdEmail className={styles.icon} />
                    <span>rfx.asker.barum@gmail.com</span>
                </a>
                <a href="tel:+4746700299" className={styles["contact-wrapper"]}>
                    <MdPhone className={styles.icon} />
                    <span>+47 467 00 299</span>
                </a>
                <div className={styles["social-icons"]}>
                    <a
                        href="https://www.facebook.com/rfx.billingstad"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookSquare />
                    </a>
                    <a
                        href="https://www.instagram.com/restorfx_billingstad/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://m.me/rfx.billingstad"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <BsMessenger />
                    </a>
                </div>
            </footer>
            <div className={styles.bottom}>
                2022 @ Rettigheter reservert - RestorFX Billingstad
            </div>
        </React.Fragment>
    );
}

export default Footer;
