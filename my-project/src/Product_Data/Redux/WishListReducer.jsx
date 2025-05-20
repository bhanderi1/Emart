import { ADD_TO_WISHLIST, EMPTY_WISHLIST, REMOVE_TO_WISHLIST } from "./Constant";

// Utility function to get wishlist from localStorage
const getWishlistDataFromLocalStorage = () => {
  const wishlistData = localStorage.getItem("wishlist");
  console.log(wishlistData);
  
  return wishlistData ? JSON.parse(wishlistData) : [];
};

// Initial state is loaded from localStorage
const WishlistReducer = (state = getWishlistDataFromLocalStorage(), action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      // Check if the product already exists in the wishlist
      const existingProductIndex = state.findIndex(item => item.id === action.data.id);
      let updatedWishlist;

      if (existingProductIndex >= 0) {
        // If it exists, increment the quantity (immutably)
        updatedWishlist = state.map((item) =>
          item.id === action.data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not, add new item with quantity 1
        updatedWishlist = [{ ...action.data, quantity: 1 }, ...state];
      }

      // Update localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    }

    case REMOVE_TO_WISHLIST: {
      // Remove item by filtering it out
      const updatedWishlist = state.filter(item => item.id !== action.data);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    }

    case EMPTY_WISHLIST: {
      // Clear wishlist from localStorage and state
      localStorage.removeItem("wishlist");
      return [];
    }

    default:
      return state;
  }
};

export default WishlistReducer;
