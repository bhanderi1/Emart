import { PRODUCT_LIST , PRODUCT_SET } from "../Redux/Constant";

const ProductReducer = (data = [], action) => {
    switch(action.type){
        case PRODUCT_LIST:
            console.warn('ProductReducer Called', action);
            localStorage.setItem('productList' ,JSON.stringify(action.data))
            return[...action.data]
        
        case PRODUCT_SET:
            console.warn('ProductReducer calles' ,action);
            localStorage.setItem('ProductList' ,JSON.stringify(action.data))
            return[...action.data]
    }
}
export default ProductReducer