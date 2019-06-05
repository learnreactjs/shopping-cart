let nextId = 0;

const cart = (state = [], action) => {
	switch(action.type) {
		case 'ADD_PRODUCT_TO_CART':
			const { payload } = action;
			const itemIndex = state.findIndex(item => item.productId === payload.productId);

			if(itemIndex === -1) return [...state, {...payload, id: ++nextId, date: new Date(), qty: 1 }];
			else {++state[itemIndex].qty; return state};
		default: 
			return state; 
	}
}

export default cart;