import { connect } from 'react-redux';

// import ProductList from '../components/ProductList';
import SortableProductList from '../components/SortableProductList';

import { addProductToCart, decreaseProductQty, sort } from '../actions';

const mapStateToProps = state => ({
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	addProductToCart: id => {
		dispatch(addProductToCart(id));
		dispatch(decreaseProductQty(id));
	},
	onSortEnd: ({oldIndex, newIndex }) => dispatch(sort({oldIndex, newIndex}))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableProductList);