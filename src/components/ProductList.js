import React, { Component } from 'react';
import { sortableContainer } from 'react-sortable-hoc';
import IToast from './IToast';
import Product from './Product';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toasts: [],
		}
		this.onClickAddToCart = this.onClickAddToCart.bind(this);
	}

	onClickAddToCart = (product) => {
		this.props.addProductToCart(product.id);

		const toasts = [...this.state.toasts];
		const message = "Add " + product.name + " to cart";
		this.setState({toasts: [ { action: "success", message },...toasts ]});

		setTimeout(() => {
			const newToast = [...this.state.toasts];
			newToast.pop();
			this.setState({toasts: newToast })
		}, 3000);
	}

	render() {
		const productList = this.props.products.map((product, index) => {
			return <Product key={product.id} product={product} index={index} onClick={() => this.onClickAddToCart(product) }/>
		})

		return (
			<div aria-live="polite" aria-atomic="true">
				{productList}
				<IToast toasts={this.state.toasts} />
			</div>
		)
	}
}

export default sortableContainer(ProductList);