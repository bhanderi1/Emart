import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { NavLink } from 'react-router-dom'


const Shop_by_Categories = () => {
    return (
        <div className='continer flex justify-center'>
            <Container className='pb-[30px] max-xl:pb-[20px] '>
                <div className='flex justify-end max-xl:justify-start max-md:justify-center'>
                    <h1 className='text-[45px] max-lg:text-[33px] max-sm:text-[30px] font-[Jost] '>
                        Shop by Categories
                    </h1>
                </div>
                <section className='flex mt-[30px] overflow-hidden max-sm:mt-[20px]'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className='sm:p-3 overflow-hidden p-2'>
                            <div className='overflow-hidden'>
                                <div className='img-con up'>
                                    <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-1st.webp" alt="" />
                                    <div className='relative  bg-white'>
                                        <div >
                                            <NavLink to='/shop_now' className='flex overlay justify-between absolute ps-2 py-3 pb-2 items-center'>
                                                <p className='text-[24px]'>Aloe Vera</p>
                                                <div className='w-16 flex justify-center hover:translate-x-[10px] duration-300 ease-in-out'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative  sm:p-3  p-2'>
                            <div className='overflow-hidden'>
                                <div className='img-con up'>
                                    <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-2nd.webp" alt="" />
                                    <div className='relative bg-white '>
                                        <div >
                                            <NavLink to='/shop_now' className='flex justify-between absolute overlay ps-2 py-3 pb-2 items-center'>
                                                <h1 className='text-[24px]'>Old Lady Cactus</h1>
                                                <div className='w-16 flex justify-center hover:translate-x-[10px] duration-300 ease-in-out'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative sm:p-3  p-2'>
                            <div className='overflow-hidden'>
                                <div className='img-con up'>
                                    <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-3rd.webp" alt="" />
                                    <div className='relative  bg-white'>
                                        <div >
                                            <NavLink to='/shop_now' className='flex justify-between absolute overlay ps-2 py-3 pb-2 items-center'>
                                                <h1 className='text-[24px]'>Calathea Ornata</h1>
                                                <div className='w-16 flex justify-center hover:translate-x-[10px] duration-300 ease-in-out'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div></div>
                        </div>

                        <div className='relative sm:p-3  p-2'>
                            <div className='overflow-hidden'>
                                <div className='img-con up'>
                                    <img src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-4th.webp" alt="" />
                                    <div className='relative  bg-white'>
                                        <div >
                                            <NavLink to='/shop_now' className='flex justify-between overlay absolute ps-2 py-3 pb-2'>
                                                <h1 className='text-[24px] font-[Jost]'>Green Aloevera</h1>
                                                <div className='w-16 flex justify-center hover:translate-x-[10px] duration-300 ease-in-out'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Shop_by_Categories
