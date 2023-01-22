import React from "react"
import Login from "./pages/Login"
import Cashier from "./pages/Cashier"
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";


function App() {
 

  return (
   <div className="flex justify-center items-center w-screen h-screen bg-red-300">

    <div className="w-5/6 h-5/6 bg-white">
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
