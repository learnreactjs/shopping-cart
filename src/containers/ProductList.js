import { connect } from 'react-redux';

import ProductList from '../components/ProductList';

import { addProductToCart, decreaseProductQty } from '../actions';


const mapStateToProps = state => ({
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	addProductToCart: id => {
		dispatch(addProductToCart(id));
		dispatch(decreaseProductQty(id));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);