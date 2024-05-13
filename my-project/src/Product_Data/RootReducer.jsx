import {combineReducers} from 'redux'
import Reducer from './Redux/Reducer'
import ProductReducer from './ProductRedux/ProductReducer'

const RootReducer =combineReducers({
    Reducer,
    ProductReducer
})

export default RootReducer