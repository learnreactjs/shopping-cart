import { connect } from 'react-redux';
import { removeProductFromCart, increaseProductQty } from '../actions';
import CartItemList from '../components/CartItemList';


const mapStateToProps = state => ({
	cartItems: state.cart,
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	removeProductFromCart: (cartId, productId) => {
		dispatch(removeProductFromCart(cartId));
		dispatch(increaseProductQty(productId));
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);