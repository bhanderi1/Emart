import React , {useEffect , useState} from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCart, removeTowishlist } from "../Product_Data/Redux/Action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Wishlist = () => {

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

  const wishlistData = useSelector((state) => state.WishlistReducer);



  let date = new Date()


  const Addwishlist = (item) => {
    dispatch(addToCart(item))
    dispatch(removeTowishlist(item.id)),
      toast.success('Successfully Add To Item In Cart', {
        position: "bottom-right",
        autoClose: 3000,
      });
  }

  const RemoveWishlist = (item) => {
    dispatch(removeTowishlist(item.id)),
      toast.error('Item Remove To The List.', {
        position: "bottom-right",
        autoClose: 3000,
      });

  }

  
  if (!isAuthenticated) {
    return (
      <>
        <ToastContainer />
        <div className="text-center p-20 text-xl font-semibold text-red-600">
          Redirecting to login...
        </div>
      </>
    );
  }

  return (
    <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc] py-[70px] max-sm:pt-[20px]">
      <Container>
        {wishlistData.length === 0 && (
          <div className="py-[150px] mx-[60px]">
            <div className="mb-[50px] shadow-2xl shodow-gray-700">
              <p className="py-[18px] bg-white text-[18px] px-[25px]">
                Your Wishlist is currently empty.
              </p>
            </div>
            <div className="hover:-translate-y-[10px] duration-300 ease-in-out">
              <NavLink to='/shop_now'>
                <button className="text-white py-[13px] px-[30px] bg-black text-[17px]">
                  Return to Shop
                </button>
              </NavLink>
            </div>
          </div>
        )}
        {
          wishlistData.length >= 1 && (
            <div className="flex container mx-auto justify-between max-xl:block">
              <div className="w-[100%] text-center table-fix bg-white max-xl:m-0 mx-[150px] p-[30px] pb-[50px] shadow-2xl shodow-gray-700 max-md:p-[15px]">
                <hr />
                <div>
                  <div className="flex justify-between pb-[20px] pt-[20px] px-[20px] max-md:justify-center max-md:px-0 max-md:pt-[10px] max-md:pb-[10px]">
                    <div className="col-4 font-medium max-sm:w-[100%] max-md:text-start max-md:text-[13px]">Products Name</div>
                    <div className="col-3 font-medium max-sm:hidden max-md:text-[13px] ">Unit Price</div>
                    <div className="Col-2 font-medium max-md:hidden">Date Added</div>
                    <div className="col-3 font-medium max-sm:hidden"></div>
                  </div>
                </div>
                <hr />
                {wishlistData.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="flex justify-between items-center py-[20px] text-gray-500 max-sm:block max-md:leading-10 max-md:py-[10px]">

                        <div className="flex col-4 pl-[15px] max-lg:p-0 max-md:w-auto max-md:leading-10 items-center max-sm:block max-lg:col-5 max-md:min-w-[220px]">
                          <button onClick={() => RemoveWishlist(item)} className="flex max-md:justify-start max-md:px-[8px] max-md:pb-[15px] max-sm:flex max-sm:justify-end ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                          </button>
                          <div className="flex items-center">
                            <img className="h-28  w-28 col-2 ml-[15px] max-lg:h-16 max-lg:w-16  max-md:h-16 max-md:w-15 max-md:m-0 max-lg:ml-[2px]" src={item.img} alt="" />
                            <div className=" max-sm:w-auto flex max-md:justify-start ml-[10px] max-sm:m-0 text-wrap max-lg:text-[13px] max-lg:ml-[5px] max-sm:ml-[10px] max-md:col-8">{item.name}</div>

                          </div>
                        </div>

                        <div className="col-3 flex  justify-center max-sm:w-auto max-sm:justify-start max-lg:text-[13px] max-md:col-4 text-nowrap">
                          <del className="pr-[12px]">${item.d_price}.00</del>
                          <span>${item.price}.00-20%</span>
                        </div>

                        <div className="col-2 items-center flex justify-center text-wrap max-md:w-auto max-md:justify-start max-lg:text-[13px] max-lg:me-[5px] max-md:hidden">
                          {date.toDateString()}
                        </div>

                        <button className=" col-3 hover:-translate-y-[10px] duration-300 ease-in-out max-sm:w-[100%] flex justify-center text-white py-[12px] px-[30px] bg-black text-[17px]  max-lg:py-[8px] max-md:py-[0px]  checkout hover:border-2 hover:border-black max-lg:text-[13px] max-md:col-4 text-nowrap" onClick={() => Addwishlist(item)}>
                          Add To Cart
                        </button>

                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>)
        }
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Wishlist;










// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, NavLink } from "react-router-dom";
// import { decrement, increment, removeToCart } from "../Product_Data/Redux/Action";
// import Container from "react-bootstrap/esm/Container";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Check for auth token (this assumes you're storing JWT token in localStorage)
//   const isAuthenticated = !!localStorage.getItem("token");

//   // Redirect to login if not authenticated
//   useEffect(() => {
//     if (!isAuthenticated) {
//       toast.warning("Please login to access your cart.", {
//         position: "top-right",
//         autoClose: 2000,
//       });
//       setTimeout(() => navigate("/login"), 2500);
//     }
//   }, [isAuthenticated, navigate]);

//   const cartData = useSelector((state) => state.Reducer);
//   console.log(cartData);


//   const ProductAmount = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
//   const shippingCost = 10;
//   const freeShipping = 1500;
//   const FinalTotal = ProductAmount + shippingCost;
//   const ShippingRate = Math.max(freeShipping - FinalTotal, 0);

//   const RemovetoCart = (item) => {
//     dispatch(removeToCart(item.id));
//     toast.error('Item removed from the cart.', {
//       position: "bottom-right",
//       autoClose: 3000,
//     });
//   };

//   if (!isAuthenticated) {
//     return (
//       <>
//         <ToastContainer />
//         <div className="text-center p-20 text-xl font-semibold text-red-600">
//           Redirecting to login...
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <ToastContainer />
//       <div className="bg-gradient-to-l from-[#e8f3fc] to-[#f8fafc]">
//         <Container className="py-[50px]">
//           {cartData.length === 0 ? (
//             <div className="py-[150px] mx-[60px]">
//               <div className="mb-[50px] shadow-2xl">
//                 <p className="py-[15px] bg-white text-[18px] px-[25px]">Your Cart is currently empty.</p>
//               </div>
//               <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
//                 <NavLink to='/shop_now' className="text-white py-[13px] px-[30px] bg-black text-[17px]">Return To Shop</NavLink>
//               </button>
//             </div>
//           ) : (
//             <div className="flex container mx-auto justify-between max-xl:block">
//               {/* Left Column: Cart Items */}
//               <div className="w-[65%] bg-white p-[20px] shadow-2xl max-xl:w-full">
//                 <div className="mb-[20px] border-2 border-dashed border-[#e9e9e9] p-[20px] text-start">
//                   <p>Buy <span className="text-red-500">${ShippingRate}</span> more to get <span className="font-semibold">Free Shipping!!</span></p>
//                 </div>

//                 <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px] max-md:hidden">
//                   <div className="col-6">Products</div>
//                   <div className="col-2">Price</div>
//                   <div className="col-2">Quantity</div>
//                   <div className="col-2">Total</div>
//                 </div>
//                 <hr />

//                 {cartData.map((item) => (
//                   <div key={item.id}>
//                     <div className="flex justify-between items-center py-[30px] max-md:block">
//                       <div className="flex items-center pl-[20px] max-md:block">
//                         <button onClick={() => RemovetoCart(item)} className="px-[8px] pb-[15px]">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
//                         </button>
//                         <img className="h-32 w-32 ml-[20px]" src={item.img} alt={item.name} />
//                         <div className="ml-[20px]">{item.name}</div>
//                       </div>
//                       <div className="col-2 text-center">${item.price}.00</div>
//                       <div className="col-2 flex justify-center">
//                         <div className="border py-[8px] px-[10px]">
//                           <button onClick={() => dispatch(decrement(item.id))} className="mx-[7px]">-</button>
//                           <span className="mx-[7px]">{item.quantity}</span>
//                           <button onClick={() => dispatch(increment(item.id))} className="mx-[7px]">+</button>
//                         </div>
//                       </div>
//                       <div className="col-2 text-center">${item.price * item.quantity}.00</div>
//                     </div>
//                     <hr />
//                   </div>
//                 ))}

//                 <div className="flex justify-start py-[15px]">
//                   <input type="number" placeholder="Coupon Code" className="border px-[10px]" />
//                   <button className="bg-black text-white py-[11px] px-[33px] ml-2">Apply Coupon</button>
//                 </div>
//               </div>

//               {/* Right Column: Cart Totals */}
//               <div className="w-[30%] bg-white p-[25px] shadow-2xl max-xl:w-full mt-[30px]">
//                 <h4 className="text-[14px] mb-[8px]">Cart Totals</h4>
//                 <hr />
//                 <div className="flex justify-between mt-[30px] mb-[20px]">
//                   <span>Subtotal</span>
//                   <span>${ProductAmount}.00</span>
//                 </div>
//                 <hr />
//                 <div className="my-[15px] leading-10">
//                   <h1>Shipping</h1>
//                   <div className="flex justify-between">
//                     <span>Flat Rate:</span>
//                     <span>$10.00</span>
//                   </div>
//                   <div>Shipping to <span className="font-bold">CA</span></div>
//                   <h4>Change address</h4>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between my-[25px]">
//                   <span>Total:</span>
//                   <span>${FinalTotal}.00</span>
//                 </div>
//                 <NavLink to='/checkout'>
//                   <div className="text-center bg-black text-white py-[15px] border-2 border-black hover:-translate-y-[5px] duration-300">
//                     Proceed to Checkout
//                   </div>
//                 </NavLink>
//               </div>
//             </div>
//           )}
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Cart;
