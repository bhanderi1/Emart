import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Cart_Navbar = () => {
  return (
      <div className='bg-[#ad9260] hidden xl:block '>
        <div className=' flex  justify-center'>
          <Container>
            <div className='flex justify-center m-auto py-2 text-[15px] text-white'>
              <span>
                Free delivery on orders over $1499. Don’t miss discount.
              </span>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default Cart_Navbar
