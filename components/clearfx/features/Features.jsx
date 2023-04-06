import React from "react";
import { features } from "../../../data/clearfx-page";
import styles from "./Features.module.scss";

function Features() {
    const featureList = features.map((f) => {
        return (
            <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
            </li>
        );
    });
    return (
        <section className={`${styles.section} section`}>
            <div className="container">
                <ul className={styles.list}>{featureList}</ul>
            </div>
        </section>
    );
}

export default Features;
