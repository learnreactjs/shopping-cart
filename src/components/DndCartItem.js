import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd'
import { CART_ITEM } from '../constants/dragTypes'

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}
const itemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;


    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveItem({dragIndex, hoverIndex});

    monitor.getItem().index = hoverIndex;
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }
  handleChange = (e) => {
    e.preventDefault(); 
    const value = e.target.value;
    if(isNaN(value) || (parseInt(value) && parseInt(value) > this.props.item.qty)) return; 
    this.setState({qty: value});
  }

  handleClickRemove() {
    const qty = parseInt(this.state.qty)?parseInt(this.state.qty): 1;
    this.props.onClickRemove(qty);
    this.setState({qty: 1});
  }

  render() {
    const { 
      item, 
      product, 
      isDragging,
      connectDragSource,
      connectDropTarget
     } = this.props;
     const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      connectDropTarget(
        <div style={Object.assign({}, { opacity })} className="cart-item-card row my-1 shadow-sm ">
          <div className="cart-item cart-item-id col-1">
            <strong>{item.id}</strong>
          </div>
          <div className="cart-item cart-item-product-name col-2">
            {product.name}
          </div>
          <div className="cart-item cart-item-product-price col-2">
            {product.price}
          </div>
          <div className="cart-item cart-item-qty col">
            {item.qty}
          </div>
          <div className="cart-item cart-item-date col">
            {item.date instanceof Date ? item.date.toDateString(): item.date}
          </div>
          <form className="form-inline col" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="form-control form-control-sm mr-1 cart-item-input" 
              type="text" 
              value={this.state.qty} 
              placeholder="1"
              onChange={this.handleChange} 
              aria-label="Remove"
              
              />
            <button 
              className="btn btn-sm btn-outline-danger my-2 my-sm-0" 
              type="button" 
              onClick={this.handleClickRemove}
            >Remove</button>
          </form>
        </div>
      )
    )
  }
}

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DropTarget(CART_ITEM, itemTarget, dropCollect)(DragSource(CART_ITEM, itemSource, dragCollect)(Item))