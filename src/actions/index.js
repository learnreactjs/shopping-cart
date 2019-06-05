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