import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'
import KeyboardTouch from '../components/KeyboardTouch'

function Cashier() {
  return (
    <AppLayout>
      <Content>
        <KeyboardTouch/>
      <Link to="/login">go to Login Page</Link>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier