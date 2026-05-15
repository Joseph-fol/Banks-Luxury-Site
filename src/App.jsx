import React from 'react'
import Navbar from './components/NavbarHead'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Card2 from './components/Card2'
import QualitiesPage from './components/QualitiesPage'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <Card/>
      <QualitiesPage/>
      <Card2/>
    </>
  )
}

export default App