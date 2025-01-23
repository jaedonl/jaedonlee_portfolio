import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
      </main>
    </>
  )
}

export default App
