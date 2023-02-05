import React, { useState, useEffect }from 'react'
import Button from '../customUi/Button'
import { ui, languages } from '../lexicon'
import { getLocalStorageDataByKey } from '../utils/Functions';
import useInfo from '../context/hooks/useInfo';



const btnTitles = ui.btn



const RenderListItem = ({item}) => {
    //console.log('list item: ', item)

    //console.log('index', index.toString())

    var total = parseFloat(item.calculatedPrice)

    return (
    <div className='flex flex-row px-3 py-0.5 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
        <div className='flex flex-row items-center'>
            <span className="px-2">{item.upc}</span> 
            <span className="px-2">{item.name}</span> 
            <span className="px-2">{}</span>         
            <span className="px-2">{item.priceType}</span> 
            <span className="px-2">{item.weight}</span><span>{item.weightUnit}</span>          
        </div>  
        <div className="py-1 px-1">
            <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>
            {`( ${item.order} )    ${item.currency} ${total.toFixed(2)}`}    
            </span>
            <button><i className="fa-regular fa-trash-o" /></button>
            </div>          
        </div>
    </div>
    )
}




const DisplayList = ({items}) => {

    const [lid, setLid] = useState("it")
    const [count, setCount] = useState(0);
    const [list, setList]= useState([])
    // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    /* var info = useInfo()

    useEffect(()=>{

        (async () => {
            try {
                const items = info.items
                console.log('Display List effect info items', items)
                setList(items)
            } catch {
                console.log("Display list data fetch error")
            }
        })()

    })
 */
    useEffect(()=>{
        console.log(  'display prop list items changed', items)
      },[items])
    

    console.log('Display List Has Items: ', items, !items)
    console.log('Display List Items Count: ', Object.keys(items).length)
    

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
  
    //sumObjectArrayByProp(items,'quantity')  
    const sumObjectArrayByProp = (arr, property)=>{
        return arr.reduce((a, c, i, arr) => { /* … */ 
                return Number(a) + Number(c[property])
                    
        }, 0)
          
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
            {
                !items?
                <div>In attesa dello scanner...</div>:
                <div id="table-body" className='flex flex-col min-h-11/12 overflow-y-scroll'>
                {items.map(function(i, idx){
                    return (<RenderListItem key={idx} item={i} />)
                })}
                </div>
            }
            
        </div>
        {/* ************* TotalsContainer **************************************** */}
        <div id="totals" className="flex flex-col w-full h-16 mt-auto ">
            <div className={`flex flex-row items-center justify-between w-full h-full mt-0 pr-3 gap-4 `}>

                <div className={`flex flex-row items-center justify-center border w-1/6 gap-3 rounded-full border-slate-300 py-1`}>
                    {/* <i className="material-icons" style={{fontSize:"48px"}}>cloud</i> */}
                    <i className="material-icons">shopping_cart</i>
                    <span className={`text-2xl font-thin`}>{Object.keys(items).length}</span>
                </div>

                <div className={`flex flex-row items-center justify-between	border border-slate-300 rounded-full w-1/4  py-1`}>
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

                <div className={`flex flex-row items-center justify-center border rounded-full border-slate-300 w-1/4 gap-3 py-1 `}>
                    <i className="fa-solid fa-weight-scale"></i>
                    <span className={`text-2xl font-thin`}>{sumObjectArrayByProp(items,'weight').toFixed(3)} Kg</span>
                </div>  


                <div className={`flex flex-row items-center justify-center border rounded-full border-slate-300 w-1/4 gap-2 px-2 py-1 `}>
                    <i className="fa-solid fa-euro-sign"></i>
                    <span className={`text-2xl font-thin`}>{sumObjectArrayByProp(items,'calculatedPrice').toFixed(2)}</span>
                </div> 
            </div>
        </div>
        
        <Button variant="primary" size="small" className="h-12 w-full" onClick={() => console.log('checkout clicked')}>{btnTitles.checkout[lid].toUpperCase()}</Button>
    </div>
    
  )
}

export default DisplayList