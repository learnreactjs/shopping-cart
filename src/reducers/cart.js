import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, MOVE_ITEM } from '../constants/actionTypes';
import { move } from './functions';

let nextId = 2;
const initState = [
	{
		id: 1,
		date: new Date(),
		qty: 5,
		productId: 5
	}
]

const cart = (state = initState, { type, payload }) => {
	switch (type) {
		case ADD_PRODUCT_TO_CART: {
			let itemIndex = state.findIndex(item => item.productId === payload.productId);

			if (itemIndex === -1) return [...state, { ...payload, id: ++nextId, date: new Date(), qty: 1 }];
			else {
				++state[itemIndex].qty;
				return state
			}
		}
		case REMOVE_PRODUCT_FROM_CART: {
			const { cartItemId, qty } = payload;
			let itemIndex = state.findIndex(item => item.id === cartItemId);

			if (itemIndex === -1) return state;
			if (state[itemIndex].qty <= qty) {
				state.splice(itemIndex, 1);
				return [...state];
			}
			else if (state[itemIndex].qty > qty) {
				state[itemIndex].qty = state[itemIndex].qty - qty;
				return [...state];
			}
			else return state;
		}
		case MOVE_ITEM: {
			const { dragIndex, hoverIndex } = payload;
			return move(state, dragIndex, hoverIndex);
		}
		default:
			return state;
	}
}

export default cart;