import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'
import DisplayProduct from '../components/DisplayProduct'
import DisplayList from '../components/DisplayList'
import useInfo from '../context/hooks/useInfo'


function Cashier() {

  const {items, loadingInfo, insertItem } = useInfo()
  
  const [loading , setLoading] = useState(true)
  const [swap, setSwap] = useState(false)
  const [listItems, setListItems] = useState(items)
  const rend = useRef(0)
  

  useEffect(()=>{
    const verified = verifySwap()
    setSwap(verified)
    
    
},[])

useEffect(()=>{

  (async () => {
      try {
          console.log('cashier effect listItems:' , items, rend.current)
          setListItems(items)
      } catch {
          console.log("Display cashier list data fetch error")
      }
  })()
  rend.current = rend.current + 1
})

 

  console.log('swap: ',swap)
  
  const toggleSwap = ()=>{
      localStorage.setItem('swap', JSON.stringify(!swap))
      setSwap(swapState=>!swapState)
  }

  function verifySwap(){
    setLoading(true)
    const localSwap = localStorage.getItem('swap');
    const swap = localSwap?JSON.parse(localStorage.getItem('swap')):false;
    console.log(' verifySwap', !!swap)
    setLoading(false)
    return !!swap

}

  useEffect(()=>{
    console.log(  'swap changed', swap)
  },[swap])
  
  if(loading){
    return(
        <h1>Loading...</h1>
    )
  }

  const handleInsertItem = (item) =>{ 
    insertItem(item)
    console.log(  'handleInsertItem update list')
    setListItems(prevlist => [...prevlist, item])
  }

  return (
    
    <AppLayout swap={!!swap} toggle={toggleSwap}>
      <Content swap={!!swap}>
        <DisplayProduct addItem={handleInsertItem}/>
        <DisplayList items={listItems} isLoadingInfo={loadingInfo}/>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier