const products = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_PRODUCTS': 
			return action.payload.products;
		case 'DECREASE_PRODUCT_QTY': 
			const { payload } = action;
			const productIndex = state.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;
			else {
				if(state[productIndex].qty === 0) return state;
				--state[productIndex].qty;
				if(state[productIndex].qty === 0) state[productIndex].available = false;
				return [...state];
			}
		default: 
			return state;
	}
}

export default products;