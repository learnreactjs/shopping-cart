import axios from 'axios';
import { 
	FETCH_PRODUCTS, 
	ADD_PRODUCT_TO_CART, 
	DECREASE_PRODUCT_QTY, 
	REMOVE_PRODUCT_FROM_CART, 
	INCREASE_PRODUCT_QTY, 
	MOVE_ITEM, SORT_PRODUCT, 
	SET_FILTER,
	Filters } from '../constants/actionTypes';

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

export const removeProductFromCart = (cartItemId, qty) => ({
	type: REMOVE_PRODUCT_FROM_CART,
	payload: {
		cartItemId,
		qty
	}
})

export const increaseProductQty = (productId, qty) => ({
	type: INCREASE_PRODUCT_QTY,
	payload: {
		productId,
		qty
	}
})

export const sortProduct = ({ oldIndex, newIndex }) => ({
	type: SORT_PRODUCT,
	payload: {
		oldIndex,
		newIndex
	}
})

export const moveItem = ({dragIndex, hoverIndex}) => ({
	type: MOVE_ITEM,
	payload: {
		dragIndex,
		hoverIndex
	}
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
		filter
	}
})

export const productFilters = Filters;