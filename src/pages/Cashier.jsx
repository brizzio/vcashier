import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'
import DisplayProduct from '../components/DisplayProduct'


function Cashier() {
  return (
    <AppLayout>
      <Content>
        <DisplayProduct/>
        <Link to="/login">go to Login Page</Link>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier