import React, { createContext } from 'react'
import useInfo from './hooks/useInfo'

const Context = createContext()



function InfoProvider({children}) {
  const values = useInfo()
  console.log('useInfo properties: ', values)
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default InfoProvider