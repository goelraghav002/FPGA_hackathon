import React from 'react'
import Navbar from '../components/Navbar'
import About from '../sections/About'
import Banner from '../sections/Banner'
import Timeline from '../sections/Timeline'
import FrequentlyAsked from '../sections/FrequentlyAsked'
import Organizers from '../sections/Organizers'
import Footer from '../components/Footer'
import Prizes from '../sections/Prizes'
import Speakers from '../sections/Speakers'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Timeline />
            <Prizes />
            <Speakers />
            <Organizers />
            <FrequentlyAsked />
            <Footer />
        </div>
    )
}

export default Home
