import React from 'react'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'
import Footer from '../Component_section/Footer/Footer'
import Style_Four_Nav from '../Component_section/Style_Four/Style_Four_Nav'
import Style_Four from '../Component_section/Style_Four/Style_Four'

const Style_Four_Page = () => {
  return (
    <div>
        <Style_Four_Nav/>
        <Main_Navbar/>
        <Style_Four/>
        <Footer/>
      
    </div>
  )
}

export default Style_Four_Page
