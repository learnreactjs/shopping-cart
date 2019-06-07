import React, { Component } from 'react';
import CartItem from './CartItem';
import IToast from './IToast';

class CartItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			productName: ""
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
		this.setState({show: true, productName: this.productHash()[productId].name});

		setTimeout(() => this.setState({show : false}), 1000);
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
				<IToast action="danger" show={this.state.show} message={"Remove " + this.state.productName + " from Cart"} />
			</div>
		)
	}
}

export default CartItemList;