import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Gardening_Tools = () => {
    return (
        <div className='relative'>
            <div className='w-full h-[500px] overflow-hidden  object-contain relative'>
                <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/full-bg-img-scaled.webp" alt=""  />
            <Container>
            <div className=' flex justify-center absolute py-[135px] top-0 '>
                    <div >
                        <h1 className='text-[45px] mb-[20px] text-white'>
                            Find your perfect<br />
                            <span>gardening tools on best<br/> price</span>
                        </h1>
                        <button className='py-[12px] px-[40px] bg-white  font-semibold '>Shop Now</button>
                    </div>

            </div>
                </Container>
            </div>
        </div>
    )
}

export default Gardening_Tools
