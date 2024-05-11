import React from 'react'
import Blog_Three_Nav from '../Component_section/Bolg_three/Blog_Three_Nav'
import Blog_Three from '../Component_section/Bolg_three/Blog_Three'
import Footer3 from '../Component_section/Footer/Footer3'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'

const Bolg_Three_Page = () => {
  return (
    <div>
        <Blog_Three_Nav/>
        <Main_Navbar/>
        <Blog_Three/>
        <Footer3/>
    </div>
  )
}

export default Bolg_Three_Page
