// pages/index.js
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import CardSection from '../components/CardSection'
import WeatherSection from '../components/WeatherSection'
import TodoListSection from '../components/TodoListSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CardSection />
      <WeatherSection />
      <TodoListSection />
      <ContactSection />
    </div>
  )
}

export default Home
