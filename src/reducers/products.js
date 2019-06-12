import { FETCH_PRODUCTS, DECREASE_PRODUCT_QTY, INCREASE_PRODUCT_QTY, SORT_PRODUCT } from '../constants/actionTypes'
import { move } from './functions';
const initState = [
	{
		id: 5,
		name: "Redux",
		image: "http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png",
		description: "A predictable state container for JavaScript apps.",
		available: false,
		price: 5,
		qty: 0
	}
]
function products(state = initState, { type, payload }) {
	switch(type) {
    case FETCH_PRODUCTS:{
      return [...payload.products, ...state];
		}
		case SORT_PRODUCT: {
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
			const { productId, qty } = payload;
			const productIndex = state.findIndex(product => product.id === productId);

			if(productIndex === -1) return state;

			state[productIndex].qty = state[productIndex].qty + qty;
			state[productIndex].available = true;
			return [...state];
		}
		default: 
			return state;
	}
}

export default products;