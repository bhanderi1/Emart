import React from 'react'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'
import Footer1 from '../Component_section/Footer/Footer1'
import Style_One_Nav from '../Component_section/Style_One/Style_One_Nav'
import Style_One from '../Component_section/Style_One/Style_One'

const Style_One_Page = () => {
  return (
    <div>
     <Style_One_Nav/>
      <Main_Navbar />
      <Style_One/>
      <Footer1 />
    </div>
  )
}

export default Style_One_Page
