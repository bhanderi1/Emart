import{put , takeEvery} from  'redux-saga/effects'
import { PRODUCT_LIST } from '../Redux/Constant'
import { PRODUCT_SET } from '../Redux/Constant'

function* getProduct(){
    let data =yield fetch('http://localhost:3000/Product')
    data = yield data.json()
    console.warn(data);
    yield put({type:PRODUCT_SET ,data})
}

function* ProductSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default ProductSaga