import React from "react";
import Image from "next/image";
import styles from "./OmOss.module.scss";

function OmOss() {
    return (
        <section className={`${styles.section} section`} id="omoss">
            <Image
                alt="background restorfx"
                src={"/images/bg1.jpg"}
                layout="fill"
                objectFit="cover"
                className={styles.bg}
            />
            <h2 className={styles.title}>Om RestorFX Billingstad</h2>
            <p className={styles.text}>
                Vårt team av høykvalifiserte fagarbeidere innen foliering,
                lakkbeskyttelse, og lakkgjennoppretting har opparbeidet seg lang
                erfaring av å jobbe med ulike merker og typer kjøretøy.
                <br></br>
                <br></br>Ved å bruke ledende teknologier på markedet innen
                bilpleie, leverer vi det bilen din aller mest trenger. Vi jobber
                både med gamle og nye biler.
            </p>
        </section>
    );
}

export default OmOss;
