import { UPDATE_PRODUCT, DELETE_PRODUCT } from './types';

export const updateProduct = (product) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    });
    alert('Product updated successfully!');
  } catch (error) {
    console.error('Error updating product:', error);
    alert('Error updating product!');
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });
    alert('Product deleted successfully!');
  } catch (error) {
    console.error('Error deleting product:', error);
    alert('Error deleting product!');
  }
};

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});
