import React from "react";
import styles from "./Contact.module.scss";
import { SlArrowDown } from "react-icons/sl";

function Contact() {
    return (
        <section className={`${styles.section} section`}>
            <h2>Lurer du på noe, send oss gjerne spørsmål</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className={styles["arrow-wrapper"]}>
                <SlArrowDown className={styles.arrow} />
            </div>
        </section>
    );
}

export default Contact;
