import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <article className='flex items-center justify-between box-border w-full h-8 border-2 border-white '>
         
        <div  className='font-sans text-xs text-black  p-1 px-3 max-h-5/6 text-lg font-bold'>MAREL</div>
        

        <ul className='flex flex-row items-center gap-6 mr-4 text-cyan-900 '>
            <li>
            <Link to="/regular"
            className='font-sans text-xs text-inherit box-border border border-zinc-300 rounded-md  p-1 px-3 max-h-5/6'>Prezzi Regolari
            </Link>
            </li>
            <li>
            <Link to="/promo"
             className='font-sans text-xs text-inherit box-border border border-zinc-300 rounded-md  p-1 px-3 max-h-5/6'>Prezzi Promozionali
            </Link>
            </li>
            <li>
            <Link to="/admin"
             className='font-sans text-xs text-inherit box-border border border-zinc-300 rounded-md  p-1 px-3 max-h-5/6'>Amministrativo</Link>
            </li>
            <li>
            <Link to="/user"
             className='font-sans text-xs text-inherit box-border border border-zinc-300 rounded-md  p-1 px-3 max-h-5/6'>Utente</Link>
            </li>
        </ul>
        
        
    </article>
  )
}

export default Header