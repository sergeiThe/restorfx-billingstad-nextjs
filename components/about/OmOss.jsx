import React from "react";
import Image from "next/image";
import styles from "./OmOss.module.scss";

function OmOss() {
    return (
        <section className={`${styles.section} section`}>
            <Image
                alt="background restorfx"
                src={"/images/bg1.jpg"}
                layout="fill"
                objectFit="cover"
                className={styles.bg}
            />
            <h2 className={styles.title}>Om RestorFX Billingstad</h2>
            <p className={styles.text}>
                RestorFX is in the business of delivering the most efficient,
                permanent, and innovative technology and products on the
                market—with the goal of bringing the automotive detailing and
                refinishing industry to the leading edge. We do this by focusing
                on intelligent, smart tools that improve the industry, drive
                innovation, and provide incredible value and satisfaction to
                customers.
            </p>
        </section>
    );
}

export default OmOss;
