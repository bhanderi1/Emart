import React from 'react'
import Container from "react-bootstrap/esm/Container";

const CheckOut = () => {
  return (
    <div className='bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]'>
      <Container>
        <div className='py-[150px] mx-[60px]'>
          <div className='mb-[50px] shadow-2xl shodow-gray-700'>
            <p className='py-[18px] bg-white text-[18px] px-[25px]'>Your CheckOut is currently empty.</p>
          </div>
          <button className='hover:-translate-y-[10px] duration-300 ease-in-out'><a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop</a></button>
        </div>
      </Container>
    </div>
  )
}

export default CheckOut
