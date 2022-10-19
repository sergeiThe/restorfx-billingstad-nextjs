import React from "react";
import OmOss from "../components/about/OmOss";
import BenefitSection from "../components/benefits/BenefitSection";
import HeaderSection from "../components/header/HeaderSection";
import Tjenester from "../components/services/Tjenester";


export default function Home() {
  return (
    <React.Fragment>

      <HeaderSection />
      <main>
        <BenefitSection />
        <OmOss />
        <Tjenester />
      </main>
    </React.Fragment>
  )
}
