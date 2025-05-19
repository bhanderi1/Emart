import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Header_Part = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container className='mt-4 mb-10 max-xl:mb-4'>
        <section className='flex justify-between m-auto max-md:block'>
          <div className='w-[36%] flex justify-center items-center max-md:w-[100%]'>
            <div className='text-center max-md:text-start'>
              <div>
                <h1 className='text-[67px] mb-3 max-xl:text-[60px] max-lg:text-[50px] max-md:text-[43px] max-sm:text-[35px]'>Plant a tree for better world</h1>
                <p className='text-muted px-3 max-sm:text-[14px]'>Rectangle follower distribute device layer. Library hand ellipse device strikethrough.</p>
                <div className="my-3 lg:my-5">
                  <button
                    className="py-[12px] px-[40px] max-sm:py-[8px] border border-black font-semibold hover:bg-black hover:text-white hover:-translate-y-[20px] duration-300 ease-in-out"
                    onClick={() => {
                      navigate("/shop_now");
                    }}
                  >
                    Shop Now
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className='w-[60%] flex justify-between max-md:w-[100%] max-md:mt-6'>
            <div className='pt-[70px] w-[48%] max-md:hidden hover-img'>
              <img decoding="async" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-first.webp" className="hover:-translate-x-[15px] duration-300 ease-in-out" alt="plants-banner-first" loading="lazy" />
            </div>
          <div className="pb-[70px] w-[48%] max-md:w-full max-sm:pb-[20px] max-md:overflow-hidden">
  <img
    decoding="async"
    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-2nd.webp"
    className="hover:-translate-x-[15px] duration-300 ease-in-out max-md:transform-none w-full max-md:ms-3"
    alt="plants-banner-2nd"
    loading="lazy"
  />
</div>

          </div>
        </section>
      </Container>
    </div >
  )
}

export default Header_Part
