import React , { useState } from 'react'
import Button from '../customUi/Button'
import { useNavigate } from 'react-router-dom';
import { ui, languages } from '../lexicon'

const Commands = () => {

  const navigate = useNavigate()
  const [lid, setLid] = useState("it") 
  
  const btnTitles = ui.btn
  
  return (
    <div>
       <div className="flex flex-col h-[18rem] min-w-full ml-3 pr-1 px-2 pt-2">
            
            <div className="grid grid-flow-col-dense grid-cols-4 grid-rows-5 gap-2 w-full h-full py-2 pr-2">
                
               
                 <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={()=> navigate("/loyalty")}>{btnTitles.loyalty[lid].toUpperCase()}</Button> 
                
                <Button variant="main" size="small" className=" min-h-full min-w-full" onClick={()=> navigate("/loyalty")}>{btnTitles.lottery[lid].toUpperCase()}</Button> 
                

                <Button variant="primary" size="small" className="row-span-3 min-h-full min-w-full" onClick={() => setShowModal(true)}>{btnTitles.newCart[lid].toUpperCase()}</Button>
                
                           
                <div className=" rounded col-span-2 row-span-4 mb-2">
                    {/* <NumericKb onChange={handleQuantityChange}/> */}
                    keyboard
                </div>
                
                <Button variant="primary" size="small" className="col-span-3 min-h-full h-auto" onClick={() => setShowModal(true)}>{btnTitles.cancelCart[lid].toUpperCase()}</Button>

                <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={() => setShowModal(true)}>{btnTitles.productPicker[lid].toUpperCase()}</Button>
                
                <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={() => setShowModal(true)}>{btnTitles.lastCart[lid].toUpperCase()}</Button>

               
                <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={() => setShowModal(true)}>{btnTitles.suspendCashier[lid].toUpperCase()}</Button>
                
                <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={() => setShowModal(true)}>{btnTitles.closeCashier[lid].toUpperCase()}</Button>
                    
                
            </div>
        
        </div>
    </div>
    
  )
}

export default Commands
