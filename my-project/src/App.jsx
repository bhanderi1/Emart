import React from 'react'
import Home from './Pages/Home'
import Style_One_Page from './Pages/Style_One_Page'
import Style_Four_Page from './Pages/Style_Four_Page'
import Wishlist_Page from './Pages/Wishlist_Page'
import Cart_Page from './Pages/Cart_Page'
import ChechOut_Page from './Pages/ChechOut_Page'
import Contact_Tow_Page from './Pages/Contact_Tow_Page'
import Bolg_Three_Page from './Pages/Bolg_Three_Page'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main_Navbar from './Component_section/Navbar/Main_Nabar'




const App = () => {
  return (
    <div>
      <Home/>
      <Style_One_Page/>
      <Style_Four_Page/>
      <Wishlist_Page/>
      <Cart_Page/>
      <ChechOut_Page/>
      <Bolg_Three_Page/>


      {/* <Contact_Tow_Page/> */} 
       {/* <BrowserRouter>
        <Routes>
          <Routes> */}
            {/* <Route path="/" elemet={<Home/>}></Route>
            <Route path="/Cart" elemet={<Cart_Page/>}></Route> */}
            {/* <Route path="" elemet={}></Route>
            <Route path="" elemet={}></Route>
            <Route path="" elemet={}></Route>
            <Route path="" elemet={}></Route>    */}
         {/* </Routes>
        </Routes>
      </BrowserRouter>  */}


    </div>
  )
}
export default App

