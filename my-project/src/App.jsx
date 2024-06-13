import React from 'react'
import Navbar from './Component/Navbar'
import Main_Navbar from './Component/Main_Nabar'
import Footer from './Component/Footer'
import Home_page from './Pages/Home_page'
import Style_One from './Pages/Style_One'
import Style_Four from './Pages/Style_Four'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'
import Blog_Three from './Pages/Blog_Three'
import Contact_Two from './Pages/Contact_Two'
import Shop_Now from './Pages/Shop_Now'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error_page from './Pages/Error_page'
const App = () => {
  // const router = 

  
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Main_Navbar />
        <Routes>
          <Route path='/' element={<Home_page/>}/>
          <Route path='styleOne' element={<Style_One/>}/>
          <Route path='styleFour' element={<Style_Four/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='blog_three' element={<Blog_Three/>}/>
          <Route path='contact_Two' element={<Contact_Two/>}/>   
          <Route path='/shop_now' element={<Shop_Now/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/*' element={<Error_page/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App

