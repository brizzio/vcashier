import React from 'react'
import TimeStyled from '../utils/TimeStyled'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

function Footer() {
  return (
    <article className='flex items-center justify-between box-border w-full h-8 border-t-2 border-zinc-200 px-4'>
         
        <TimeStyled textColor="black"/>
    

        <ReactSVG
        afterInjection={(svg) => {
            'console.log(svg)'
        }}
        beforeInjection={(svg) => {
            svg.classList.add('svg-class-name')
            svg.setAttribute('style', 'width: 80px')
        }}
        className=""
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        httpRequestWithCredentials={true}
        loading={() => <span>Loading</span>}
        onClick={() => {
            console.log('wrapper onClick')
        }}
        onError={(error) => {
            console.error(error)
        }}
        renumerateIRIElements={false}
        src='bizerba-logo.svg'
        useRequestCache={false}
        wrapper="span"
        />
    
    
    </article>
  )
}

export default Footer