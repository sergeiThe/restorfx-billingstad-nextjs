import React from "react";
import { FaShieldAlt, FaCheckDouble } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import styles from "./BenefitSection.module.scss";
import { useModalContext } from "../../store/Context";
import { MODAL_TYPES } from "../../store/Context";

function BenefitSection() {
    const modalCtx = useModalContext();

    return (
        <section className={`${styles.section} section`}>
            <ul className={styles.list}>
                <li className={styles["list-item"]}>
                    <article>
                        <FaCheckDouble className={styles.icon} />
                        <h3>RestorFX Restaurering</h3>
                        <p>
                            RestorFX completely addresses surface damage to
                            permanently restore a vehicles exterior without
                            repainting. It maintains the integrity of an
                            automobile by not cutting away vital clear coat and
                            eliminates the need to repaint a car.
                        </p>
                        <button
                            className={styles["les-mer"]}
                            onClick={() => {
                                modalCtx.setModalType(MODAL_TYPES.RESTOR_FX);
                            }}
                        >
                            Les mer
                        </button>
                    </article>
                </li>
                <li className={styles["list-item"]}>
                    <article>
                        <FaShieldAlt className={styles.icon} />
                        <h3>ClearFX Beskyttelse</h3>
                        <p>
                            ClearFX is a range of professional solutions
                            chemically engineered for automotive surface
                            protection and modification. ClearFX attogenetic
                            solutions are formulated to generate a clear,
                            crystalline film that impregnates and protects the
                            substrate underneath.
                        </p>
                        <button
                            className={styles["les-mer"]}
                            onClick={() => {
                                modalCtx.setModalType(MODAL_TYPES.CLEAR_FX);
                            }}
                        >
                            Les mer
                        </button>
                    </article>
                </li>
                <li className={styles["list-item"]}>
                    <article>
                        <AiTwotoneCar className={styles.icon} />
                        <h3>Øk bilens verdi</h3>
                        <p>
                            RestorFX completely addresses surface damage to
                            permanently restore a vehicles exterior without
                            repainting. It maintains the integrity of an
                            automobile by not cutting away vital clear coat and
                            eliminates the need to repaint a car.
                        </p>
                    </article>
                </li>
            </ul>
        </section>
    );
}

export default BenefitSection;
