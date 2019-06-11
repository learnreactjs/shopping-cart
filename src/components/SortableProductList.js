import React, {Component} from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Product from './Product';
import IToast from './IToast';
 
const SortableItem = SortableElement(({value, onClick}) => <Product product={value} onClick={onClick}/>);
 
const SortableList = SortableContainer(({items, onClickAddToCart }) => {
  return (
		<div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} onClick={onClickAddToCart}/>
      ))}
			</div>
  );
});
 
class SortableComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toasts: []
		}
		this.timeouts = [];
		this.onClickAddToCart = this.onClickAddToCart.bind(this);
	}

	onClickAddToCart = (product) => {
		this.props.addProductToCart(product.id);

		const toasts = [...this.state.toasts];
		const message = "Add " + product.name + " to cart";
		this.setState({toasts: [ { action: "success", message },...toasts ]});

		const timeout = setTimeout(() => {
			const newToast = [...this.state.toasts];
			newToast.pop();
			this.setState({toasts: newToast })
		}, 3000);
		this.timeouts.push(timeout);
	}

	componentWillUnmount() {
			this.timeouts.forEach(timeout => clearTimeout(timeout));
			this.timeouts = [];
	}

  render() {
    return (
			<div>
				<SortableList items={this.props.products} onSortEnd={this.props.onSortEnd} onClickAddToCart={this.onClickAddToCart}/>
				<IToast toasts={this.state.toasts} />
			</div>
		);
  }
}

export default SortableComponent;