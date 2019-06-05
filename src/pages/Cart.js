import React from 'react';
import CartItem from '../components/CartItem';
import CartItemList from '../containers/CartItemList';
import CartItemTotal from '../containers/CartItemTotal';

function Cart() {
	const header= {
		cartItem: {
			id: "Id",
			productId: "Product",
			qty: "Quantity",
			date: "Date"
		}, 
		product:{
			name: "Name",
			price: "Price ($)"
		}
	}

	return (
		<div>
			<CartItem className="bg-light" cartItem={header.cartItem} product={header.product} />
			<CartItemList />
			<hr />
			<CartItemTotal />
		</div>
		)
}

export default Cart;