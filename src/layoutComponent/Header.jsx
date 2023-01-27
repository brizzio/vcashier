import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <article className='flex items-center justify-between box-border border-b-2 border-zinc-200 w-full h-10'>
         
        <div  className='font-sans text-xs text-black  p-1 px-3 max-h-5/6 text-lg font-bold'>
          <img src='/marel-logo.png'
          className="h-8 p-1"
          />
          </div>
        

        <ul className='flex flex-row items-center gap-8 mr-4 text-cyan-900 '>
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