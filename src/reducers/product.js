import { 
	FETCH_PRODUCTS, 
	DECREASE_PRODUCT_QTY, 
	INCREASE_PRODUCT_QTY, 
	SORT_PRODUCT,
	SET_FILTER,
	Filters } from '../constants/actionTypes'
import { move } from './functions';
const initState = {
	items: [
		{
			id: 5,
			name: "Redux",
			image: "http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png",
			description: "A predictable state container for JavaScript apps.",
			available: false,
			price: 5,
			qty: 0
		}
	],
	filter: Filters.ALL
}
function products(state = initState, { type, payload }) {
	switch(type) {
    case FETCH_PRODUCTS:{
			state.items = [...payload.products, ...state.items]
			return Object.assign({}, state);
		}
		case SET_FILTER: {
			state.filter = payload.filter.toUpperCase();
			return Object.assign({}, state);
		}
		case SORT_PRODUCT: {
				const { oldIndex, newIndex } = payload;
				const soldouts = state.items.filter(item => !item.available);
				const availables = state.items.filter(item => item.available);

				if(state.filter === Filters.AVAILABLE) {
					
					const sort = move(availables, oldIndex, newIndex);
					state.items = [...sort, ...soldouts];
					return Object.assign({}, state);
				}
				if(state.filter === Filters.SOLDOUT) {
					const sort = move(soldouts, oldIndex, newIndex);
					state.items = [...sort, ...availables];
					return Object.assign({}, state);
				}

				state.items =  move(state.items, oldIndex, newIndex);
				return Object.assign({}, state);
		}
		case DECREASE_PRODUCT_QTY: {
			const productIndex = state.items.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;
			else {
				if(state.items[productIndex].qty === 0) return state;
				--state.items[productIndex].qty;
				if(state.items[productIndex].qty === 0) state.items[productIndex].available = false;
				return Object.assign({}, state);
			}
		}
		case INCREASE_PRODUCT_QTY: {
			const { productId, qty } = payload;
			const productIndex = state.items.findIndex(product => product.id === productId);

			if(productIndex === -1) return state;

			state.items[productIndex].qty = state.items[productIndex].qty + qty;
			state.items[productIndex].available = true;
			return Object.assign({}, state);
		}
		default: 
			return state;
	}
}

export default products;