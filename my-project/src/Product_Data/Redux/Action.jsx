import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Constant";

export const addToCart = (data) => {
    console.warn('addToCartAction Called' , data);

    return{
        type : ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.log('removeToCart Called' , data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () => {
    console.log('emptyCartAction called');
    return{
        type:EMPTY_CART
    }
}