import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Visa from '../../assets/Visa.svg'
import WebMoney from '../../assets/WebMoney.svg'
import JCB from '../../assets/JCB.svg'
import Discover from '../../assets/Discover.svg'
import Experss from '../../assets/Experss.svg'
import Maestro from '../../assets/Maestro.svg'

const Footer1 = () => {
  return (
    <div className='bg-[#f6f6f6]'>
      <Container>
        <section>
          <div className='row pt-[70px] pb-[60px] flex max-md:block  max-lg:py-[50px] max-md:py-[40px]'>
            <div className='col col-xl-3 grid col-md-6 '>
              <ul className='leading-7 '>
                <h1 className='font-medium mb-[20px] text-[16px]'>Quick Link</h1>
                <li className='text-muted text-[14px]'>About</li>
                <li className='text-muted text-[14px]'>Product</li>
                <li className='text-muted text-[14px]'>Responsibility</li>
                <li className='text-muted text-[14px]'>Career</li>
                <li className='text-muted text-[14px]'>Press</li>
                <li className='text-muted text-[14px]'>images Bank</li>
              </ul>
            </div>
            <div className='col col-xl-3 grid col-md-6 max-md:mt-[30px]'>
              <ul className='leading-7 '>
                <h1 className='font-medium mb-[20px] text-[16px]'>Customer Service</h1>
                <li className='text-muted text-[14px]'>My Account</li>
                <li className='text-muted text-[14px]'>Checkout Page</li>
                <li className='text-muted text-[14px]'>Help Center</li>
                <li className='text-muted text-[14px]'>Terms & Condition</li>
                <li className='text-muted text-[14px]'>Deliveries & Refunds</li>
                <li className='text-muted text-[14px]'>Cart Page</li>
              </ul>
            </div>
            <div className='col col-xl-3 grid col-md-6 max-lg:mt-[30px]'>
              <ul className='leading-7 '>
                <h1 className='font-medium mb-[20px] text-[16px]'>More</h1>
                <li className='text-muted text-[14px]'>Gift Card</li>
                <li className='text-muted text-[14px]'>Lookbook</li>
                <li className='text-muted text-[14px]'>Rewards Program</li>
                <li className='text-muted text-[14px]'>Wedding Dress</li>
                <li className='text-muted text-[14px]'>Host A Party</li>
                <li className='text-muted text-[14px]'>Extended Sizing</li>
              </ul>
            </div>
            <div className='col col-xl-3 grid col-md-6 max-lg:mt-[30px] max-md-w-auto'>
                <h1 className='font-medium mb-[20px] text-[16px]'>Don't miss Any Update</h1>
                <p className='text-muted text-[14px] mb-[40px]'>Molestie vitae massa felis, aliquam  lectus at. Ultricies et,quis sit fermentum aliquam et.</p>

                <div className="border-1 border-black flex bg-white">
                  <input type="email" placeholder="Your Email" className=' outline-none text-[15px] w-[100%] ps-[17px] py-[10px]' />
                  <button type='submit' className='bg-black flex justify-end py-[15px] px-[30px]'><img src="	https://emart.wpthemedemos.com/wp-content/themes/emart/assets/images/wht-arrow-right-thin.svg" alt="" className='hover:translate-x-[10px] duration-700 ease-in-out' /></button>
                </div>
            </div>
          </div>
        </section>
      </Container>
      <div className='h-[1px] bg-[#c7c8cb]'></div>
      <div className='container p-3 flex justify-between max-md:block'>
          <div className=' flex'>
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
          <div className='flex  max-sm:py-1 max-md:justify-start max-md:mt-[15px]'>
            <div className='flex'>
              <span className="text-base text-gray-500">Designed by :<span className="font-bold">Srushti</span></span>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Footer1
