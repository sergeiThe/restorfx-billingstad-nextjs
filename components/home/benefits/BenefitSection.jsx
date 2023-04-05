import React from "react";
import { FaShieldAlt, FaCheckDouble } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { IoSparklesSharp } from "react-icons/io5";
import { MdInvertColors } from "react-icons/md";
import styles from "./BenefitSection.module.scss";
import { useModalContext } from "../../../store/Context";
import { MODAL_TYPES } from "../../../store/Context";

function BenefitSection() {
    const modalCtx = useModalContext();

    return (
        <section className={`${styles.section} section`} id="benefits">
            <ul className={styles.list}>
                <li className={styles["list-item"]}>
                    <article>
                        <MdInvertColors className={styles.icon} />
                        <h3>Gjenopprett den rike fargen</h3>
                        <p>
                            Få bilen din til å få tilbake sin opprinnelige rike
                            fargen uten polering og lakkfjerning
                        </p>
                    </article>
                </li>
                <li className={styles["list-item"]}>
                    <article>
                        <IoSparklesSharp className={styles.icon} />
                        <h3>Gjenoppliv jevnheten og glansen</h3>
                        <p>
                            Har du lyst til å få bilen til å stråle igjen som
                            den gjorde da den var ny?
                        </p>
                    </article>
                </li>
                <li className={styles["list-item"]}>
                    <article>
                        <AiTwotoneCar className={styles.icon} />
                        <h3>Øk bilens verdi</h3>
                        <p>
                            Øk eller bevar bilens verdi lengst mulig ved å
                            gjenopprette og beskytte bilen både innvendig og
                            utvendig.
                        </p>
                    </article>
                </li>
            </ul>
        </section>
    );
}

export default BenefitSection;
