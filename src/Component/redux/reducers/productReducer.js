import { UPDATE_PRODUCT, DELETE_PRODUCT,ADD_PRODUCT } from '../actions/types';

const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload)
      };
    case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
    default:
      return state;
  }
};

export default productReducer;
