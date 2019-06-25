import { connect } from 'react-redux';
import { removeProductFromCart, increaseProductQty, moveItem } from '../actions';
import SortableCartItemList from '../components/SortableCartItemList';


const mapStateToProps = state => ({
	items: state.cart,
	products: state.product.items
})

const mapDispatchToProps = dispatch => ({
	onClickRemove: (cartId, productId, qty) => {
		dispatch(removeProductFromCart(cartId, qty));
		dispatch(increaseProductQty(productId, qty));
	},
	moveItem: ({dragIndex, hoverIndex}) => dispatch(moveItem({dragIndex, hoverIndex}))
})


export default connect(mapStateToProps, mapDispatchToProps)(SortableCartItemList);