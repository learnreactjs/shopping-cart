import React, { Component } from 'react';
import CartItem from './CartItem';
import IToast from './IToast';

class CartItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toasts: []
		}
		this.timeouts = [];
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

		const timeout = setTimeout(() => {
			const newToasts = [...this.state.toasts];
			newToasts.pop();
			this.setState({toasts: newToasts});
		}, 3000);
		this.timeouts.push(timeout);
	}

	componentWillUnmount() {
		this.timeouts.forEach(timeout => clearTimeout(timeout));
		this.timeouts = [];
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
				<div className={"cart-item-card row my-1 shadow-sm bg-light"}>
					<div className="cart-item cart-item-id col-1">
						<strong>ID</strong>
					</div>
					<div className="cart-item cart-item-product-name col-2">
						Name
					</div>
					<div className="cart-item cart-item-product-price col-2">
						Price ($)
					</div>
					<div className="cart-item cart-item-qty col">
						Quantity
					</div>
					<div className="cart-item cart-item-date col">
						Date
					</div>
					<div className="cart-item cart-item-button col-1">
					</div>
				</div>
				{cartItemList}
				<IToast toasts={this.state.toasts} location="bottom"/>
			</div>
		)
	}
}

export default CartItemList;