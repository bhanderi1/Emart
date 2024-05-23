import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, INCREMENT, DECREMENT } from "./Constant";

const getCartDataFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const reducer = (state = getCartDataFromLocalStorage(),action) => {
  switch(action.type) {
    case ADD_TO_CART:

     const existingProduct = state.findIndex(item => item.id === action.data.id)
     let updateCartData;

     console.warn('add to cart reducer',action);

     if(existingProduct >= 0){
      updateCartData = state.map((item) => item.id === action.data.id ?{...item, quantity:item.quantity +=1}:item)
     }
     else
    {
      updateCartData = [{...action.data,quantity:1},...state]
    }
    localStorage.setItem('cart',JSON.stringify(updateCartData))
     return updateCartData

    case REMOVE_TO_CART:
      console.warn("removeToCartReducer Called", action);
      const updatedCartRemove = state.filter(item =>item.id !== action.data);
      localStorage.setItem("cart", JSON.stringify(updatedCartRemove));
      return updatedCartRemove;

      
      case INCREMENT:
        const updatedCartIncrement = state.map(item => item.id === action.data ? {...item , quantity: item.quantity + 1 } : item
        );
      localStorage.setItem('cart',JSON.stringify(updatedCartIncrement));
      return updatedCartIncrement;
    
    case DECREMENT:
      const updatedCartDecrement = state.map(item=>item.id === action.data && item.quantity > 1 ? {...item,quantity: item.quantity - 1}:item);
      localStorage.setItem('cart',JSON.stringify(updatedCartDecrement));
      return updatedCartDecrement;
      
      case EMPTY_CART:
        console.warn("emptyCartReducer Called", action);
        localStorage.removeItem("cart");
        return [];
        
    default:
      return state;
  }
};

export default reducer;
