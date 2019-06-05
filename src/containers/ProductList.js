import React from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product';

import { addProductToCart, decreaseProductQty } from '../actions';

function ProductList({ products , addProductToCart, decreaseProductQty }) {
	const handleAddToCart = (id) => {
		addProductToCart(id);
		decreaseProductQty(id);
	}

	return products.map(product => {
		return <Product key={product.id} product={product} handleAddToCart={ handleAddToCart }/>
	})
}


const mapStateToProps = state => ({
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	addProductToCart: id => dispatch(addProductToCart(id)),
	decreaseProductQty: id => dispatch(decreaseProductQty(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);