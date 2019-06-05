import React from 'react';

function Product ({product }) {
	return (
		<div className="product-card row my-3 shadow">
			<div className="product-card-preview col-4">
				<img className="shadow-sm" src="https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg" alt="Product Image"/>
			</div>
			<div className="product-card-content col">
				<p className="product-card-title">{product.name}</p>
				<p className="product-card-price">${product.price}</p>
				<p className="product-card-qty">{product.qty}</p>
				<p className="product-card-description">{product.description}</p>
				<button type="button" className="btn btn-primary">Add to cart</button>
			</div>
		</div>
	)
}

export default Product;