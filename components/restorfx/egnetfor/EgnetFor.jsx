import React from "react";
import { egnetFor } from "../../../data/restorfx-page";
import styles from "./EgnetFor.module.scss";
import Image from "next/image";

function EgnetFor() {
    return (
        <section className={`${styles.section} section`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Hvilke bilder er det egnet for?</h2>
                    <p>{egnetFor}</p>
                </div>

                <div className={styles["img-container"]}>
                    <div className={styles["img-box"]}>
                        <Image
                            src={"/images/tesla2.png"}
                            alt="tesla"
                            objectFit="contain"
                            layout="fill"
                            className={styles.img}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EgnetFor;
