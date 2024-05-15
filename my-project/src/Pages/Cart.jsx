import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.Reducer);
  const amount =
    cartData.length &&
    cartData.map((item) => item.d_price).reduce((prev, next) => prev + next);
  return (
    <>
      <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
        <Container>
          <div className="py-[150px]">
            <div className="mb-[50px] shadow-2xl shodow-gray-700">
              <p className="py-[18px] bg-white text-[18px] px-[25px]">
                Your Cart is currently empty.
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

          <div className="flex container mx-auto justify-between">
            <table className="w-[65%] text-center table-fix bg-white ">
              <thead>
                <tr className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                  <th className="col-6 font-normal">Products</th>
                  <th className="col-2 font-normal">Price</th>
                  <th className="col-2 font-normal">Quantity</th>
                  <th className="col-2 font-normal">Total</th>
                </tr>
              </thead>
              <hr />
              {cartData.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr className="flex justify-betweenpt-[30px] items-center py-[30px] ">
                      <td className="flex col-6 items-center">
                        <img
                          className="h-32  w-32 col-6"
                          src={item.img}
                          alt=""
                        />
                        <td className="col-6">{item.name}</td>
                      </td>
                      <td className="col-2">{item.d_price}</td>
                      <td className="col-2">1</td>
                      <td className="col-2">$123</td>
                    </tr>
                    <hr />
                  </tbody>
                );
              })}
            </table>

            <div className="w-[30%] bg-white">
              {/* <thead>
            <tr className='border-2 border-black'>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-2 border-black'>
              <td>{amount}</td>
            </tr>
          </tbody> */}

              <div className="p-[25px]">
                <h4 className="my-[8px]">Cart Totals</h4>
                <hr />
                <div className="flex justify-between mt-[30px] mb-[20px]">
                  <span>Subtotal</span>
                  <span>{amount}</span>
                </div>
                <hr />
                <div className="leading-10 my-[15px]">
                  <h1>Shipping</h1>
                  <div className="flex justify-between">
                    <span>Flat Rate:</span>
                    <span></span>
                  </div>
                  <div>
                    Shipping to <sapn className="font-bold">CA</sapn>
                  </div>
                  <h4>Change address </h4>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
