import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { CART_ITEM } from '../constants/dragTypes'

const Item = ({ id, item, product, index, moveItem, onClickRemove }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: CART_ITEM,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveItem({dragIndex, hoverIndex})
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: CART_ITEM, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div ref={ref} style={Object.assign({}, { opacity })} className="cart-item-card row my-1 shadow-sm ">
      <div className="cart-item cart-item-id col-2">
					<strong>{item.id}</strong>
				</div>
				<div className="cart-item cart-item-product-name col">
					{product.name}
				</div>
        <div className="cart-item cart-item-product-price col">
					{product.price}
				</div>
				<div className="cart-item cart-item-qty col">
					{item.qty}
				</div>
        <div className="cart-item cart-item-button col-1">
					<button type="button" className="btn btn-sm btn-danger" onClick={onClickRemove}>Remove</button>
				</div>
    </div>
  )
}
export default Item
