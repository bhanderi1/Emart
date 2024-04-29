import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from '../assets/heart.svg'
import Eyes from '../assets/Eyes.svg'
import Cart from '../assets/Cart.svg'



const Interior_Plant = () => {
  return (
    <div className='continer flex justify-center py-[50px] max-xl:p-0 overflow-hidden'>
      <Container>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-[42px] font-medium max-md:text-[30px]'>Best interior plants</h1>
            <p className='pt-4 text-muted'>Rectangle follower library hand ellipse device strikethrough.</p>
          </div>
        </div>

        <div className='max-sm:py-[30px] py-[50px] '>
          <section className='flex max-md:block   m-auto justify-between overflow-hidden'>

            <section className='w-[40%] max-md:w-[100%] max-md:mb-[20px] interior-img top-0 ms-2'>
              <img decoding="async" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plant-gallery-left-img.webp" alt="plant-gallery-left-img" loading="lazy" className="hover:-ms-[12px] duration-300 ease-in-out" />
            </section>

            <section className='w-[57%] pl-5 max-md:block max-md:w-[100%] max-md:p-0 '>
              <div className='flex flex-wrap row '>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-2  p-2 z-10'>
                    <span className='text-white bg-black px-2 '>-20%</span>
                    <div className='p-2'>
                      <div className='p-[10px] bg-white rounded-full'>
                        <a href="">
                         <img src={heart} alt="" />
                        </a>
                      </div>
                      <div className='p-[10px] bg-white rounded-full'>
                        <a href="">
                          <img src={Eyes} alt="" />
                        </a>
                      </div>
                      <div className='p-[10px] flex justify-center bg-white rounded-full'>
                        <a href="">
                          <img src={Cart} alt="" />
                        </a>
                      </div>

                    </div>
                  </div>

                  <div className='overflow-hidden'>
                    <img decoding="async" alt="custom-image" class="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
                  </div>
                  <div className='text-center leading-10 p-4 max-md:p-1'>
                    <h5>Monstera plant</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$60</del>
                      <span>$48</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-2 p-2 z-10'>
                    <span className='text-white bg-black px-2'>-20%</span>
                  </div>
                  <div className="overflow-hidden">
                    <img decoding="async" loading="lazy" alt="custom-image" class="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp" />
                  </div>
                  <div className='text-center leading-10 p-4 max-md:p-1 '>
                    <h5>Haworthia</h5>
                    <p className='text-muted'>
                      <del className='pr-[8px]'>$87</del>
                      <span>$70</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-2 p-2 z-10'>
                    <span className='text-white bg-black px-2'>-21%</span>
                  </div>
                  <div className="overflow-hidden">
                    <img decoding="async" loading="lazy" alt="custom-image" class="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp" />
                  </div>
                  <div className='text-center leading-10 p-4 max-md:p-1'>
                    <h5>Bird's nest fern</h5>
                    <p className='text-muted'>
                      <del className='pr-[8px]'>$68</del>
                      <span>$54</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-2 p-2 z-10'>
                    <span className='text-white bg-black px-2'>-11%</span>
                  </div>
                  <div className="overflow-hidden">
                    <img decoding="async" alt="custom-image" class="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" />
                  </div>
                  <div className='text-center leading-10 p-4 max-md:p-1'>
                    <h5>Peace lily</h5>
                    <p className='text-muted'>
                      <del className='pr-[8px]'>$72</del>
                      <span>$64</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div>
                    <div className="overflow-hidden">
                      <img decoding="async" loading="lazy" alt="custom-image" class="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp" />
                    </div>
                    <div className='text-center leading-10 p-4 max-md:p-1'>
                      <h5>Barrel cactus</h5>
                      <p className='text-muted '>
                        <span>$67.00</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-2 p-2 z-10'>
                    <span className='text-white bg-black px-2'>-26%</span>
                  </div>
                  <div className="overflow-hidden">
                    <img decoding="async" loading="lazy" alt="custom-image" class="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Snake-Plant.webp" />
                  </div>
                  <div className='text-center leading-10 p-4 max-md:p-1'>
                    <h5>Snake plant</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$54</del>
                      <span>$40</span>
                    </p>
                  </div>
                </div>





              </div>

            </section>
          </section>
        </div>
      </Container>

    </div>
  )
}

export default Interior_Plant
