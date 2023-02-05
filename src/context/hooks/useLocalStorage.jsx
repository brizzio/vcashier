import React, {useState, useRef, useEffect} from "react";
import priceList from '../../utils/prices.json'

const useLocalStorage = () => {

    const [onStart, setOnStart] = useState(true)
    


    useEffect(()=>{
       
        if(onStart){
            
            localStorage.setItem('priceList', JSON.stringify(priceList));
        }
    },[])

    const getData = (key) => {

        return new Promise(function (resolve, reject) {
            // Get the existing data
            let data =  localStorage.getItem(key);
        
            if (data) {
              resolve(JSON.parse(data));
            } else {
              reject(undefined);
            }
          });

    
    };

    const findByUPC = async (upc) =>{
        const list = await getData('priceList');
        console.log ('list', list)
        return list.filter((p) => p.upc == upc);
        
    }

    
    const lsInsert = async function (collectionName, obj) {

        // Get the existing data
        var existing = localStorage.getItem(collectionName);
    
        // If no existing data, create an array
        // Otherwise, convert the localStorage string to an array
        existing = existing ? JSON.parse(existing) : [];
    
        // Add new data to localStorage Collection
        var updated = [...existing, obj];
    
        // Save back to localStorage
        localStorage.setItem(collectionName, JSON.stringify(updated));
    
    };

    

  return (
    {lsInsert, findByUPC}
  )
}

export default useLocalStorage