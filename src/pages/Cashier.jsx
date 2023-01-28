import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'
import DisplayProduct from '../components/DisplayProduct'
import DisplayList from '../components/DisplayList'


function Cashier() {
  return (
    <AppLayout>
      <Content>
        <DisplayProduct/>
        <DisplayList/>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier