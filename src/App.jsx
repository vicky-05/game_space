import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GenresSection from './components/GenresSection'
import TopGamesSection from './components/TopGameSection'
import GameFeatures from './components/GameFeatures'
import TrailerSection from './components/TrailerSection'
import Showcase from './components/Showcase'
import StackedGameImages from './components/StackedGameImages'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import CommunitySection from './components/CommunitySection'
import DownloadSection from './components/DownloadSection'
import FooterSection from './components/FooterSection'
import BackToTop from './components/BackToTop'
import FloatingImage from './components/FloatingImage'

function App() {

  return (
    <>
      {/* <FloatingImage /> */}
      <Navbar/>
      <Hero />
      <GenresSection />
      <TopGamesSection />
      <GameFeatures />
      <TrailerSection />
      <Showcase />
      <StackedGameImages />
      <GallerySection />
      <TestimonialsSection />
      <CommunitySection />
      <DownloadSection />
      <FooterSection />
      <BackToTop />
    </>

  )
}

export default App
