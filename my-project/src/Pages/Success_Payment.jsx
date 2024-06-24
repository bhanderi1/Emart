import React from 'react'
import Container from "react-bootstrap/esm/Container";
import { useSelector } from 'react-redux';
import success from '../assets/success.png'
import { NavLink } from 'react-router-dom';

const Success_Payment = () => {
    let date = new Date()
    const cartData = useSelector((state) => state.Reducer);

    const ProductAmount = cartData.reduce((total, item) => total + item.price * item.quantity, 0)


    return (
        <div>
            <div className='bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc] py-[100px] max-md:py-[50px]'>
                <Container className='flex justify-center items-center'>
                    <div className='bg-white p-[40px] rounded-2xl max-w-[600px] max-md:p-[20px] shadow bg-body-tertiary'>
                        <div className='mb-[20px] flex justify-center'>
                            <img src={success} alt="" className='h-[60px] w-[60px]' />
                        </div>
                        <h1 className='font-semibold text-[30px] mb-[15px] flex justify-center max-md:text-[25px]'>Thank you for your order!</h1>
                        <p className='mb-[20px] max-md:text-[12px] flex justify-center'>You Order was Successfully placed and is being processed.</p>
                        <h4 className='flex justify-center font-medium text-[20px] mb-[15px] max-md:text-[18px]'>Order Details</h4>
                        <div>
                            <div className='flex justify-between mb-[15px]'>
                                <span>Order Number:</span>
                                <span>
                                    {Math.floor(Math.random() * 100000000)}
                                </span>
                            </div>
                            <div className='flex justify-between mb-[15px]'>
                                <span>Order Date:</span>
                                <span>{date.toDateString()}</span>
                            </div>
                            <div className='flex justify-between mb-[15px]'>
                                <span>Total Amount:</span>
                                <span>${ProductAmount + 10}.00</span>
                            </div>
                            <div className='flex justify-between mb-[20px]'>
                                <span>Order Delivered :</span>
                                <span>3 To 5 Days</span>
                            </div>

                            <NavLink to='/'>
                                <button className='w-full'>
                                    <div className='w-[100%] hover:-translate-y-[10px] duration-300 ease-in-out max-md:w-[100%] flex justify-center text-white py-[15px] px-[30px] bg-black text-[17px] checkout hover:border-2 hover:border-black'>
                                        Return To HomePage
                                    </div>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Success_Payment
