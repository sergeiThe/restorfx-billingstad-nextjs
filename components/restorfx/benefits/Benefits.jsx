import React from "react";
import styles from "./Benefits.module.scss";
import Image from "next/image";
import { fordeler } from "../../../data/restorfx-page";

function Benefits() {
    const benefitList = fordeler.map((f) => {
        return <li key={f}>{f}</li>;
    });
    return (
        <section className={`section ${styles.section}`}>
            <div className={styles.container}>
                <div className={styles["img-container"]}>
                    <div className={styles["img-box"]}>
                        <Image
                            src={"/images/porsche1.png"}
                            alt="tesla"
                            objectFit="contain"
                            layout="fill"
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.content}>
                    <h2>Hovedfordelene med RestorFX produktet</h2>
                    <ul>{benefitList}</ul>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
