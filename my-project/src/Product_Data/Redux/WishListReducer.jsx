import { ADD_TO_WISHLIST, EMPTY_WISHLIST, REMOVE_TO_WISHLIST } from "./Constant";

const getWishlistDataFromLocalStorage = () => {
  const wishlistData = localStorage.getItem("wishlist");
  return wishlistData ? JSON.parse(wishlistData) : [];
};

const WishlistReducer = (state = getWishlistDataFromLocalStorage(), action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // const updatedWishlistAdd = [action.data, ...state];
      // localStorage.setItem("Wishlist", JSON.stringify(updatedWishlistAdd));
      // return updatedWishlistAdd;

      const existingProduct = state.findIndex(item=> item.id === action.data.id)
      let updateWishListData;

      if(existingProduct >= 0)
        {
          updateWishListData = state.map((item) => item.id === action.data.id ? {...item, quantity:item.quantity +=1} : item )
        }
      else{
        updateWishListData = [{...action.data , quantity:1}, ...state]
      }
      localStorage.setItem('wishlist', JSON.stringify(updateWishListData))
      return updateWishListData
 
      case REMOVE_TO_WISHLIST:
        console.warn("removeToWishlistReducer Called", action);
        const updatedWishlistRemove = state.filter(item =>item.id !== action.data);
        localStorage.setItem("cart", JSON.stringify(updatedWishlistRemove));
        return updatedWishlistRemove;
    
      case EMPTY_WISHLIST:
        console.warn('emptyWishlistReducer Called', action);
        localStorage.removeItem("Wishlist")
        return []

    default: return state;
  }
}

export default WishlistReducer;
