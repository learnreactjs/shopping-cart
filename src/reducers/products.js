const products = (state = [], { type, payload }) => {
	switch (type) {
    case 'FETCH_PRODUCTS': 
			return payload.products;
		case 'DECREASE_PRODUCT_QTY': {
			const productIndex = state.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;
			else {
				if(state[productIndex].qty === 0) return state;
				--state[productIndex].qty;
				if(state[productIndex].qty === 0) state[productIndex].available = false;
				return [...state];
			}
		}
		case 'INCREASE_PRODUCT_QTY': {
			const productIndex = state.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;

			state[productIndex].qty++;
			state[productIndex].available = true;
			return [...state];
		}
		default: 
			return state;
	}
}

export default products;