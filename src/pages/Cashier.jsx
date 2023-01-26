import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'

function Cashier() {
  return (
    <AppLayout>
      <Content>
        <div>Cashier</div>
      <Link to="/login">go to Login Page</Link>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier