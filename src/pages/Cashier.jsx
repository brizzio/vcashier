import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'
import DisplayProduct from '../components/DisplayProduct'
import DisplayList from '../components/DisplayList'
import useInfo from '../context/hooks/useInfo'


function Cashier() {

  const [loading , setLoading] = useState(true)
  const [swap, setSwap] = useState(false)

  useEffect(()=>{
    const verified = verifySwap()
    setSwap(verified)
},[])
 

  console.log('swap: ',swap)
  
  const toggleSwap = ()=>{
      localStorage.setItem('swap', !swap)
      setSwap(swapState=>!swapState)
  }

  function verifySwap(){
    setLoading(true)
    const swap = localStorage.getItem('swap');
    console.log(' verifySwap', !!swap)
    setLoading(false)
    return swap

}

  useEffect(()=>{
    console.log(  'swap changed', swap)
  },[swap])
  
  if(loading){
    return(
        <h1>Loading...</h1>
    )
  }

  return (
    
    <AppLayout swap={!!swap} toggle={toggleSwap}>
      <Content swap={!!swap}>
        <DisplayProduct/>
        <DisplayList/>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier