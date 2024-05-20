import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , ADD_TO_WISHLIST ,REMOVE_TO_WISHLIST ,EMPTY_WISHLIST} from "./Constant";

export const addToCart =(data) => {
    console.warn('addToCartAction Called',data);
    return{
        type :ADD_TO_CART,
        data
    }
}

export const removeToCart =(data) =>{
    console.warn('removeToCart Called',data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const EmptyCart = () =>{
    console.log('emptyCartAction Called');
    return{
        type:EMPTY_CART,
    }
}

export const addTowishlist =(data) => {
    console.warn('addTo Wishlist Action Called',data);
    return{
        type :ADD_TO_WISHLIST,
        data
    }
}

// export const removeTowishlist =(data) =>{
//     console.warn('removeTo Wishlist Called',data);
//     return{
//         type:REMOVE_TO_WISHLIST,
//         data
//     }
// }

// export const Emptywishlist = () =>{
//     console.log('empty Wishlist Action Called');
//     return{
//         type:EMPTY_WISHLIST,
//     }
// }

