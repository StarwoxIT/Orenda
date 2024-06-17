import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Network from '../Network/Network'
import Providers from './Providers/Providers'
import Meet from './Meet/Meet'
import Treat from './Treat/Treat'
import Available from './Available/Available'
import Handle from './Handle/Handle'
import Journey from './Journey/Journey'
import Footer from '../Footer/Footer'
import Location from './Location/Location'
import Frequent from './Frequent/Frequent'

const Home = () => {
  return (
    <div className="home_container mx-auto">
        <div className="home_wrapper mx-auto">
            <Navbar/>
            <Hero/>
            <Network/>
            <Providers/>
            <Meet/>
            <Treat/>
            <Handle/>
            <Available/>
            <Journey/>
            <Location/>
            <Frequent/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
