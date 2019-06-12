import { connect } from 'react-redux';
import { removeProductFromCart, increaseProductQty, moveItem } from '../actions';
import SortableCartItemList from '../components/SortableCartItemList';


const mapStateToProps = state => ({
	items: state.cart,
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	onClickRemove: (cartId, productId) => {
		dispatch(removeProductFromCart(cartId));
		dispatch(increaseProductQty(productId));
	},
	moveItem: ({dragIndex, hoverIndex}) => dispatch(moveItem({dragIndex, hoverIndex}))
})


export default connect(mapStateToProps, mapDispatchToProps)(SortableCartItemList);