import React from 'react';
import CartItemTotal from '../containers/CartItemTotal';
import CartItemList from '../containers/CartItemList';

function Cart() {

	return (
		<div>
			<CartItemList />
			<hr />
			<CartItemTotal />
		</div>
		)
}

export default Cart;