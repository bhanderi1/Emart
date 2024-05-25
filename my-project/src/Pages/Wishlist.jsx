import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, removeTowishlist } from "../Product_Data/Redux/Action";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.WishlistReducer);
  const dispatch = useDispatch();

  return (
    <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc] py-[70px]">
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

        <div className="flex container mx-auto justify-between max-xl:block">
          <div className="w-[100%] text-center table-fix bg-white max-xl:m-0 mx-[150px] p-[30px]">
          <hr/>
            <div>
              <div className="flex justify-between pb-[20px] pt-[20px] px-[20px]">
                <div className="col-4 font-medium">Products Name</div>
                <div className="col-3 font-medium">Unit Price</div>
                <div className="COL-2 font-medium">Date Added</div>
                <div className="col-3 font-medium"></div>
              </div>
            </div>
            <hr />
            {wishlistData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex justify-between items-center py-[20px] text-gray-500">
                    <div className="flex col-4 items-center ml-[15px]">
                    <button onClick={()=> dispatch(removeTowishlist(item.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </button>
                      <img className="h-28  w-28 col-2 ml-[25px]" src={item.img} alt="" />
                      <div className="col-6">{item.name}</div>
                    </div>
                    <div className="col-3">
                      <del className="pr-[12px]">${item.d_price}</del>
                      <span>${item.price}-20%</span>
                    </div>
                    <div className="col-2 items-center flex justify-center">
                       May 24, 2024
                    </div>
                    <div className=" col-3 hover:-translate-y-[10px] duration-300 ease-in-out">
                        <button className="text-white py-[13px] px-[30px] bg-black text-[17px]" onClick={()=> dispatch(addToCart(item))}>
                          Add To Cart
                        </button>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Wishlist;
