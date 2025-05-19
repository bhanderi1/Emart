import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Gardening_Tools = () => {
    const navigate = useNavigate();
    return (
        <div className='relative mb-[50px]'>

            <div className="bg-[url('https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/full-bg-img-scaled.webp')] relative bg-cover h-[430px] bg-repeat-x bg-start">

                {/* Overlay */}
                <div className='max-lg:absolute max-lg:opacity-50 max-lg:h-full w-full max-lg:bg-black z-[0]'></div>

                {/* Content */}
                <Container className='flex items-start gardening relative z-[1]'>
                    <div className='ms-auto max-w-[480px] max-md:right-auto flex items-center gardening'>
                        <div>
                            <div className='max-md:block'>
                                <h1 className='text-[40px] mb-[20px] text-white max-md:text-[30px] max-md:flex justify-center items-center'>
                                    <div>
                                        Find your perfect<br />
                                        <span className='text-wrap flex'>gardening tools on best price</span>
                                    </div>
                                </h1>
                                <div className='mt-5 mb-3 max-md:flex md:justify-center justify-start z-30'>
                                    <button
                                        onClick={() => {
                                            navigate("/shop_now");
                                        }}
                                        className='inline-block py-[12px] px-[40px] font-semibold hover:-translate-y-[15px] duration-300 ease-in-out bg-white text-black shop-now'
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Gardening_Tools;
