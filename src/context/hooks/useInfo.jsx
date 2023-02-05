import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageCollectionDataByKey,
         updateLocalStorageCollectionFromHook, 
         appendLocalStorageCollection 
        } from "../../utils/Functions";

const useInfo = () => {
 
  let counts = useRef({})

  const [items, setItems ] = useState([])
  const [loadingInfo, setLoadingInfo] = useState(false)
  const [updateCount, setUpdateCount] = useState(0)

  
  
  const renderCount= useRef(0)

    useEffect(()=>{

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
        
    },[setItems, updateCount])

    const loadDatafromLocalStorage = ()=>{
      setLoadingInfo(true)
      const savedItems = getLocalStorageCollectionDataByKey('items')
      setLoadingInfo(false)
      return savedItems
    }

    const getItems = () => {
      console.log('vai ler os items do info hook', items)
      return items
    }
   
    const updateItemsInLocalStorage=()=>updateLocalStorageCollectionFromHook('items', items)
  
    const insertItem = async (item) =>{
      //group items and count ocurrences
      let evaluated ={}
      counts[item.upc] = counts[item.upc]?Number(counts[item.upc]) + Number(item.quantity):Number(item.quantity)
      console.log('counts: ', counts)
      
      for (let i = 1; i <= item.quantity; i++) {
        item.order = i + "/" + item.quantity
        console.log('vai processar o item: ', item.order)
        evaluated = await evaluateItem(item)
        setItems((items)=>[...items, evaluated])
        appendLocalStorageCollection('items', evaluated)
      }

     
      
      setUpdateCount(prevCount => prevCount + 1)


    } 


    const evaluateItem = (scanned)=>{

      // set index of item in cart
      scanned.index = items.length + 1

      

      scanned.priceType = scanned.promoType>0?'P':'R'

      if (scanned.promoType>0){

       

        if(scanned.promoType==1 && scanned.nthUnit==1){
          //calculates discount value based on porcentage or strict value
          let discountValue = scanned.regularPrice*scanned.discount
          scanned.discountValue = discountValue.toFixed(2)
           
          //calculates the final price based on discount value or strict value 
          scanned.calculatedPrice = (scanned.regularPrice-scanned.discountValue)

          } else {
          
          scanned.calculatedPrice = scanned.regularPrice
      
        }

      }else {
        
          scanned.calculatedPrice = scanned.regularPrice
    
      }

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