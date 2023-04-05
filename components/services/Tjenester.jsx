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
            <div className={styles["text-wrapper"]}>
                <h2 className={styles.title}>Våre tjenester og priser</h2>
                <p>
                    Av de tusenvis av produktene som finnes i markedet, kan
                    ingenting sammenlignes med RestorFX. Det revolusjonerer
                    måten bilindustrien og bransjen for kosmetisk klargjøring
                    etterlakkerer. Med kontinuerlig testing og evaluering
                    forblir RestorFX det mest avanserte produktet som er
                    tilgjengelig.
                </p>
                <p>
                    <strong>-20% rabatt for medlemmer i Porsche Club</strong>
                </p>
            </div>
            <div className={styles.prices}>
                <ul className={styles.pricelist}>{priceList}</ul>
            </div>
            {/* <ul className={styles.list}>
                <li
                    className={styles["list-item"]}
                    onClick={() => {
                        modalCtx.setModalType(MODAL_TYPES.RESTOR_FX);
                    }}
                >
                    <Image
                        alt="bil"
                        src={"/images/ford.jpg"}
                        layout="fill"
                        objectFit="cover"
                        className={styles.bg}
                    />
                    <h3>RestorFX Lakkrestaurering</h3>
                    <button>Les mer</button>
                </li>
                <li
                    className={styles["list-item"]}
                    onClick={() => {
                        modalCtx.setModalType(
                            MODAL_TYPES.FRONTLYS_RESTAURERING
                        );
                    }}
                >
                    <Image
                        alt="bil"
                        src={"/images/jaguar.jpg"}
                        layout="fill"
                        objectFit="cover"
                        className={styles.bg}
                    />
                    <h3>FX Frontlyktrestaurering</h3>
                    <button>Les mer</button>
                </li>
                <li
                    className={styles["list-item"]}
                    onClick={() => {
                        modalCtx.setModalType(MODAL_TYPES.CLEAR_FX);
                    }}
                >
                    <h3>ClearFX Lakkbeskyttelse</h3>
                    <button>Les mer</button>
                    <Image
                        alt="bil"
                        src={"/images/teslaceramic1.jpg"}
                        layout="fill"
                        objectFit="cover"
                        className={styles.bg}
                    />
                </li>
                <li className={styles["list-item"]}>
                    <Image
                        alt="bil"
                        src={"/images/bil.jpg"}
                        layout="fill"
                        objectFit="cover"
                        className={styles.bg}
                    />
                    <h3>Kosmetisk klargjøring</h3>
                </li>
                <li className={styles["list-item"]}>
                    <Image
                        alt="bil"
                        src={"/images/jeep.jpg"}
                        layout="fill"
                        objectFit="cover"
                        className={styles.bg}
                    />
                    <h3>Andre bilpleie tjenester</h3>
                </li>
            </ul> */}
        </section>
    );
}

export default Tjenester;
