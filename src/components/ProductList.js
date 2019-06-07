import React, { Component } from 'react';
import IToast from './IToast';
import Product from './Product';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showToast: false,
			productName: "",
		}
		this.onClickAddToCart = this.onClickAddToCart.bind(this);
	}

	onClickAddToCart = (product) => {
		this.props.addProductToCart(product.id);
		this.setState({showToast: true});
		this.setState({productName: product.name});

		setTimeout(() => this.setState({showToast: false}), 1000);
	}

	render() {
		const productList = this.props.products.map(product => {
			return <Product key={product.id} product={product} onClick={() => this.onClickAddToCart(product) }/>
		})

		return (
			<div aria-live="polite" aria-atomic="true">
				{productList}
				<IToast show={ this.state.showToast } message={"Add " + this.state.productName + " to Cart"} />
			</div>
		)
	}
}

export default ProductList;