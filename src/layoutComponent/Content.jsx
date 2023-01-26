import React from 'react'
import { Link } from 'react-router-dom'


function Content({children}) {
  return (
    <article className='flex flex-row justify-between box-border w-full h-[30rem] box-border border-2 border-green-300 '>
         
       {children}
        
        
    </article>
  )
}

export default Content