import { connect } from 'react-redux';

// import ProductList from '../components/ProductList';
import SortableProductList from '../components/SortableProductList';

import { addProductToCart, decreaseProductQty, sortProduct } from '../actions';

const mapStateToProps = state => ({
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	addProductToCart: id => {
		dispatch(addProductToCart(id));
		dispatch(decreaseProductQty(id));
	},
	onSortEnd: ({oldIndex, newIndex }) => dispatch(sortProduct({oldIndex, newIndex}))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableProductList);