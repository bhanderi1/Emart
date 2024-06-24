import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from '../assets/heart.svg'
import Eyes from '../assets/Eyes.svg'
import Cart from '../assets/Cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { productData } from '../Product_Data/ProductRedux/ProductAction'
import { addToCart, addTowishlist } from '../Product_Data/Redux/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

const Style_Four = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.ProductReducer)

  useEffect(() => {
    dispatch(productData())
  }, [])

  const AddWishlist = (item) => {
    dispatch(addTowishlist(item)),
      toast.success('Successfully Add Item To WishList', {
        position: "bottom-right",
        autoClose: 3000,
      });
  }

  const AddCartList = (item) => {
    dispatch(addToCart(item)),
      toast.success('Successfully Add Item To Cart', {
        position: "bottom-right",
        autoClose: 3000,
      });
  }
  return (
    <div>
      <div className='bg-[#fcf7ef] relative'>
        <div className='pt-[45px] pb-[40px] px-[15px]'>
          <Container>
            <h1 className='text-[29px] max-md:text-[25px] font-medium'>Product Style Four</h1>
          </Container>
        </div>
      </div>
      <section className='max-md:block max-md:w-[100%] max-md:p-0 my-[80px] container'>
        <div className='flex flex-wrap m-auto col-xs-block relative'>
          {data.flat().slice(0, 12).map((item) => {
            return (
              <div className='col-6 col-md-3 relative p-2'>
                <div className='absolute right-5  top-5 z-1 max-md:hidden'>
                  <span className='text-white bg-black px-2 '>{item.discount}</span>
                </div>
                <div className='relative primary-img'>
                  <div className='overflow-hidden relative'>
                    <img src={item.img} />
                  </div>
                  <div className=' absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon'>
                    <div className='flex justify-center absolute bottom-[10px] w-[100%]'>
                      <div className='p-[12px] bg-white rounded-full m-1 flex justify-center icon-1'>
                        <button onClick={() => AddWishlist(item)}>
                          <img src={heart} alt="" height={16} width={16} />
                        </button>
                      </div>
                      <div className='p-[12px] bg-white rounded-full m-1 flex justify-center icon-1'>
                        <button href="">
                          <img src={Eyes} alt="" height={16} width={16} />
                        </button>
                      </div>
                      <div className='p-[12px] flex justify-center bg-white m-1  rounded-full icon-1'>
                        <button onClick={() => AddCartList(item)}>
                          <img src={Cart} alt="" height={8} width={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
                  <h5 className='text-[20px] font-medium max-lg:text-[17px]'>{item.name}</h5>
                  <p className='text-muted '>
                    <del className='pr-[15px]'>${item.d_price}.00</del>
                    <span>${item.price}.00</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default Style_Four
