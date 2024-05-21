import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.WishlistReducer);
  return (
    <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
       <Container>
        {/* {wishlistData.length === 0 && ( */}
          <div className="py-[150px] mx-[60px]">
            <div className="mb-[50px] shadow-2xl shodow-gray-700">
              <p className="py-[18px] bg-white text-[18px] px-[25px]">
                Your Wishlist is currently empty.
              </p>
            </div>
            <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
              <a
                href=""
                className="text-white py-[13px] px-[30px] bg-black text-[17px] "
              >
                Return To Shop
              </a>
            </button>
          </div>
        {/* )} */}

        <div className="flex container mx-auto justify-between max-xl:block">
          <div className="w-[65%] text-center table-fix bg-white mx-auto max-xl:w-[100%] p-[20px]">
            <div>
              <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                <div className="col-6 font-normal">Products</div>
                <div className="col-2 font-normal">Price</div>
                <div className="col-2 font-normal">Quantity</div>
                <div className="col-2 font-normal">Total</div>
              </div>
            </div>
            <hr />
            {wishlistData.map((item) =>{
              return(
               <div key={item.id}>
               <div className="flex justify-betweenpt-[30px] items-center py-[30px] ">
                      <div className="flex col-6 items-center pl-[20px]">
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
                         
                        </div>
                      </div>
                      <div className="col-2">123</div>
                    </div>
                    <hr />
               </div>
              )
             })}
          </div>
        </div>
      </Container> 
    </div>
  );
};

export default Wishlist;
