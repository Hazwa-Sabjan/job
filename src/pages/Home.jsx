import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Footer from '../components/Footer'
import ApplyJob from './ApplyJob'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing />
      <Footer />
      
  

    </div>
  )
}

export default Home