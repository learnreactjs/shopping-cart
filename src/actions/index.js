import axios from 'axios';
import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, DECREASE_PRODUCT_QTY, REMOVE_PRODUCT_FROM_CART, INCREASE_PRODUCT_QTY, SORT } from '../constants/actionTypes';

export const fetchAllProducts = () => {
	return dispatch => {
		return axios.get("/data/products.json")
			.then(response => {
				dispatch(fetchProducts(response.data));
			})
			.catch(error => {
				throw (error);
			})
	}
}

export const fetchProducts = (products) => {
	return {
		type: FETCH_PRODUCTS,
		payload: {
			products
		}
	}
}

export const addProductToCart = productId => ({
	type: ADD_PRODUCT_TO_CART,
	payload: {
		productId
	}
})

export const decreaseProductQty = productId => ({
	type: DECREASE_PRODUCT_QTY,
	payload: {
		productId
	}
})

export const removeProductFromCart = cartId => ({
	type: REMOVE_PRODUCT_FROM_CART,
	payload: {
		cartId
	}
})

export const increaseProductQty = productId => ({
	type: INCREASE_PRODUCT_QTY,
	payload: {
		productId
	}
})

export const sort = ({ oldIndex, newIndex }) => ({
	type: SORT,
	payload: {
		oldIndex,
		newIndex
	}
})