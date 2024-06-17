import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import PricingSection from './components/PricingSection'
import Community from './components/Community'

function App() {
  return (
    <div className="h-full font-sans antialiased bg-white text-gray-950 selection:bg-primary-500 selection:text-white">

      {/* -- START WRAPPER -- */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* // <!-- START MAIN --> */}
        <main>
          <Hero />
          <Benefits />
          <Testimonials />
          <PricingSection />
          <Community />
        </main>
      </div>

    </div>
  )
}

export default App