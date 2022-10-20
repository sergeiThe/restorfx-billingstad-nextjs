import React, { useState } from "react";
import OmOss from "../components/about/OmOss";
import OmRestorFX from "../components/about/OmRestorFX";
import BenefitSection from "../components/benefits/BenefitSection";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import HeaderSection from "../components/header/HeaderSection";
import Modal from "../components/modals/Modal";
import ModalWindow from "../components/modals/ModalWindow";
import Tjenester from "../components/services/Tjenester";


export default function Home() {




  return (
    <React.Fragment>
      <ModalWindow />
      <HeaderSection />
      <main>
        <BenefitSection />
        <OmOss />
        <Tjenester />
        <OmRestorFX />
        <Contact />
        <Footer />
      </main>
    </React.Fragment>
  )
}
