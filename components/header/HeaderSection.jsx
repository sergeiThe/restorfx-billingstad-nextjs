import React from "react";
import Header from "./Header";
import styles from "./HeaderSection.module.scss";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import {
    useModalContext,
    useNavContext,
    MODAL_TYPES,
} from "../../store/Context";
import MobileMenu, { Hamburger } from "./Menu";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function HeaderSection({ title, subtitle, isHomePage, videoUrl }) {
    const navCtx = useNavContext();
    const modalCtx = useModalContext();

    return (
        <React.Fragment>
            <AnimatePresence>
                {navCtx.navIsOpen && <MobileMenu />}
            </AnimatePresence>
            <div className={`${styles["header-section"]} section`}>
                <Image
                    alt="bg"
                    src={"/images/bg.avif"}
                    layout="fill"
                    objectFit="cover"
                    className={styles.bg}
                />
                <div className={styles.wrapper}>
                    <Header isHomePage={!!isHomePage} />
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{subtitle}</p>
                    {/* {isHomePage && (
                        <button
                            className="btn"
                            onClick={() =>
                                modalCtx.setModalType(
                                    MODAL_TYPES.HVA_ER_RESTOR_FX
                                )
                            }
                        >
                            Hva er RestorFX?
                        </button>
                    )} */}
                    {!isHomePage && (
                        <div className={styles["video-container"]}>
                            <iframe
                                width="100%"
                                height="100%"
                                className={styles.video}
                                src={videoUrl}
                                title="What is RestorFX?"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                <Hamburger />
            </div>
        </React.Fragment>
    );
}

export default HeaderSection;
