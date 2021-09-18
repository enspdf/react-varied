import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from "../types/productTypes";

const initialState = {
    loading: false,
    products: [],
    productsCount: 0,
    error: null
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                products: []
            }
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}