import React from 'react';
import Product from './Product';

function ProductList({ products , addProductToCart }) {

	return products.map(product => {
		return <Product key={product.id} product={product} onClick={() => addProductToCart(product.id) }/>
	})
}

export default ProductList;