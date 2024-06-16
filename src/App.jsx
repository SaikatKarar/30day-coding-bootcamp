import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className="h-full font-sans antialiased bg-white text-gray-950 selection:bg-primary-500 selection:text-white">

      {/* -- START WRAPPER -- */}
      <div className="flex flex-col min-h-screen">
        <Header />
      </div>

    </div>
  )
}

export default App