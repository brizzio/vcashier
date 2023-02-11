import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageCollectionDataByKey,
         updateLocalStorageCollectionFromHook, 
         appendLocalStorageCollection 
        } from "../../utils/Functions";
import priceList from '../../utils/prices.json'

const useInfo = () => {
 
  

  const [items, setItems ] = useState(initItems())
  const [loadingInfo, setLoadingInfo] = useState(false)
  const [updateCount, setUpdateCount] = useState(0)

  
  //on startup

  useEffect(()=>{

    (async () => {
      try {
        localStorage.setItem('priceList', JSON.stringify(priceList));
        console.log('info useffect priceList')
      } catch {
          console.log("info error setting pricelist")
      }
  })()
      
  },[])

  function initItems(){
    const stored = localStorage.getItem('items');

    return stored? JSON.parse(stored): []
    
}



  useEffect(()=>{
   
        localStorage.setItem('items', JSON.stringify(items));
        console.log('info useffect update items in local storage', items)
     
       
  },[items])

  

    /* useEffect(()=>{

      (async () => {
        try {
          const data = loadDatafromLocalStorage()
          console.log('local data', data)
          setItems(data)
        } catch {
            console.log("data fetch error")
        }
    })()
        renderCount.current = renderCount.current + 1
        console.log('info useffect render:', renderCount.current)
        console.log('info useffect updates:', updateCount)
        console.log('info useffect items:', items)
        
    },[setItems, updateCount]) */


    

    
    
    const updateItem = (id, key, value) =>{
      let i = items.findIndex((obj => obj.id == id));
      setItems(prev =>  [...prev, prev[i][key]=value])
    } 

    async function getProductByUpc(upc){

      let filtered = priceList.filter((p) => p.upc == upc)
      if(filtered){
        return filtered[0]
      }else{
        return {}
      }
    }
    
    const insertItem = async (upc, quant) =>{

      let arrOfNewItems=[]
      let evaluated = {}
      let newItem = {}
      let newList = []

      console.log('vai processar insert: ', upc, quant)
      let product = await getProductByUpc(upc)

      try {

         for (let i = 1; i <= quant; i++) {

        // set index of item in cart
        newItem = {...product}
        newItem.index = items.length + 1
        newItem.order = `${i}/${quant}` 
        newItem.deleted = false
        newItem.entryID=window.crypto.randomUUID()
        console.log('no for: ', newItem)
        evaluated = await evaluateItem(newItem)
        arrOfNewItems.push(evaluated)
        
        //appendLocalStorageCollection('items', evaluated)
      }
      } catch (error) {
        console.error(error);
      }finally {
        console.log('no fim do loop do insert');
        console.log('arrOfNewItems: ', arrOfNewItems)
        setItems(prev => prev.concat(arrOfNewItems))
      }


    }



    /* const insertItem = async (item) =>{
      //group items and count ocurrences
      let arrOfNewItems=[]
      let evaluated ={}
      let newList = []
      counts[item.upc] = counts[item.upc]?Number(counts[item.upc]) + Number(item.quantity):Number(item.quantity)
      console.log('counts: ', counts)

      try {

        for (let i = 1; i <= item.quantity; i++) {
          
          arrOfNewItems.push(evaluateItem(item, i))
          console.log('arrOfNewItems: ', arrOfNewItems)
          //appendLocalStorageCollection('items', evaluated)
        }
  
        newList = items.concat(arrOfNewItems)
        console.log('newList:', newList)
        setItems(newList)
        
        setUpdateCount(prevCount => prevCount + 1)
        
      } catch (error) {
        console.log('insert item error', item, evaluated)
      }
      
      


    }  */


    const evaluateItem = async(objItem)=>{

      let scanned = {}

      scanned = objItem
      
      
      console.log('evaluate vai processar o item: ', scanned)
  

      scanned.priceType = scanned.promoType>0?'P':'R'

      if (scanned.promoType>0){

       

        if(scanned.promoType==1 && scanned.nthUnit==1){
          //calculates discount value based on porcentage or strict value
          let discountValue = scanned.regularPrice*scanned.discount
          scanned.discountValue = discountValue.toFixed(2)
           
          //calculates the final price based on discount value or strict value 
          scanned.calculatedPrice = scanned.exactDiscountedPrice?scanned.exactDiscountedPrice:(scanned.regularPrice-scanned.discountValue)

          } else {
          
          scanned.calculatedPrice = scanned.regularPrice
      
        }

      }else {
        
          scanned.calculatedPrice = scanned.regularPrice
    
      }

      console.log('no fim do evaluate', scanned)
      return scanned

    }
  
  return (
    {
      loadingInfo,
      items,
      insertItem
    }
  )
}

export default useInfo