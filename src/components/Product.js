import React from 'react';

function Product ({product, onClick}) {
	let button; 
		if(product.qty === 0 || !product.available) 
			button = <button type="button" className="btn btn-outline-danger" disabled>Sold out</button>
		else 
			button = <button type="button" className="btn btn-primary" onClick={onClick}>Add to cart</button>

	return (
		<div className="product-card row my-3 shadow">
			<div className="product-card-preview col-4">
				<img className="shadow-sm" src={product.image?product.image: "https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg"} alt={"Product Image" + product.id}/>
			</div>
			<div className="product-card-content col">
				<p className="product-card-title">{product.name}</p>
				<p className="product-card-price">${product.price}</p>
				<p className="product-card-qty">In stock: <strong>{product.qty}</strong></p>
				<p className="product-card-description">{product.description}</p>
				{ button }
			</div>
		</div>
	)
}

export default Product;