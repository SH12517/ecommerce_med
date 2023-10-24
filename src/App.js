import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./Component/footer/Footer"
import { Header } from "./Component/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { useSelector } from "react-redux"

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
        
        <Router>
          <Header />
          <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/regsiter' element={<Regsiter/>} />
            <Route  path='/account' element={<Account/>} />
            <Route path='/Login' element = {<Login/>} />
          </Routes>
          <Footer />
        </Router>
    
    </>
  )
}
export default App
