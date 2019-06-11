import React, { Component } from 'react';

class CartItem extends Component {
	render() {
		const { cartItem , product, className, onClick } = this.props;
		return (
			<div className={"cart-item-card row my-1 shadow-sm " + className}>
				<div className="cart-item cart-item-id col-2">
					<strong>{cartItem.id}</strong>
				</div>
				<div className="cart-item cart-item-product-name col-2">
					{product.name}
				</div>
				<div className="cart-item cart-item-product-price col-2">
					{product.price}
				</div>
				<div className="cart-item cart-item-qty col">
					{cartItem.qty}
				</div>
				<div className="cart-item cart-item-date col">
					{cartItem.date instanceof Date ? cartItem.date.toDateString(): cartItem.date}
				</div>
				<div className="cart-item cart-item-button col-1">
					<button type="button" className="btn btn-sm btn-danger" onClick={onClick}>Remove</button>
				</div>
			</div>
		);
	}
}

export default CartItem;