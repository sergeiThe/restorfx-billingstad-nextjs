import React from "react";
import styles from "./Tjenester.module.scss";
import Image from "next/image";
import { useModalContext, MODAL_TYPES } from "../../store/Context";
import { prices } from "../../data/services";

function Tjenester() {
    const modalCtx = useModalContext();

    const priceList = prices.map((service) => {
        return (
            <li key={service.service + service.price}>
                <span>{service.service}</span>
                <span>{service.price} kr</span>
            </li>
        );
    });

    return (
        <section className={`${styles.section} section`} id="tjenester">
            <div className="container">
                <div className={styles["text-wrapper"]}>
                    <h2 className={styles.title}>Våre tjenester og priser</h2>
                    <p>
                        Av de tusenvis av produktene som finnes i markedet, kan
                        ingenting sammenlignes med RestorFX. Det revolusjonerer
                        måten bilindustrien og bransjen for kosmetisk
                        klargjøring etterlakkerer. Med kontinuerlig testing og
                        evaluering forblir RestorFX det mest avanserte produktet
                        som er tilgjengelig.
                    </p>
                    <p>
                        <strong>
                            -20% rabatt for medlemmer i Porsche Club
                        </strong>
                    </p>
                </div>
                <div className={styles.prices}>
                    <ul className={styles.pricelist}>{priceList}</ul>
                </div>
            </div>
        </section>
    );
}

export default Tjenester;
