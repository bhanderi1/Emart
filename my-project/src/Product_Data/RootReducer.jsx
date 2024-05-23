import { combineReducers } from 'redux'
import Reducer from './Redux/Reducer'
import ProductReducer from './ProductRedux/ProductReducer'
import WishlistReducer from './Redux/WishListReducer'
const RootReducer = combineReducers({
    Reducer,
    WishlistReducer,
    ProductReducer
})

export default RootReducer