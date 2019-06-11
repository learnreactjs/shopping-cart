import React from 'react';
// import CartItemList from '../containers/CartItemList';
import CartItemTotal from '../containers/CartItemTotal';
import DndCartItemContainer from '../containers/DndCartItemContainer';

function Cart() {

	return (
		<div>
			<div className={"cart-item-card row my-1 shadow-sm bg-light"}>
				<div className="cart-item cart-item-id col-2">
					<strong>ID</strong>
				</div>
				<div className="cart-item cart-item-product-name col-2">
					Name
				</div>
				<div className="cart-item cart-item-product-price col-2">
					Price ($)
				</div>
				<div className="cart-item cart-item-qty col">
					Quantity
				</div>
				<div className="cart-item cart-item-date col">
					Date
				</div>
				<div className="cart-item cart-item-button col-1">
				</div>
			</div>
			{/* <CartItemList /> */}
			<DndCartItemContainer />
			<hr />
			<CartItemTotal />
		</div>
		)
}

export default Cart;