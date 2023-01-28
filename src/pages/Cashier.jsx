import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Content from '../layoutComponent/Content'
import DisplayProduct from '../components/DisplayProduct'
import Commands from '../components/Commands'

function Cashier() {
  return (
    <AppLayout>
      <Content>
        <div className='flex flex-col gap-1'>
          
            <DisplayProduct/>
          
         
            <Commands />
        
        </div>
      <Link to="/login">go to Login Page</Link>
      </Content>
    </AppLayout>
   
   
    
  )
}

export default Cashier