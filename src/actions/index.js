export const addProductToCart = productId => ({
	type: 'ADD_PRODUCT_TO_CART',
	payload: {
		productId
	}
})

export const decreaseProductQty = productId => ({
	type: 'DECREASE_PRODUCT_QTY',
	payload: {
		productId
	}
})

export const removeProductFromCart = cartId => ({
	type: 'REMOVE_PRODUCT_FROM_CART',
	payload: {
		cartId
	}
})

export const increaseProductQty = productId => ({
	type: 'INCREASE_PRODUCT_QTY',
	payload: {
		productId
	}
})