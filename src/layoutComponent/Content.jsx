import React from 'react'
import { Link } from 'react-router-dom'



function Content({swap, children}) {

  
  console.log('props.swap no content', swap)

  return (
    <article className={`flex ${swap? 'flex-row-reverse gap-1 ml-2' : 'flex-row gap-4' } justify-between box-border w-full h-[28rem] box-border `}>
         
       {children}
        
        
    </article>
  )
}

export default Content