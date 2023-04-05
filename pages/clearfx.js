import React from 'react'
import Footer from '../components/footer/Footer'
import Messenger from '../components/contact/Messenger'
import HeaderSection from '../components/header/HeaderSection'
import { headerContent, videoUrl } from '../data/clearfx-page'
import Features from '../components/clearfx/features/Features'
import EgnetFor from '../components/clearfx/egnetfor/EgnetFor'
import Benefits from '../components/clearfx/benefits/Benefits'



function clearfx() {
    return (
        <React.Fragment>
            <Messenger />
            <HeaderSection title={headerContent.title} subtitle={headerContent.subtitle} videoUrl={videoUrl} />
            <main>
                <Features />
                <EgnetFor />
                <Benefits />
                <Footer />
            </main>
        </React.Fragment>
    )
}

export default clearfx