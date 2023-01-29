import React from 'react'
import Header from '../layoutComponent/Header'
import Footer from '../layoutComponent/Footer'
import TopInfo from '../layoutComponent/TopInfo'


function AppLayout({swap, toggle , children}) {

 
  return (
    <>
    <Header />
    <TopInfo swap={swap} toggle={toggle}/>
    {children}
    <Footer />
    
    </>
  )
}

export default AppLayout