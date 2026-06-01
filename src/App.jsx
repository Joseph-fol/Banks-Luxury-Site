import React from 'react'
import Navbar from './components/NavbarHead'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Card2 from './components/Card2'
import QualitiesPage from './components/QualitiesPage'
import ImagesCard from './components/ImagesCard'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <Card/>
      <QualitiesPage/>
      <Card2/>
      <ImagesCard/>

      <Routes>
         <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App