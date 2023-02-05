import React, { createContext } from 'react'
import useLocalStorage from './hooks/uselocalStorage'

const Context = createContext()



function LocalStorageProvider({children}) {
  const values = useLocalStorage()
  console.log('useLocalStorage properties: ', values)
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default LocalStorageProvider