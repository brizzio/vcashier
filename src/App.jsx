import React from "react"

import Login from "./pages/Login"
import Cashier from "./pages/Cashier"
import ProductsPicker from "./pages/ProductsPicker";

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import InfoProvider from "./context/InfoProvider";
import useAuth from "./context/hooks/useAuth";


function App() {

  const ProtectedRoute = ({ 
    user,
    redirectPath = '/login',
    children }) => {
  
    const {loading, authenticated } = useAuth()
  
    console.log('protected auth', authenticated)
  
    if(loading){
      return(
          <h1>Loading...</h1>
      )
  }
  
    if (!authenticated) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };
 

  return (
   <div className="flex justify-center items-center w-screen h-screen bg-white">

    <div className="w-[84rem] h-[38rem] bg-white box-border border-zinc-300 rounded-2xl shadow shadow-2xl">
    <Router>
      
        <AuthProvider>
          <InfoProvider>
            <Routes>
              <Route element={<ProtectedRoute/>}>
                <Route index element={<Cashier/>} />
              </Route>
              <Route path="/login" element={<Login/>} />
              <Route path="/products" element={<ProductsPicker/>} />
            </Routes> 
          </InfoProvider>
        </AuthProvider>
      
    </Router>
        

    </div>

   </div>
  )
}

export default App
