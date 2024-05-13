import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const CheckOut_Navbar = () => {
  return (
    <div className='bg-[#c7b9b6] hidden xl:block '>
    <div className=' flex  justify-center'>
      <Container>
        <div className='flex justify-center m-auto py-2 text-[15px] '>
          <span>
            Free delivery on orders over $1499. Don’t miss discount.
          </span>
        </div>
      </Container>
    </div>
  </div>
  )
}

export default CheckOut_Navbar
