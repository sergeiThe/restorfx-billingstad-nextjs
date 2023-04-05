import React from 'react'
import Footer from '../components/footer/Footer'
import Messenger from '../components/contact/Messenger'
import HeaderSection from '../components/header/HeaderSection'
import { headerContent, videoUrl } from '../data/restorfx-page'
import Features from '../components/restorfx/features/Features'
import EgnetFor from '../components/restorfx/egnetfor/EgnetFor'
import Benefits from '../components/restorfx/benefits/Benefits'



function restorfx() {
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

export default restorfx