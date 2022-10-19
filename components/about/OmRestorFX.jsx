import React from "react";
import Image from "next/image";
import styles from "./OmRestorFX.module.scss";

function OmRestorFX() {
    return (
        <section className={`${styles.section} section`}>
            <div className={styles["content-wrapper"]}>
                <div className={styles["text-wrapper"]}>
                    <h2 className={styles.title}>Om RestorFX</h2>
                    <p className={styles.text}>
                        RestorFX is in the business of delivering the most
                        efficient, permanent, and innovative technology and
                        products on the market—with the goal of bringing the
                        automotive detailing and refinishing industry to the
                        leading edge. We do this by focusing on intelligent,
                        smart tools that improve the industry, drive innovation,
                        and provide incredible value and satisfaction to
                        customers.
                    </p>
                </div>
                <div className={styles["video-wrapper"]}>
                    <iframe
                        width="100%"
                        height="100%"
                        className={styles.video}
                        src="https://www.youtube.com/embed/UvqOZHumTr8"
                        title="What is RestorFX?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default OmRestorFX;
