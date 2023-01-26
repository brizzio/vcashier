import React , { useContext, useEffect } from 'react'

export default function Login() {

 
  const handleLogin = (type) => {
    //Prevent page reload
    
   console.log('Login as ', type )
       
  };

 

  return (

    <>
      <article className='grid h-screen place-items-center '>
          <div className='flex flex-col gap-4 p-6 w-2/6 h-2/6 items-center justify-center border-gray border-2 shadow-md rounded-lg'>

            <h1>CASSA MAREL</h1>
            
            <button variant="main" size="small" className="min-w-9 h-12" onClick={() => handleLogin('admin')}>Accessa come Amministratore</button>
            

           
            <button variant="main" size="small" className="min-w-9 h-12 " onClick={() => handleLogin('cassa')}>Accessa come Operatore Cassa</button>
            


          </div>
          

         
        



      </article>
    
    </>
    
  )
  
}
