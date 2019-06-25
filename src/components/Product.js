import React, {Component} from 'react';

class Product extends Component {
	render() {
		const { product, onClick } = this.props;
		let button; 
			if(product.qty === 0 || !product.available) 
				button = <button type="button" className="btn btn-outline-danger" disabled>Sold out</button>
			else 
				button = <button type="button" className="btn btn-primary" onClick={() => onClick(product)}>Add to cart</button>
			let description = product.description.length < 100? product.description:product.description.slice(0, 99) + "...";

		return (
			<div className="product-card row my-3 shadow">
				<div className="product-card-preview col-lg-4">
					<img className="shadow-sm" src={product.image?product.image: "https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg"} alt={"Product Image" + product.id}/>
				</div>
				<div className="product-card-content col-lg">
					<p className="product-card-title">{product.name}</p>
					<div className="pb-2">
						<p className="product-card-price d-inline">${product.price}</p>
						<p className="product-card-qty d-inline ml-2">In stock: <strong>{product.qty}</strong></p>
					</div>
					<p className="product-card-description">{description}</p>
					{ button }
				</div>
			</div>
		)
	}
}

export default Product;