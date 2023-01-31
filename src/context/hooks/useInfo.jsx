import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageCollectionDataByKey,
         updateLocalStorageCollectionFromHook, 
         appendLocalStorageCollection 
        } from "../../utils/Functions";

const useInfo = () => {
 
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
  
    const insertItem = (item) =>{
      setItems((items)=>[...items, item])
      appendLocalStorageCollection('items', item)
      setUpdateCount(prevCount => prevCount + 1)
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