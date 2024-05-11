import React from 'react'
import Navbar from '../Component_section/Navbar/Navbar'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'
import Header_Part from '../Component_section/Navbar/Header_Part'
import Shop_by_Categories from '../Component_section/Shop_by_Categories'
import Interior_Plant from '../Component_section/Interior_Plant'
import Service from '../Component_section/Service'
import Gardening_Tools from '../Component_section/Gardening_Tools'
import New_arrivals from '../Component_section/New_arrivals'
import Footer from '../Component_section/Footer/Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
             <Main_Navbar />
            <Header_Part />
            <Shop_by_Categories />
            <Interior_Plant />
            <Service />
            <Gardening_Tools />
            <New_arrivals />
            <Footer/>
        </div>
    )
}

export default Home
