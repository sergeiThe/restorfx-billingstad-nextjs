import React, { useState } from "react";
import OmOss from "../components/about/OmOss";
import OmRestorFX from "../components/about/OmRestorFX";
import BenefitSection from "../components/benefits/BenefitSection";
import Contact from "../components/contact/Contact";
import Messenger from "../components/contact/Messenger";
import Footer from "../components/footer/Footer";
import HeaderSection from "../components/header/HeaderSection";
import Script from 'next/script'
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
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-W32FPPW');
          `
        }}
      />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W32FPPW"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R3W7NW1TXX"></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-R3W7NW1TXX');
      `}
      </Script>
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
    </React.Fragment >
  )
}
