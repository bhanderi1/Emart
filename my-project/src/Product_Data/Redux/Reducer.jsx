import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

const getCartDataFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const reducer = (state = getCartDataFromLocalStorage(), action) => {
  switch (action.type) {
    case ADD_TO_CART:

     const existingProduct = state.findIndex(item => item.id === action.data.id)
     let updateCartData
     if(existingProduct >= 0){
      updateCartData = state.map((item) => item.id === action.data.id ? {...item , quantity:item.quantity += 1} : item)
      localStorage.setItem['cart', JSON.stringify(updateCartData)]
     }
     else{
      updateCartData = [{...action.data , quantity:1} , ...state]
      localStorage.setItem('cart',JSON.stringify(updateCartData))
     }
     return existingProduct

    case REMOVE_TO_CART:
      console.warn("removeToCartReducer Called", action);
      const updatedCartRemove = state.filter(item.id !== action.data);
      localStorage.setItem("cart", JSON.stringify(updatedCartRemove));
      return updatedCartRemove;

    case EMPTY_CART:
      console.warn("emptyCartReducer Called", action);
      localStorage.removeItem("cart");
      return [];

    default:
      return state;
  }
};

export default reducer;
