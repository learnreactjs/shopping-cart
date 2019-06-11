import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd'
import { CART_ITEM } from '../constants/dragTypes'

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

function CartItem({ cartItem, product, index, sort, onClick }) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: CART_ITEM,
    hover(item, monitor) {
      monitor.isOver({ shallow: true })
      if(!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      console.log({dragIndex, hoverIndex});
      if(dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      console.log({hoverMiddleY, hoverClientY});
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      sort(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag ] = useDrag({
    item: {
      type: CART_ITEM, id:cartItem.id, index
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  
  return (
    <div ref={ref} style={Object.assign({},style, {opacity})} className={"cart-item-card row my-1 shadow-sm "}>
      <div className="cart-item cart-item-id col-2">
        <strong>{cartItem.id}</strong>
      </div>
      <div className="cart-item cart-item-product-name col-2">
        {product.name}
      </div>
      <div className="cart-item cart-item-product-price col-2">
        {product.price}
      </div>
      <div className="cart-item cart-item-qty col">
        {cartItem.qty}
      </div>
      <div className="cart-item cart-item-date col">
        {cartItem.date instanceof Date ? cartItem.date.toDateString(): cartItem.date}
      </div>
      <div className="cart-item cart-item-button col-1">
        <button type="button" className="btn btn-sm btn-danger" onClick={onClick}>Remove</button>
      </div>
    </div>
  );
}
export default CartItem;
