import React from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'

export default function App(){
  return (
    <div id="page" className="site">
      <Header />

      <main>
        <Products />
      </main>

      <Footer />
    </div>
  )
}
