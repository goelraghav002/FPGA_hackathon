import React from 'react'
import Navbar from '../components/Navbar'
import About from '../sections/About'
import Banner from '../sections/Banner'
import Timeline from '../sections/Timeline'
import FrequentlyAsked from '../sections/FrequentlyAsked'
import Sponsers from '../sections/Sponsers'
import Footer from '../components/Footer'
import Prizes from '../sections/Prizes'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Timeline />
            <Prizes />
            <FrequentlyAsked />
            <Sponsers />
            <Footer />
        </div>
    )
}

export default Home
