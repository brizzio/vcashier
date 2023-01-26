import React from 'react'
import Header from '../layoutComponent/Header'
import Footer from '../layoutComponent/Footer'
import TopInfo from '../layoutComponent/TopInfo'

function AppLayout({children}) {
  return (
    <>
    <Header />
    <TopInfo />
    {children}
    <Footer />
    
    </>
  )
}

export default AppLayout