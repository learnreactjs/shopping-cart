import React from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart, increaseProductQty } from '../actions';
import CartItem from '../components/CartItem';

function CartItemList({ cartItems , products, removeProductFromCart }) {
	const productHash = {};
	products.forEach(product => {
		productHash[product.id] = product;
	})

	return cartItems.map((item, index) => {
		return (
			<CartItem 
				key={index} 
				cartItem={item} 
				product={productHash[item.productId]} 
				onClick={() => removeProductFromCart(item.id, item.productId)}
			/>
			)
	})
}

const mapStateToProps = state => ({
	cartItems: state.cart,
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	removeProductFromCart: (cartId, productId) => {
		dispatch(removeProductFromCart(cartId));
		dispatch(increaseProductQty(productId));
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);