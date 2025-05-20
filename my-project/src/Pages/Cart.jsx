import React , {useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeToCart } from "../Product_Data/Redux/Action";
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

 

   const navigate = useNavigate();
   const isAuthenticated = !!localStorage.getItem("token");
   const dispatch = useDispatch();
 
   useEffect(() => {
     if (!isAuthenticated) {
       toast.warning("Please login to access your cart.", {
         position: "top-right",
         autoClose: 2000,
       });
       setTimeout(() => navigate("/login"), 2500);
     }
   }, [isAuthenticated, navigate]);

    const cartData = useSelector((state) => state.Reducer);

  const ProductAmount = cartData.reduce((total,item)=> total + item.price * item.quantity,0)

  const shippingCost = 10; 
  const freeShipping = 1500;
  const FinalTotal = ProductAmount + shippingCost;
  const ShippingRate = Math.max(freeShipping - FinalTotal, 0);


  const RemovetoCart = (item) =>{
    dispatch(removeToCart(item.id)),
    toast.error('Item Remove To the List.', {
      position: "bottom-right",
      autoClose: 3000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "light",
      // transition: Bounce,
      });
  }

  return (
    <>
      <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
        <Container className="py-[50px]">
          {cartData.length === 0 &&(
            <div className="py-[150px] mx-[60px]">
              <div className="mb-[50px] shadow-2xl shodow-gray-700">
                <p className="py-[15px] bg-white text-[18px] px-[25px]">
                  Your Cart is currently empty.
                </p>
              </div>
              <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
                <NavLink to='/shop_now'
                  className="text-white py-[13px] px-[30px] bg-black text-[17px] " >
                  Return To Shop
                </NavLink>
              </button>
            </div>)}

           {
            cartData.length >= 1 &&(
          <div className="flex container mx-auto justify-between max-xl:block">
            <div className="w-[65%] text-center bg-white mx-auto max-xl:w-[100%] p-[20px] shadow-2xl shodow-gray-700 max-md:p-[15px]">  
            <div className="mb-[20px] max-lg:mb-[15px]">
            <div className="border-2 border-dashed border-[#e9e9e9] p-[20px] text-start max-lg:text-[13px] max-lg:p-[10px]">
                <p>Buy <span className="text-red-500">${ShippingRate}</span> more for get <span className="font-semibold">Free Shipping!!</span></p>
            </div>
            </div>

              <div>
                <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px] max-md:hidden  max-lg:pt-[10px] max-lg:pb-[10px]">
                  <div className="col-6 font-medium  max-md:text-[13px] max-xl:text-start">Products</div>
                  <div className="col-2 font-medium  max-md:text-[13px]">Price</div>
                  <div className="col-2 font-medium  max-md:text-[13px]">Quantity</div>
                  <div className="col-2 font-medium  max-md:text-[13px]">Total</div>
                </div>
              </div>
              <hr />
              {cartData.flat().map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-between  items-center py-[20px] max-sm:block max-md:leading-10 max-md:py-[10px]">
                      <div className="flex col-6 items-center pl-[20px] max-md:p-0 max-sm:block max-md:w-auto max-md:leading-10    max-lg:col-5 max-md:min-w-[220px]">
                        <button onClick={() =>RemovetoCart(item)} className="flex max-md:justify-start max-md:px-[8px] max-md:pb-[15px] max-sm:flex max-sm:justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </button>
                         <div className="flex items-center">
                        <img
                          className="h-28  w-28 col-2 ml-[15px] max-lg:h-16 max-lg:w-16  max-md:h-16 max-md:w-15 max-md:m-0 max-lg:ml-[2px]"
                          src={item.img}
                          alt="" />
                        <div className="  max-sm:w-auto flex max-md:justify-start ml-[10px] max-sm:m-0 text-wrap max-lg:text-[13px] max-lg:ml-[5px] max-sm:ml-[10px] max-md:col-8">{item.name}</div>
                        </div>
                      </div>
                      <div className="col-2 max-md:w-auto max-md:justify-start justify-center flex max-lg:text-[13px]">${item.price}.00</div>
                      <div className="col-2 items-center flex justify-center max-md:justify-start max-md:w-auto">
                        <div className="border-1 border-black py-[8px] px-[10px]  max-md:py-0">
                          <button onClick={()=> dispatch(decrement(item.id))} className="mx-[7px]">-</button>
                          <button className="mx-[7px] max-lg:text-[13px]">{item.quantity}</button>
                          <button onClick={()=> dispatch(increment(item.id))} className="mx-[7px]">+</button>
                        </div>
                      </div>
                      <div className="col-2 max-md:w-auto max-md:justify-start flex justify-center max-lg:text-[13px]">${item.price * item.quantity}.00</div>
                    </div>
                    <hr />
                  </div>
                );
              })}
              {/* <div className="flex justify-start py-[15px] ">
                <input type="number" className="border-1 border-[#d3ced2] px-[10px]" placeholder="coupon Code" />
                <button className="bg-black py-[11px] px-[33px] border-black border-1 text-white checkout" type="submit">Apply Coupon</button>
              </div> */}
            </div>

            <div className="w-[30%] bg-white max-xl:w-[100%] mx-auto max-xl:mt-[30px] shadow-2xl shodow-gray-700 ">
              <div className="p-[25px] max-md:p-[15px]">
                <h4 className="my-[8px] text-[14px] font-medium">Cart Totals</h4>
                <hr />
                <div className="flex justify-between mt-[30px] mb-[20px] max-md:mt-[15px] max-md:mb-[15px]">
                  <span className="max-lg:text-[13px]">Subtotal</span>
                  <span className="max-lg:text-[13px]">${ProductAmount}.00</span>
                </div>
                <hr />
                <div className="leading-10 my-[15px]">
                  <h1 className="max-lg:text-[13px]">Shipping</h1>
                  <div className="flex justify-between">
                    <span className="max-lg:text-[13px]">Flat Rate:</span>
                    <span className="max-lg:text-[13px]">$10.00</span>
                  </div>
                  <div className="max-lg:text-[13px]">
                    Shipping to <span className="font-bold">CA</span>
                  </div>
                  <h4 className="max-lg:text-[13px]">Change address </h4>
                </div>
                <hr />
                <div className="flex justify-between my-[25px] max-md:my-[15px]">
                  <span>Total:</span>
                  <span>${FinalTotal}.00</span>
                </div>
                <NavLink to='/checkout'>
                <div className="w-full py-[15px] text-center border-2 border-black hover:-translate-y-[15px] duration-300 ease-in-out bg-black text-white checkout max-md:py-[10px]">
                  <button className="max-lg:text-[13px]">Proceed To Checkout</button>
                </div>
              </NavLink>
              </div>
            </div>
          </div> )
           }
        </Container>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Cart;
