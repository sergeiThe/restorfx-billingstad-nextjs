import React from "react";
import styles from "./Contact.module.scss";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-scroll";

function Contact() {
    return (
        <section className={`${styles.section} section`}>
            <h2>Lurer du på noe, send oss gjerne spørsmål</h2>
            <p>
                Lurer du på hva du bør ha for bilen din, hvor mye det vil koste
                (for pris kan variere utfra tilstanden av bilen) eller rett og
                slett bestille, ikke nøl med å ta kontakt med oss. RestorFX er
                ikke noe du vil gå glipp av i dag.
            </p>
            <div className={styles["arrow-wrapper"]}>
                <Link
                    to="kontakt"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <SlArrowDown className={styles.arrow} />
                </Link>
            </div>
        </section>
    );
}

export default Contact;
