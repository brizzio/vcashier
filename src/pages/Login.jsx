import React , { useContext, useEffect } from 'react'
import useAuth from '../context/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function Login() {

 const {authenticated, handleLogin } = useAuth()
  
 const handleAuth= (type) => {
    //Prevent page reload
   handleLogin({type: type})
   console.log('Login as ', type )
       
  };

 

  return (
  <>
      
        <article className='grid h-screen place-items-center '>
          <div className='flex flex-col gap-4 p-6 w-2/6 h-2/6 items-center justify-center border-gray border-2 shadow-md rounded-lg'>
            <h1>CASSA MAREL</h1>
            <button variant="main" size="small" className="min-w-9 h-12" onClick={() => handleAuth('admin')}>Accessa come Amministratore</button>

            <button variant="main" size="small" className="min-w-9 h-12 " onClick={() => handleAuth('cassa')}>Accessa come Operatore Cassa</button>
          </div>
          </article>
      
  </> 
  
    
  )
  
}
