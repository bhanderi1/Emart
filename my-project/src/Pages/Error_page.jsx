import React from 'react'
import { NavLink } from 'react-router-dom'

const Error_page = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-[#f6e0d3] to-[#F6E0D300] flex justify-center items-center h-screen'>
        <div className='container flex justify-center items-center h-screen'>
          <div>
            <div className='flex justify-center mb-[34px]'>
              <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/cyber-monday-retail-sales-1-300x271.webp" alt="" />
            </div>
            <h1 className='text-bold font-semibold text-[40px] flex justify-center'>Oops! Nothing Was Found</h1>
            <p className='mb-[32px] mt-[12px] flex justify-center text-[#666]'>Oops! it could be you or us, there is no page here. It might have been moved or deleted.</p>
            <NavLink to='/' className='flex justify-center '>
              <div className=" hover:-translate-y-[10px] duration-300 ease-in-out max-md:w-[100%] flex justify-center text-white py-[12px] px-[50px] bg-black text-[17px]  max-lg:py-[5px] checkout hover:border-2 hover:border-black">
                <button>Back To Home</button>
              </div>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Error_page
