import React from 'react'
import { Link } from 'react-router-dom'

function TopInfo() {
  return (
    <article className='flex items-center justify-between box-border w-full h-16 border-2 border-red '>
         
         <div id="topRight" className={`flex flex-row items-center h-full w-full text-zinc-900`}>TopRight</div>
         <div id="topLeft" className={`flex flex-row items-center h-full w-full text-zinc-900`}>TopLeft</div>
        
        
    </article>
  )
}

export default TopInfo