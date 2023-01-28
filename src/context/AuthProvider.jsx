import React, { createContext } from 'react'

const Context = createContext()

const values = {}

function AuthProvider({children}) {
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default AuthProvider