import React, { useState, useEffect } from 'react'
import Button from '../customUi/Button'
import { useNavigate } from 'react-router-dom';

import NumericKb from './NumericKb';

import { ui, languages } from '../lexicon'

function DisplayProduct() {

    const navigate = useNavigate()

    const [lid, setLid] = useState("it") 
    const [quantity, setQuantity] = useState(1)
    const [upc, setUpc] = useState('7908546855')
    const [read, setRead] = useState({})

    const btnTitles = ui.btn

    const product = {
        quantity:quantity,
        upc:upc,
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        price:'120,33'
    }  

  const handleQuantityChange = (q) =>{
    setQuantity(q)
  }

  return (
    
    <div className="flex flex-col h-full w-3/6 mt-3">

    <div id="display" className="flex flex-row h-17 min-w-[21rem] mt-0 bg-[#F2F7F5] py-4 ml-5 border-2 border-blue-200 rounded-2xl shadow-xl">
            
        {/* <div className="flex items-center justify-center ml-2">
            <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i> 
        </div> */}
        <div className="flex items-center justify-center text-slate-400 text-3xl px-2 ml-2 border-box border-r-2 border-zinc-200">
            {quantity}
        </div>
        <div className="w-full flex flex-col justify-center pl-3">
            
            <h2>{upc}</h2>
           
            <div className="text-xl font-sans font-semibold	">
                <h3 >
                  {product.name}
                <span> - </span>
                    <span>{product.brand}</span>
                </h3>{/* <!-- name --> */}
            </div>
                           
            <div>
                
                <h6>
                {product.manufacturer}{/* <!-- manufacturer --> */}
                <span> - </span>
                {product.department} {/* <!-- departament --> */}
                </h6> 
                
            </div>

        </div>
        <div className="w-2/6 flex items-center justify-end text-2xl font-sans font-semibold pr-3">
           {product.price} 
        </div>
        
    </div>

    <div className="flex flex-row min-w-full mt-2 pt-2 ml-6 pr-4 items-center justify-between">
        <span className="bg-fuchsia-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mt-auto">Data Prezzi: 22/12/2022</span>
        <span className="bg-orange-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Prodotti: 3.570</span>
        <span className="bg-lime-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Negozio: Supermercati Marel</span>
        <span className="bg-rose-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            <button onClick={() => 'clickOpenSerial()'}> Open Serial Port </button>
        </span>
    </div>

    {/* ************* COMMANDS ******************************************************** */}

    <div className="flex flex-col h-[18rem] min-w-full ml-3 pr-1 px-2 ">
            
            <div className="grid grid-flow-col-dense grid-cols-4 grid-rows-5 gap-2 w-full h-full py-2 pr-2">
                
               
                 <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={()=> navigate("/loyalty")}>{btnTitles.loyalty[lid].toUpperCase()}</Button> 
                
                <Button variant="main" size="small" className=" min-h-full min-w-full" onClick={()=> navigate("/loyalty")}>{btnTitles.lottery[lid].toUpperCase()}</Button> 
                

                <Button variant="primary" size="small" className="row-span-3 min-h-full min-w-full" onClick={() => setShowModal(true)}>{btnTitles.newCart[lid].toUpperCase()}</Button>
                
                           
                <div className=" rounded col-span-2 row-span-4 mb-2">
                    <NumericKb onChange={handleQuantityChange}/> 
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

export default DisplayProduct