import {combineReducers} from 'redux'
import ProductReducer from '../Product_Data/ProductRedux/Product_Reducer'
import Reducer from '../Product_Data/Redux/Reducer'

const RootReducer = combineReducers({
    Reducer,
    ProductReducer
})

export default RootReducer