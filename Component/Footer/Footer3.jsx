import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Visa from '../../assets/Visa.svg'
import WebMoney from '../../assets/WebMoney.svg'
import JCB from '../../assets/JCB.svg'
import Discover from '../../assets/Discover.svg'
import Experss from '../../assets/Experss.svg'
import Maestro from '../../assets/Maestro.svg'
const Footer3 = () => {
    return (
            <div className='bg-[#efefef]'>
                <Container>
                    <section>
                        <div className='row pt-[100px] pb-[90px] flex max-md:block  max-lg:py-[50px] max-md:py-[40px]'>
                            <div className='col col-lg-3 grid col-md-6 max-lg:mt-[30px] max-md-w-auto border-r-[1px] border-[#d2d2d2] max-lg:border-0' >
                                <div className='flex items-center'>
                                  <p className='text-muted text-[15px] mb-[40px]'>Molestie vitae massa felis, aliquam  lectus at. Ultricies et,quis sit fermentum.</p>
                                </div>
                            </div>
                            <div className='col col-lg-3 grid col-md-6 '>
                                <ul className='leading-8 ps-[40px] max-lg:p-0'>
                                    <h1 className='font-medium mb-[15px] text-[17px]'>Quick Link</h1>
                                    <li className='text-muted text-[15px]'>About</li>
                                    <li className='text-muted text-[15px]'>Product</li>
                                    <li className='text-muted text-[15px]'>Responsibility</li>
                                    <li className='text-muted text-[15px]'>Career</li>
                                </ul>
                            </div>
                            <div className='col col-lg-3 grid col-md-6 max-lg:mt-[30px]'>
                                <ul className='leading-8 '>
                                    <h1 className='font-medium mb-[15px] text-[17px]'>Service</h1>
                                    <li className='text-muted text-[15px]'>My Account</li>
                                    <li className='text-muted text-[15px]'>Checkout Page</li>
                                    <li className='text-muted text-[15px]'>Help Center</li>
                                    <li className='text-muted text-[15px]'>Terms & Condition</li>
                                </ul>
                            </div>
                            <div className='col col-lg-3 grid col-md-6 max-lg:mt-[30px]'>
                                <ul className='leading-8 '>
                                    <h1 className='font-medium mb-[15px] text-[17px]'>More</h1>
                                    <li className='text-muted text-[15px]'>Gift Card</li>
                                    <li className='text-muted text-[15px]'>Lookbook</li>
                                    <li className='text-muted text-[15px]'>Rewards Program</li>
                                    <li className='text-muted text-[15px]'>Wedding Dress</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Container>

                <div className='h-[1px] bg-[#c7c8cb]'></div> 
                 <Container>
                    <div className=' py-3 flex justify-between max-md:block  items-center'>
                        <div>
                            <ul className='flex'>
                                <li className='h-[35px] w-[50px] pe-3'>
                                    <img src={Visa} alt="" />
                                </li>
                                <li className='h-[35px] w-[50px] pe-3'>
                                    <img src={WebMoney} alt="" />
                                </li>
                                <li className='h-[35px] w-[50px] pe-3'>
                                    <img src={Maestro} alt="" />
                                </li>
                                <li className='h-[35px] w-[50px] pe-3'>
                                    <img src={JCB} alt="" />
                                </li>
                                <li className='h-[35px] w-[50px] pe-3'>
                                    <img src={Discover} alt="" />
                                </li>
                                <li className='h-[35px] w-[50px] '>
                                    <img src={Experss} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className='h-[1px] max-md:bg-[#c7c8cb]'></div>
                        <div className='flex  max-sm:py-1 max-md:justify-start max-md:mt-[15px]'>
                            <div className='flex justify-end'>
                                <span className="text-base text-gray-500">Designed by :<span className="font-bold">Srushti</span></span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    )
}

export default Footer3
