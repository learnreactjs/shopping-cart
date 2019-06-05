import React from 'react';

function CartItem ({product }) {
	return (
		<div className="cart-item-card row my-3 shadow">
			<div className="cart-item-card-title col">
				<p>{product.name}</p>
			</div>
			<div className="cart-item-card-price col">
				<p className="">{product.price}</p>
			</div>
			<div className="cart-item-card-description col">
				<p className="cart-item-card-description">{product.description}</p>
				<button type="button" className="btn btn-primary">Add to cart</button>
			</div>
		</div>
	)
}

export default CartItem;