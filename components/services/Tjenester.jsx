import React from "react";
import styles from "./Tjenester.module.scss";
import Image from "next/image";
import { useModalContext, MODAL_TYPES } from "../../store/Context";

function Tjenester() {
    const modalCtx = useModalContext();

    return (
        <section className={`${styles.section} section`}>
            <div className={styles["text-wrapper"]}>
                <h2 className={styles.title}>Våre tjenester</h2>
                <p>
                    RestorFX is in the business of delivering the most
                    efficient, permanent, and innovative technology and products
                    on the market—with the goal of bringing the automotive
                    detailing and refinishing industry to the leading edge. We
                    do this by focusing on intelligent, smart tools that improve
                    the industry, drive innovation, and provide incredible value
                    and satisfaction to customers.
                </p>
            </div>
            <ul className={styles.list}>
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
            </ul>
        </section>
    );
}

export default Tjenester;
