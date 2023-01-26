import React from "react"
import Login from "./pages/Login"
import Cashier from "./pages/Cashier"
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";


function App() {
 

  return (
   <div className="flex justify-center items-center w-screen h-screen bg-zinc-200">

    <div className="w-[84rem] h-[38rem] bg-white box-border border-2 border-zinc-300">
    <Router>
      <Routes>
        <Route index element={<Cashier/>} />
        <Route path="/login" element={<Login/>} />
      </Routes> 
    </Router>
        

    </div>

   </div>
  )
}

export default App
