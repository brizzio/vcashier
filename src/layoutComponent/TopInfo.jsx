import React from 'react'
import { Link } from 'react-router-dom'
import { WebcamCapture } from '../utils/Webcam'
import { CashRegister } from '@styled-icons/fa-solid'
import { StoreMallDirectory } from '@styled-icons/material-outlined'
import { ArrowLeftRight } from '@styled-icons/bootstrap'
import { UserStar } from '@styled-icons/remix-line'

import { User } from '@styled-icons/feather'
import { FoodMenu } from '@styled-icons/boxicons-regular'
import { CalendarDay } from '@styled-icons/fluentui-system-filled'


const Switch = (props)=>{


  return (

     <label className="inline-flex relative items-center mr-5 cursor-pointer">
      <input type="checkbox" checked={props.checked} className="sr-only peer"  onChange={props.onChange}/>
      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
    </label>

  )
}


const handleSwitchChange = () => {
  console.log('Switch Change')
}

function TopInfo(props) {
  return (
    <article className='flex items-center justify-between box-border w-full h-16 border-2 border-red '>
         
         <div id="topRight" className={`flex flex-row items-center h-full w-full text-zinc-900`}>
            <div className="flex flex-col w-1/6 items-center justify-center">
              <WebcamCapture id="webimage" />
            </div>  
            <div className="flex flex-col 
                            h-full w-1/4
                            items-center justify-center gap-0">
                <StoreMallDirectory className='w-9'/>
                <p className="font-bold text-3xl text-slate-600 mt-0 ">001</p>
            </div>
            <div className="flex flex-col
                        h-full w-1/4 
                        items-center justify-center"> 
                <CashRegister className='w-8'/>
                <p className="font-bold text-3xl text-slate-600">465</p>
            </div>
            <div className="flex flex-col 
                        h-full w-1/4 
                        items-center justify-center"> 
                <UserStar className="w-8"/>
                <p className="font-bold text-3xl text-slate-600">15246</p>
            </div>
            <div className="flex flex-col 
                 h-full w-1/4 
                 items-center justify-center gap-1 "> 
                  <ArrowLeftRight className='w-8 mr-4'/>
                  <Switch 
                    checked={props.checked}
                    onChange={()=>{ handleSwitchChange()}}
                  />
            </div>

         </div>
         <div id="topLeft" className={`flex flex-row items-center justify-around h-full w-full text-zinc-900`}>

            <div className={`flex flex-row
                h-full w-1/6
                items-center justify-center border-zinc-500 border-b-4 pb-3 mr-3 gap-2`}>
                <CalendarDay className='h-6 mt-auto'/>
                <p className={`font-bold text-lg mt-auto` }>116</p>
            </div>
            <div className={`flex flex-row
                h-full w-1/6 
                items-center justify-center border--zinc-500 border-b-4 pb-3 mr-3 gap-2`}>
                <FoodMenu className='h-6 mt-auto'/>
                <p className={`font-bold text-lg mt-auto` }>1457</p>
            </div>
            <div className={`flex flex-row h-full w-1/6
                items-center justify-center border--zinc-500 border-b-4 pb-3 mr-3 gap-2 mb-0`}>
                <User className='h-9 mt-auto'/>
                <div>CLIENTE</div>
            </div>


         </div>
        
        
    </article>
  )
}

export default TopInfo