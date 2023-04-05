import React from "react";
import styles from "./MainTechnology.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useModalContext, MODAL_TYPES } from "../../../store/Context";
import PageLink from "../../header/PageLink";

function MainTechnology() {
    const modalCtx = useModalContext();

    return (
        <section className={`${styles.section} section`}>
            <div className={styles.card}>
                <Image
                    alt="bg"
                    src={"/images/bil.jpg"}
                    layout="fill"
                    objectFit="cover"
                    className={styles.bg}
                />
                <div className={styles.content}>
                    <h3 className={styles.title}>ClearFX Lakkbeskyttelse</h3>
                    <p className={styles.p}>
                        Supervannavvisende lakkforsegling for bil.<br></br>{" "}
                        RestorFX var banebrytende med lanseringen av den mest
                        avanserte teknologien for lakkgjenoppretting og
                        lakkreparasjon på markedet. Teknologien vil gjenopprette
                        overflaten på et kjøretøy slik at den ser ut som en helt
                        ny bil, rett fra fabrikken.
                    </p>
                    <a href="/clearfx" className="btn">
                        Mer info
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    alt="bg"
                    src={"/images/bil.jpg"}
                    layout="fill"
                    objectFit="cover"
                    className={styles.bg}
                />
                <div className={styles.content}>
                    <h3 className={styles.title}>RestorFX Lakkfornyelse</h3>
                    <p className={styles.p}>
                        Gi bilen din RestorFX lakkfornyelse og alle
                        utseendemessige problemer med bilen vil forsvinne.
                        Behandlingen skjer i tre steg.
                    </p>
                    <ul>
                        <li>Renew - fjerning av klarlakksskade</li>
                        <li>Refinish - reparasjon av arr og riper</li>
                        <li>Retain - ekstra lag med beskyttelse</li>
                    </ul>
                    <a href="/restorfx" className="btn">
                        Mer info
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MainTechnology;
