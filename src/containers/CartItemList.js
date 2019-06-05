import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';

function CartItemList({ cartItems , products }) {
	const productHash = {};
	products.forEach(product => {
		productHash[product.id] = product;
	})

	return cartItems.map((item, index) => <CartItem key={index} cartItem={item} product={productHash[item.productId]}/>)
}

const mapStateToProps = state => ({
	cartItems: state.cart,
	products: state.products
})

export default connect(mapStateToProps)(CartItemList);