import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import heart from '../assets/heart.svg';
import Eyes from '../assets/Eyes.svg';
import Cart from '../assets/Cart.svg';
import { addToCart, addTowishlist } from '../Product_Data/Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { productData } from '../Product_Data/ProductRedux/ProductAction';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Interior_Plant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.ProductReducer);

  const isAuthenticated = !!localStorage.getItem("token");
  console.log("Authenticated:", isAuthenticated);

  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);

  const AddWishlist = (item) => {
    if (!isAuthenticated) {
      toast.warning("Please login to add to wishlist.", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    dispatch(addTowishlist(item));
    toast.success('Successfully added to wishlist', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const AddCartList = (item) => {
    if (!isAuthenticated) {
      toast.warning("Please login to add to cart.", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    dispatch(addToCart(item));
    toast.success('Successfully added to cart', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <div className='continer flex justify-center py-[40px] max-xl:p-0 overflow-hidden'>
      <Container>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-[42px] font-medium max-lg:text-[30px]'>Best interior plants</h1>
            <p className="pt-3 md:pt-4 text-muted text-[14px]">
              Rectangle follower library hand ellipse device strikethrough.
            </p>
          </div>
        </div>

        <div className='max-lg:py-[30px] py-[50px]'>
          <section className='flex max-md:block justify-between'>
            <section className='w-[40%] max-md:w-[100%] max-md:mb-[20px] interior-img top-0 ms-2'>
              <img
                decoding="async"
                src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plant-gallery-left-img.webp"
                alt="plant-gallery-left-img"
                loading="lazy"
              />
            </section>

            <section className='w-[57%] pl-5 max-md:w-[100%] max-md:p-0 '>
              <div className='flex flex-wrap'>
                {data?.flat()?.slice(6, 12)?.map((item) => (
                  <div key={item.id} className='col-6 col-md-4 px-1 relative'>
                    <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                      <span className='text-white bg-black px-2'>{item.discount}</span>
                    </div>
                    <div className='relative primary-img'>
                      <div className='overflow-hidden'>
                        <img src={item.img} alt={item.name} className='w-full' />
                      </div>
                      <div className='absolute left-0 top-0 z-1 shop-icon'>
                        <div className='md:p-2'>
                          <div className='sm:p-[12px] p-[7px] bg-white rounded-full m-2 flex justify-center'>
                            <button onClick={() => AddWishlist(item)}>
                              <img src={heart} alt="wishlist" height={16} width={16} />
                            </button>
                          </div>
                          <div className='sm:p-[12px] p-[7px] bg-white rounded-full m-2 flex justify-center'>
                            <button>
                              <img src={Eyes} alt="view" height={16} width={16} />
                            </button>
                          </div>
                          <div className='sm:p-[12px] p-[7px] bg-white rounded-full m-2 flex justify-center'>
                            <button onClick={() => AddCartList(item)}>
                              <img src={Cart} alt="cart" height={8} width={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-center leading-10 px-[12px] py-[23px]'>
                      <h5>{item.name}</h5>
                      <p className='text-muted '>
                        <del className='pr-[8px]'>${item.d_price}</del>
                        <span>${item.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Interior_Plant;
