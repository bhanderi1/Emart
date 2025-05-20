import { combineReducers } from 'redux';
import Reducer from './Redux/Reducer';
import ProductReducer from './ProductRedux/ProductReducer';
import WishlistReducer from './Redux/WishListReducer';
import AuthReducer from './Auth/AuthReducer'

const RootReducer = combineReducers({
  Reducer,
  WishlistReducer,
  ProductReducer,
  AuthReducer, 
});

export default RootReducer;




