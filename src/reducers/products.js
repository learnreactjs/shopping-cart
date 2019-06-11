import { FETCH_PRODUCTS, DECREASE_PRODUCT_QTY, INCREASE_PRODUCT_QTY, SORT } from '../constants/actionTypes'

function move( items, oldIndex, newIndex) {
  const item = items[oldIndex];
  items.splice(oldIndex, 1);
  items.splice(newIndex, 0, item);
  
  return [...items];
}

function products(state = [], { type, payload }) {
	switch(type) {
    case FETCH_PRODUCTS:{
      return payload.products;
		}
		case SORT: {
			const { oldIndex, newIndex } = payload;
			return move(state, oldIndex, newIndex);
		}
		case DECREASE_PRODUCT_QTY: {
			const productIndex = state.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;
			else {
				if(state[productIndex].qty === 0) return state;
				--state[productIndex].qty;
				if(state[productIndex].qty === 0) state[productIndex].available = false;
				return [...state];
			}
		}
		case INCREASE_PRODUCT_QTY: {
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