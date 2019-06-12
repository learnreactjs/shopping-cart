import React, { Component } from 'react';
import DndCartItem from './DndCartItem';
import IToast from './IToast';

class SortableCartItemList  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    }
    this.timeouts = [];
    this.handleRemove = this.handleRemove.bind(this);
  }

  productHash() {
    const hash = {};
    const { products } = this.props;
    if(products.length > 0) products.forEach(product => {
      hash[product.id] = product;
    })
    return hash;
  }

  handleRemove = (itemId, productId, qty) => {
		this.props.onClickRemove(itemId, productId, qty);

		const toasts = [...this.state.toasts];
		const message = "Remove " + qty + " " + this.productHash()[productId].name + " from cart";
		this.setState({toasts: [ ...toasts, { action: 'danger', message }]});

		const timeout = setTimeout(() => {
			const newToasts = [...this.state.toasts];
			newToasts.shift();
			this.setState({toasts: newToasts});
		}, 3000);
		this.timeouts.push(timeout);
  }

	componentWillUnmount() {
		this.timeouts.forEach(timeout => clearTimeout(timeout));
		this.timeouts = [];
	}
  render() {
    const { items, moveItem } = this.props;
    const renderItem = (item, index) => {
      return (
        <DndCartItem
          key={item.id}
          index={index}
          id={item.id}
          item={item}
          product={this.productHash()[item.productId]}
          moveItem={moveItem}
          onClickRemove={(qty) => this.handleRemove(item.id, item.productId, qty)}
        />
      )
    }
    return (
      <>
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
            <div className="cart-item cart-item-button col">
            </div>
          </div>
          {items.map((item, i) => renderItem(item, i))}
          <IToast toasts={this.state.toasts} location="bottom"/>
        </div>
      </>
    )
  }
}

export default SortableCartItemList;