import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import OurTeam from './components/OurTeam/OurTeam'
import PrivacyPolicy from './components/Privacy/PrivacyPolicy'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import ContactUsPage from './components/Contact Us/ContactUsPage'
import Assessment from './components/Assessment/Assessment'
import Assessment1 from './components/Assessment/Assessment1/Assessment1'
import Assessment2 from './components/Assessment/Assessment2/Assessment2'
import Assessment3 from './components/Assessment/Assessment3/Assessment3'
import Assessment4 from './components/Assessment/Assessment4/Assessment4'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/ourteam" element={<OurTeam/>} />
              <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
              <Route path="/contact" element={<ContactUsPage/>} />
              <Route path="/assessment" element={<Assessment/>} />
              <Route path="/assessment1" element={<Assessment1/>} />
              <Route path="/assessment2" element={<Assessment2/>} />
              <Route path="/assessment3" element={<Assessment3/>} />
              <Route path="/assessment4" element={<Assessment4/>} />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </div>
  )
}

export default App