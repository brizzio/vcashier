import React, { useState, useEffect }from 'react'
import Button from '../customUi/Button'
import { useNavigate } from 'react-router-dom';
import { ui, languages } from '../lexicon'

const items = [
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        priceType:'R',
        weight:0.5,
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
    {
        quantity:1,
        upc:'7908546855',
        name:'Ice Tea: Limone 1,5 l',
        brand:'Lipton',
        manufacturer:'PEPSICO BEVERAGES ITALIA',
        department:'Acqua, succhi e bibite',
        weight:0.5,
        priceType:'R',
        price:'120,33'
    }, 
]


const btnTitles = ui.btn

const listItems = items.map((item, index) =>{

let priceSpan = `x${item.quantity} € ${item.price}`
//console.log('index', index.toString())
return (
<div key={'index'+ index} className='flex flex-row px-3 py-0.5 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
    <div className='flex flex-row items-center'>
        <span className="px-2">{item.name}</span>  
        <span className="px-2">{item.upc}</span>         
        <span className="px-2">{item.priceType}</span> 
        <span className="px-2">{item.weight}</span><span>Kg</span>          
    </div>  
    <div className="py-1 px-1">
        <div className="flex flex-row py-1 px-1 items-center gap-3">
        <span>{priceSpan}</span>
        <button><i className="fa-regular fa-trash-o" /></button>
        </div>          
    </div>
</div>
)}
);




const DisplayList = () => {

    const [lid, setLid] = useState("it")
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    const navigate = useNavigate()

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
  
      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }
  


  return (
    
    <div className="flex flex-col h-full w-3/6 mr-2">

       
        <div id="list" className={`flex flex-col w-full h-80  mt-1 pt-4 pr-3`}>
            <div id="table-header" className='flex flex-row items-center justify-between py-2 px-3 text-xs border-y border-gray-800' >
                <div>
                    <span className="px-2">CARRELLO SPESA</span>
                    <span className="px-2">Data: 26/12/2022</span> 
                    <span className="px-2">Cliente: 58659</span>  
                    <span className="px-2">Ora Inizio: 12:51:30</span>  
                </div>  
            </div> 
            <div id="table-body" className='flex flex-col h-11/12 overflow-y-scroll'>
            {listItems}
            </div>
        </div>
        {/* ************* TotalsContainer **************************************** */}
        <div id="totals" className="flex flex-col w-full h-16 mt-auto ">
            <div className={`flex flex-row items-center justify-between w-full h-full mt-0 pr-3 gap-4 `}>

                <div className={`flex flex-row items-center justify-center border w-1/6 gap-3 rounded-full border-gray-700 py-1`}>
                    {/* <i className="material-icons" style={{fontSize:"48px"}}>cloud</i> */}
                    <i className="material-icons">shopping_cart</i>
                    <span className={`text-2xl font-thin`}>7</span>
                </div>

                <div className={`flex flex-row items-center justify-between	border border-gray-700 rounded-full w-1/4  py-1`}>
                    <button onClick={decrement}>
                    <i className="fa-solid fa-minus pl-3"></i>
                </button>

                <div className={`flex flex-row items-center gap-2`}>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className={`text-2xl font-thin`}>{count}</span>
                </div>
                
                <button onClick={increment}>
                    <i className="fa-solid fa-plus pr-3"></i>
                </button>
                
                </div> 

                <div className={`flex flex-row items-center justify-center border rounded-full border-gray-700 w-1/4 gap-3 py-1 `}>
                    <i className="fa-solid fa-weight-scale"></i>
                    <span className={`text-2xl font-thin`}>13,5 Kg</span>
                </div>  


                <div className={`flex flex-row items-center justify-center border rounded-full border-gray-700 w-1/4 gap-2 px-2 py-1 `}>
                    <i className="fa-solid fa-euro-sign"></i>
                    <span className={`text-2xl font-thin`}>1.250,00</span>
                </div> 
            </div>
        </div>
        
        <Button variant="primary" size="small" className="h-12 mb-2  w-full" onClick={() => console.log('checkout clicked')}>{btnTitles.checkout[lid].toUpperCase()}</Button>
    </div>
    
  )
}

export default DisplayList