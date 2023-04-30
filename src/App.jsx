// import { useState } from 'react'
// import Navbar from "./components/Navbar"
import Header from './components/Header/Header'
import Promosi from './components/Promosi/Promosi'
import Fitur from './components/Fitur/Fitur'
import Harga from './components/harga/Harga'
import Ulasan from './components/Ulasan/Ulasan'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <Header />
        <Promosi />
        <Fitur/>
        <Harga />
        <Ulasan />
        <Footer />
      </div>
    </>
  )
}

export default App
