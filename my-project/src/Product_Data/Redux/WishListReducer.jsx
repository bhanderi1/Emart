import { ADD_TO_WISHLIST } from "./Constant";

const getWishlistDataFromLocalStorage = () => {
  const wishlistData = localStorage.getItem("wishlist");
  return wishlistData ? JSON.parse(wishlistData) : [];
};

const WishlistReducer = (state = getWishlistDataFromLocalStorage(),action) => {};
switch (action.type) {
  case ADD_TO_WISHLIST:
    const updatedWishlistAdd = [action.data, ...state];
    localStorage.setItem("Wishlist", JSON.stringify(updatedWishlistAdd));
    return updatedWishlistAdd;

  default:return state;
}

export default WishlistReducer;
