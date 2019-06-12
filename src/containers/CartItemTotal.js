import React from 'react';
import { connect } from 'react-redux';

function CartItemTotal({ cartItems, products }) {
	const totalProduct = cartItems.length;

	const productHash = {};
	products.forEach(product => {
		productHash[product.id] = product;
	})

	const totalQty = cartItems.reduce((total, item) => total+item.qty, 0);
	const totalPrice = cartItems.reduce((totalPrice, item) => {
		const price = item.qty * productHash[item.productId].price;
		return totalPrice + price;
	}, 0);

	return (
		<div className="cart-item-card row my-1 text-danger">
			<div className="cart-item cart-item-id col-1">
				Total:
			</div>
			<div className="cart-item cart-item-id col-2">
				{totalProduct}
			</div>
			<div className="cart-item cart-item-price col-2">
				---
			</div>
			<div className="cart-item cart-item-qty col">
				{totalQty}
			</div>
			<div className="cart-item cart-item-qty col">
				${totalPrice}
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	cartItems: state.cart,
	products: state.products
})

export default connect(mapStateToProps)(CartItemTotal);