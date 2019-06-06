import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showToast: 0,
			productName: "",
		}
		this.onClickAddToCart = this.onClickAddToCart.bind(this);
	}

	onClickAddToCart = (product) => {
		this.props.addProductToCart(product.id);
		this.setState({showToast: 1});
		this.setState({productName: product.name});

		setTimeout(() => this.setState({showToast: 0}), 1000);
	}

	render() {
		const productList = this.props.products.map(product => {
			return <Product key={product.id} product={product} onClick={() => this.onClickAddToCart(product) }/>
		})

		return (
			<div aria-live="polite" aria-atomic="true">
				{productList}
				  <div style={{position: 'fixed', top: '0', right: '0' }} >
						<div 
							className="toast" 
							role="alert" 
							aria-live="assertive" 
							aria-atomic="true" 
							data-autohide="false" 
							data-delay="10000"
							style={{minWidth: '300px', opacity: this.state.showToast }}
							>
						  <div className="toast-header">
						    <img src="https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/Info_Circle_Symbol_Information_Letter-512.png" className="rounded mr-2" alt="..."/>
						    <strong className="mr-auto">Activity</strong>
						    <small>Just now</small>
						    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
						      <span aria-hidden="true">&times;</span>
						    </button>
						  </div>
						  <div className="toast-body">
						    {"Add " + this.state.productName + " to Cart"}
						  </div>
						</div>
					</div>
			</div>
	)
	}
}

export default ProductList;