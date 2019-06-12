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

  handleRemove = (itemId, productId) => {
		this.props.onClickRemove(itemId, productId);

		const toasts = [...this.state.toasts];
		const message = "Remove " + this.productHash()[productId].name + " from cart";
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
          onClickRemove={() => this.handleRemove(item.id, item.productId)}
        />
      )
  }
  return (
    <>
      <div>
        {items.map((item, i) => renderItem(item, i))}
        <IToast toasts={this.state.toasts} location="bottom"/>
      </div>
    </>
  )
  }
}

export default SortableCartItemList;