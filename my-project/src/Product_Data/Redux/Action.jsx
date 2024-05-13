import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Constant";

export const addToCart = (data) => {
    console.warn('addToCartAction Called', data);

    return{
        type :ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{
    console.warn('removeToCart Called', data);

    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const EmptyCart = () =>{
    console.log('emptyCartAction Called');

    return{
        type:EMPTY_CART
    }
}