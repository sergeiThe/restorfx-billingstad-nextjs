import React from "react";
import Image from "next/image";
import styles from "./OmRestorFX.module.scss";

function OmRestorFX() {
    return (
        <section className={`${styles.section} section`}>
            <Image
                alt="Logo"
                src={"/images/bil.jpg"}
                layout="fill"
                objectFit="cover"
                className={styles.bg}
            />
            <div className={styles["content-wrapper"]}>
                <div className={styles["text-wrapper"]}>
                    <h2 className={styles.title}>Om RestorFX</h2>
                    <p className={styles.text}>
                        Etter 6 år med forskning og utvikling ble RestorFX
                        International lansert i 2006. Selskapet er basert i
                        Pacific Northwest, med hundrevis av partnere over hele
                        verden. Over 100 000 kjøretøy har blitt oppdatert med
                        RestorFX, og oppdaterer hundrevis av kjøretøy hver dag.
                        <br></br>
                        <br></br>
                        Som et globalt synergistisk merke, er RestorFX dedikert
                        til å skape produkter og systemer som kontinuerlig
                        setter en ny standard for fortreffelighet og gradvis
                        øker toppen av bilrekondisjoneringsteknologier.
                    </p>
                </div>
                <div className={styles["video-wrapper"]}>
                    <iframe
                        width="100%"
                        height="100%"
                        className={styles.video}
                        src="https://www.youtube.com/embed/UvqOZHumTr8"
                        title="What is RestorFX?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default OmRestorFX;
