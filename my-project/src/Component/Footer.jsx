import React from 'react'
// import Visa from '../assets/Visa.svg'
// import WebMoney from '../assets/WebMoney.svg'
// import Maestro from '../assets/Maestro.svg'
// import JCB from '../assets/JCB.svg'
// import Discover from '../assets/Discover.svg'
// import Experss from '../assets/Experss.svg'
// import icon from '../assets/icon.svg'

import Visa from '../assets/Visa.svg'
import WebMoney from '../assets/WebMoney.svg'
import Maestro from '../assets/Maestro.svg'
import JCB from '../assets/JCB.svg'
import Discover from '../assets/Discover.svg'
import Experss from '../assets/Experss.svg'
import icon from '../assets/icon.svg'


const Footer = () => {
  return (

    <footer>
      <div className='h-[1px] bg-[#c7c8cb]'></div>
      <div>
        <div className="flex pt-36 pb-36 px-65 max-xl:pt-20 max-xl:pb-20 max-xl:px-0 container ">
          <div className="m-auto">
            <div className='flex justify-center mb-10 max-sm:mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="42" viewBox="0 0 52 42" fill="none"><path d="M6.00098 1H46.001C48.751 1 51.001 3.25 51.001 6V36C51.001 38.75 48.751 41 46.001 41H6.00098C3.25098 41 1.00098 38.75 1.00098 36V6C1.00098 3.25 3.25098 1 6.00098 1Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M51.001 6L26.001 23.5L1.00098 6" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <div className="text-center">
              <h1 className="text-5xl pb-12 max-xl:pb-6 max-md:text-2xl  max-lg:text-3xl">Subscribe newsletter</h1>
              <span className="text-gray-500 max-sm:px-5 text-xl  max-lg:text-lg max-sm:text-base">
                Subscribe Now and get more offers
              </span>
            </div>
            <div className="flex pt-4 gap-3 justify-center max-md:block ">
              <div className='pt-4'>
                <input
                  type="Email"
                  name="email"
                  placeholder="Your email adress..."
                  className="bg-gray-200 text-black border-none outline-none py-3 px-5 w-[500px] max-md:w-[300px] max-md:ml-[10px]  "
                />
              </div>
              <div className="pt-4 ">
                <button className="bg-black text-white py-3  px-5 max-md:w-[300px] max-md:ml-[10px]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[1px] bg-[#c7c8cb]'></div>
        <div className='container p-4 max-xl:p-3 '>
          <div className="flex justify-between items-center max-sm:block">
            <div className='col flex justify-start max-sm:justify-center max-sm:py-1'>
              <ul className='flex items-center'>
                <li className='px-2'>
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 10.3698C15.1234 11.2021 14.9812 12.052 14.5937 12.7988C14.2062 13.5456 13.5931 14.1512 12.8416 14.5295C12.0901 14.9077 11.2384 15.0394 10.4077 14.9057C9.57708 14.7721 8.80971 14.3799 8.21479 13.785C7.61987 13.1901 7.22768 12.4227 7.09402 11.592C6.96035 10.7614 7.09202 9.90971 7.47028 9.15819C7.84854 8.40667 8.45414 7.79355 9.20094 7.40605C9.94773 7.01856 10.7977 6.8764 11.63 6.99981C12.4789 7.1257 13.2648 7.52128 13.8716 8.12812C14.4785 8.73496 14.8741 9.52089 15 10.3698Z" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 5.5H16.51" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </a>
                </li>
                <li className='px-2'>
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none"><rect width="20" height="20" rx="1" fill="#989898"></rect><path d="M17.35 3H14.8C13.6728 3 12.5918 3.44777 11.7948 4.2448C10.9978 5.04183 10.55 6.12283 10.55 7.25V9.8H8V13.2H10.55V20H13.95V13.2H16.5L17.35 9.8H13.95V7.25C13.95 7.02457 14.0396 6.80837 14.199 6.64896C14.3584 6.48955 14.5746 6.4 14.8 6.4H17.35V3Z" fill="white"></path></svg>
                  </a>
                </li>
                <li className='px-2'>
                  <a href="">
                    <img src={icon} alt="" />
                  </a>
                </li>
                <li className='px-2'>
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 23 15" fill="none"><rect width="23" height="15" rx="4" fill="#989898"></rect><path d="M16 7.5L10 10.5311V4.46891L16 7.5Z" fill="#FEFCFB"></path></svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col flex justify-center max-sm:py-1'>
              <div className='flex'>
              <span className="text-base text-gray-500">Designed by:<span className="font-bold">srushti</span></span>
              </div>
            </div>
            <div className="col flex justify-end max-sm:justify-center max-sm:py-1 ">
              <ul className='flex'>
                <li className='h-[35px] w-[50px] px-2'>
                  <img src={Visa} alt="" /> 
                </li>
                <li className='h-[35px] w-[50px] px-2'>
                  <img src={WebMoney} alt="" />
                </li>

                <li className='h-[35px] w-[50px] px-2'>
                  <img src={Maestro} alt="" />
                </li>
                <li className='h-[35px] w-[50px] px-2'>
                  <img src={JCB} alt="" />
                </li>
                <li className='h-[35px] w-[50px] px-2'>
                  <img src={Discover} alt="" />
                </li>
                <li className='h-[35px] w-[50px] px-2'>
                  <img src={Experss} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
