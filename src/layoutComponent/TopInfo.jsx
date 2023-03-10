import React from 'react'
import { Link } from 'react-router-dom'
import Webc from '../utils/Webc'
import useInfo from '../context/hooks/useInfo'
//import { CashRegister } from '@styled-icons/fa-solid'
//import { StoreMallDirectory } from '@styled-icons/material-outlined'
//import { ArrowLeftRight } from '@styled-icons/bootstrap'
//import { UserStar } from '@styled-icons/remix-line'

//import { User } from '@styled-icons/feather'
//import { FoodMenu } from '@styled-icons/boxicons-regular'
//import { CalendarDay } from '@styled-icons/fluentui-system-filled'

const Switch = (props)=>{


  return (

     <label className="inline-flex relative items-center mr-5 cursor-pointer">
      <input type="checkbox" checked={props.checked} className="sr-only peer"  onChange={props.onChange}/>
      <div className="w-7 h-4 bg-gray-200 rounded-full peer dark:bg-gray-700  dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
    </label>

  )
}



function TopInfo(props) {

 

  const handleSwitchChange = () => {
    console.log('Switch Change')
    props.toggle()
    
  }
  

  return (
    <article className='flex items-center justify-between box-border w-full h-20'>
         
         <div id="topRight" className={`flex flex-row items-center h-full w-full text-zinc-900`}>
            <div className="flex flex-col w-1/6 items-center justify-center">
              <Webc id="webimage" />
            </div>  
            <div className="flex flex-col 
                            h-full w-1/4
                            items-center justify-center gap-2 mt-2">
                <i className="fa-solid fa-store fa-lg"></i>
                <p className="font-bold text-xl text-slate-600 mt-0 ">001</p>
            </div>
            <div className="flex flex-col
                        h-full w-1/4 
                        items-center justify-center gap-2 mt-2"> 
                <i className="fa-solid fa-cash-register fa-lg"></i>
                <p className="font-bold text-xl text-slate-600">465</p>
            </div>
            <div className="flex flex-col 
                        h-full w-1/4 
                        items-center justify-center gap-2 mt-2"> 
                <i className="fa-solid fa-building-user fa-lg"></i>
                <p className="font-bold text-xl text-slate-600">15246</p>
            </div>
            <div className="flex flex-col 
                 h-full w-1/4 
                 items-center justify-center gap-4 mt-2 "> 
                 <i className="fa-solid fa-right-left fa-lg mr-4"></i>
                  <Switch 
                    checked={props.swap}
                    onChange={()=>{ handleSwitchChange()}}
                  />
            </div>

         </div>
         <div id="topLeft" className={`flex flex-row items-center justify-around h-full w-[78rem] mr-5 text-zinc-900 border border-2 mt-4 mb-2 rounded rounded-xl shadow-md bg-white`}>

            {/* <div className={`flex flex-row
                h-3/6 w-1/6
                items-center justify-center border-zinc-500 border-b-4 gap-2`}>
                <i className="fa-solid fa-calendar-days fa-lg"></i>
                <p className={`font-bold text-xl` }>116</p>
            </div>
            <div className={`flex flex-row
                h-3/6 w-1/6 
                items-center justify-center border-zinc-500 border-b-4 gap-2`}>
                <i className="fa-solid fa-cubes-stacked fa-lg"></i>
                <p className={`font-bold text-xl` }>1457</p>
            </div>
            <div className={`flex flex-row h-3/6 w-1/6
                items-center justify-center border-zinc-500 border-b-4 gap-2`}>
                <i className="fa-regular fa-address-card fa-lg"></i>
                <p className={`text-lg` }>CLIENTE</p>
            </div> */}


         </div>
        
        
    </article>
  )
}

export default TopInfo