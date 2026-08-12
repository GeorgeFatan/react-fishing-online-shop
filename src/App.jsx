import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import Accesories from './pages/products_categories/Accesories'
import Rods from './pages/products_categories/Rods'
import Lines from './pages/products_categories/Lines'
import Hooks from './pages/products_categories/Hooks'
import Mulinete from './pages/products_categories/Mulinete'
import MomealaArtificiala from './pages/products_categories/MomealaArtificiala'
import Plumbi from './pages/products_categories/Plumbi'
// navbar

function App() {
  return (
   <div className = "app">
    <Navbar />
    
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path = "/accesories" element={<Accesories />}/>
      <Route path = "/lines" element={<Lines />}/>
      <Route path = "/rods" element={<Rods />}/>
      <Route path = "/hooks" element={<Hooks />}/>
      <Route path = "/mulinete" element={<Mulinete />}/>
      <Route path = "/momealaartificiala" element={<MomealaArtificiala />}/>
      <Route path = "/plumbi" element={<Plumbi />}/>
    </Routes>

   </div>
  )
}

export default App
