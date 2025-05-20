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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error_page from './Pages/Error_page'
import Success_Payment from './Pages/Success_Payment'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navs from './Component/Nav'


const App = () => {
  return (
    <BrowserRouter>
      <Main_Navbar />
      <Routes>
        <Route path='/' element={<Home_page />} />
        <Route path='/wishlist' element={<Wishlist />} />
    
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/style-one' element={<Style_One />} />
        <Route path='/style-four' element={<Style_Four />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/payment' element={<Success_Payment />} />
        <Route path='/blog-three' element={<Blog_Three />} />
        <Route path='/contact-two' element={<Contact_Two />} />
        <Route path='/shop-now' element={<Shop_Now />} />
        <Route path='*' element={<Error_page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App

