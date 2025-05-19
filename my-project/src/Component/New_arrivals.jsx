import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import heart from '../assets/heart.svg';
import Eyes from '../assets/Eyes.svg';
import Cart from '../assets/Cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { productData } from '../Product_Data/ProductRedux/ProductAction';
import { addToCart, addTowishlist } from '../Product_Data/Redux/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const New_arrivals = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ProductReducer);

    useEffect(() => {
        dispatch(productData());
    }, []);

    const AddWishlist = (item) => {
        dispatch(addTowishlist(item));
        toast.success('Successfully Added Item To Wishlist', {
            position: 'bottom-right',
            autoClose: 3000,
        });
    };

    const AddCartList = (item) => {
        dispatch(addToCart(item));
        toast.success('Successfully Added Item To Cart', {
            position: 'bottom-right',
            autoClose: 3000,
        });
    };

    return (
        <div className='continer flex justify-center py-[50px] max-xl:p-0'>
            <Container>
                <div className='flex justify-start'>
                    <h1 className='text-[42px] max-lg:text-[30px] font-medium'>New arrivals</h1>
                </div>

                <section className='max-md:block max-md:w-[100%] max-md:p-0 my-[30px]'>
                    <div className="flex flex-wrap -mx-2">
                        {
                            data.flat().slice(6, 11).map((item) => (
                             <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 sm:px-1 mb-7 sm:mb-2 relative arrival-item" key={item.id}>


                                    <div className="absolute right-5 top-3 z-10 max-md:hidden">
                                        <span className="text-white bg-black px-2">{item.discount}</span>
                                    </div>

                                    <div className="relative primary-img">
                                        <div className="overflow-hidden relative">
                                            <img decoding="async" loading="lazy" alt="custom-image" src={item.img} />
                                        </div>

                                        <div className="absolute left-0 top-0 z-10 shop-icon">
                                            <div className="md:p-3 sm:p-1">
                                                <div className="sm:p-[12px] p-[7px] bg-white rounded-full m-2 flex justify-center icon-1">
                                                    <button onClick={() => AddWishlist(item)}>
                                                        <img src={heart} alt="wishlist" height={16} width={16} />
                                                    </button>
                                                </div>
                                                <div className="sm:p-[12px] p-[7px] bg-white rounded-full m-2 flex justify-center icon-1">
                                                    <button>
                                                        <img src={Eyes} alt="view" height={16} width={16} />
                                                    </button>
                                                </div>
                                                <div className="sm:p-[12px] p-[7px] flex justify-center bg-white m-2 rounded-full icon-1">
                                                    <button onClick={() => AddCartList(item)}>
                                                        <img src={Cart} alt="cart" height={8} width={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                                        <h5>{item.name}</h5>
                                        <p className="text-muted">
                                            <del className="pr-[8px]">${item.d_price}</del>
                                            <span>${item.price}</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default New_arrivals;
