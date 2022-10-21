import React, { useState } from "react";
import OmOss from "../components/about/OmOss";
import OmRestorFX from "../components/about/OmRestorFX";
import BenefitSection from "../components/benefits/BenefitSection";
import Contact from "../components/contact/Contact";
import Messenger from "../components/contact/Messenger";
import Footer from "../components/footer/Footer";
import HeaderSection from "../components/header/HeaderSection";
import Modal from "../components/modals/Modal";
import ModalWindow from "../components/modals/ModalWindow";
import Tjenester from "../components/services/Tjenester";
import Head from "next/head";


export default function Home() {




  return (
    <React.Fragment>
      <Head>
        <title>RestorFX Billingstad - Bilpleie med ledende produkter i markedet i Asker og Bærum</title>
        <meta
          name="description"
          content="Vi er et team sertifiserte fagfolk innen bilpleie som spesialiserer seg på RestorFX lakkrestaurering og ClearFX lakkbeskyttelse. Asker og Bærum " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalWindow />
      <Messenger />
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
