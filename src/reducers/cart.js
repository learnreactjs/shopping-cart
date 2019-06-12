import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, MOVE_ITEM } from '../constants/actionTypes';
import { move } from './functions';

let nextId = 0;

const cart = (state = [], { type, payload }) => {
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
			let itemIndex = state.findIndex(item => item.id === payload.cartId);

			if (itemIndex === -1) return state;
			else {
				if (state[itemIndex].qty === 1) {
					state.splice(itemIndex, 1);
					return [...state];
				}
				else if (state[itemIndex].qty > 1) {
					state[itemIndex].qty--;
					return [...state];
				}
				else return state;
			}
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