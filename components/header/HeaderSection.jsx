import React from "react";
import Header from "./Header";
import styles from "./HeaderSection.module.scss";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import { useNavContext } from "../../store/Context";
import MobileMenu from "./Menu";
import { AnimatePresence } from "framer-motion";

function HeaderSection() {
    const navCtx = useNavContext();

    return (
        <React.Fragment>
            <AnimatePresence>
                {navCtx.navIsOpen && <MobileMenu />}
            </AnimatePresence>
            <div className={`${styles["header-section"]} section`}>
                <Image
                    alt="Logo"
                    src={"/images/bg.avif"}
                    layout="fill"
                    objectFit="cover"
                    className={styles.bg}
                />
                <div className={styles.wrapper}>
                    <Header />

                    <h1 className={styles.title}>
                        Revolusjonerende teknologi for ditt kjøretøy i
                        Billingstad
                    </h1>

                    <p className={styles.text}>
                        Delivering the most efficient, permanent, and innovative
                        technology and products on the market
                    </p>
                    <div className={styles["arrow-wrapper"]}>
                        <SlArrowDown className={styles.arrow} />
                    </div>
                </div>

                <div className="hamburger" onClick={navCtx.toggleNav}>
                    <div
                        className={
                            navCtx.navIsOpen
                                ? "burgerLine menuOpened"
                                : "burgerLine"
                        }
                    ></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeaderSection;
