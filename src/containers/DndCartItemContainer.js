import React from 'react';
import { connect } from 'react-redux';
import DndCartItem from '../components/DndCartItem';
import { removeProductFromCart, increaseProductQty, sort } from '../actions';

function DndCartItemContainer ({ cartItems, products, onClickRemove, sort }) {
  const hash = {};
  products.forEach(product => {
    hash[product.id] = product;
  })
  
  return (
    <div>
      {cartItems.map((item, index) => {
        return (
          <DndCartItem 
            key={index} 
            index={index}
            cartItem={item} 
            product={hash[item.productId]} 
            sort={sort}
            onClick={() => onClickRemove(item.id, item.productId)}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
	cartItems: state.cart,
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	onClickRemove: (cartId, productId) => {
		dispatch(removeProductFromCart(cartId));
		dispatch(increaseProductQty(productId));
  },
  sort: (oldIndex, newIndex) => dispatch(sort({oldIndex, newIndex}))
})

export default connect(mapStateToProps, mapDispatchToProps)(DndCartItemContainer);