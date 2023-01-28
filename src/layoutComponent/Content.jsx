import React from 'react'
import { Link } from 'react-router-dom'


function Content({children}) {
  return (
    <article className='flex flex-row justify-between box-border w-full h-[28rem] box-border gap-4'>
         
       {children}
        
        
    </article>
  )
}

export default Content