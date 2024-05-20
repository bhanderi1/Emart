import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeToCart } from "../Product_Data/Redux/Action";
import { productData } from "../Product_Data/ProductRedux/ProductAction";

const Cart = () => {

  const cartData = useSelector((state) => state.Reducer);
  const amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  const [quantity, setQuantity] = useState(0)
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevCount => prevCount - 1)
    }
  }
  const handleIncrement = () => {
    setQuantity(prevCount => prevCount + 1)
  }
  return (
    <>
      <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
        <Container className="py-[50px]">
          {cartData.length === 0 &&
            <div className="py-[150px] mx-[60px]">
              <div className="mb-[50px] shadow-2xl shodow-gray-700">
                <p className="py-[15px] bg-white text-[18px] px-[25px]">
                  Your Cart is currently empty.
                </p>
              </div>
              <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
                <a
                  href=""
                  className="text-white py-[13px] px-[30px] bg-black text-[17px] " >
                  Return To Shop
                </a>
              </button>
            </div>}

          <div className="flex container mx-auto justify-between max-xl:block">
            <div className="w-[65%] text-center bg-white mx-auto max-xl:w-[100%] p-[20px]">
              <div>
                <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                  <div className="col-6 font-normal">Products</div>
                  <div className="col-2 font-normal">Price</div>
                  <div className="col-2 font-normal">Quantity</div>
                  <div className="col-2 font-normal">Total</div>
                </div>
              </div>
              <hr />
              {cartData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-betweenpt-[30px] items-center py-[30px] ">
                      <div className="flex col-6 items-center pl-[20px]">
                        {/* <button  onClick={() => dispatch(removeToCart(item))}>remove</button> */}
                        <img
                          className="h-32  w-32 col-6"
                          src={item.img}
                          alt=""
                        />
                        <div className="col-6">{item.name}</div>
                      </div>
                      <div className="col-2">{item.price}</div>
                      <div className="col-2 items-center flex justify-center">
                        <div className="border-1 border-black py-[10px] w-[80%] ">
                          <button onClick={handleDecrement} className="mx-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                          <button className="mx-[7px]">{quantity}</button>
                          <button onClick={handleIncrement} className="mx-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                        </div>
                      </div>
                      <div className="col-2">123</div>
                    </div>
                    <hr />
                  </div>
                );
              })}
              <div className="flex justify-start py-[15px] ">
                <input type="number" className="border-1 border-[#d3ced2] px-[10px]" placeholder="coupon Code" />
                <button className="bg-black py-[11px] px-[33px] border-black border-1 text-white checkout" type="submit">Apply Coupon</button>
              </div>
            </div>

            <div className="w-[30%] bg-white max-xl:w-[100%] mx-auto max-xl:mt-[30px]">
              <div className="p-[25px]">
                <h4 className="my-[8px]">Cart Totals</h4>
                <hr />
                <div className="flex justify-between mt-[30px] mb-[20px]">
                  <span>Subtotal</span>
                  {/* <span>{amount}</span> */}
                </div>
                <hr />
                <div className="leading-10 my-[15px]">
                  <h1>Shipping</h1>
                  <div className="flex justify-between">
                    <span>Flat Rate:</span>
                    <span></span>
                  </div>
                  <div>
                    Shipping to <span className="font-bold">CA</span>
                  </div>
                  <h4>Change address </h4>
                </div>
                <hr />
                <div className="flex justify-between my-[25px]">
                  <span>Total:</span>
                  {/* <span>{amount}</span> */}
                </div>
                <div className="w-full py-[15px] text-center border-2 border-black hover:-translate-y-[15px] duration-300 ease-in-out bg-black text-white checkout">
                  <button>Proceed To Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
