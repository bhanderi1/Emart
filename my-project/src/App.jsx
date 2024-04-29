

import Shop_by_Categories from "./Component_section/Shop_by_Categories"
import Header_Part from "./Navbar/Header_Part"
import Main_Nabar from "./Navbar/Main_Nabar"
import Navbar from "./Navbar/Navbar"
import Interior_Plant from "./Component_section/Interior_Plant"
import Service from "./Component_section/Service"
import Gardening_Tools from "./Component_section/Gardening_Tools"
import New_arrivals from "./Component_section/New_arrivals"
import Footer from "./Footer/Footer"




function App() {


  return (
    <>
      <div>
        <Navbar />
        <Main_Nabar />
        <Header_Part />
        <Shop_by_Categories />
        <Interior_Plant />
        <Service />
        <Gardening_Tools />
        <New_arrivals />
        <Footer />
      </div>

    </>
  )
}

export default App
