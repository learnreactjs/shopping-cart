import React, { Component } from 'react';
import CartItem from './CartItem';
import IToast from './IToast';

class CartItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toasts: []
		}

		this.handleRemove = this.handleRemove.bind(this);
	}

	productHash = () => {
		const hash = {};
		this.props.products.forEach(product => {
			hash[product.id] = product;
		})
		return hash;
	}

	handleRemove = (itemId, productId) => {
		this.props.removeProductFromCart(itemId, productId);

		const toasts = [...this.state.toasts];
		const message = "Remove " + this.productHash()[productId].name + " from cart";
		this.setState({toasts: [{ action: 'danger', message }, ...toasts]});

		setTimeout(() => {
			const newToasts = [...this.state.toasts];
			newToasts.pop();
			this.setState({toasts: newToasts});
		}, 3000);
	}

	render() {
		const cartItemList = this.props.cartItems.map((item, index) => {
		return (
			<CartItem 
				key={index} 
				cartItem={item} 
				product={this.productHash()[item.productId]} 
				onClick={() => this.handleRemove(item.id, item.productId)}
			/>
			)
	})

		return (
			<div>
				{cartItemList}
				<IToast toasts={this.state.toasts} location="bottom"/>
			</div>
		)
	}
}

export default CartItemList;