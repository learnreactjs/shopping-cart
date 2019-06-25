import { connect } from 'react-redux';

// import ProductList from '../components/ProductList';
import SortableProductList from '../components/SortableProductList';

import { 
	addProductToCart, 
	decreaseProductQty, 
	sortProduct,
	setFilter, 
	productFilters } from '../actions';
const { ALL, AVAILABLE, SOLDOUT } = productFilters;


const productFilter = (items, filter) => {
	switch(filter.toUpperCase()) {
		case ALL: 
			return items
		case AVAILABLE: 
			return items.filter(item => item.available)
		case SOLDOUT: 
			return items.filter(item => !item.available)
		default: 
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = state => ({
	products: productFilter(state.product.items, state.product.filter),
	filter: state.product.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	addProductToCart: id => {
		dispatch(addProductToCart(id));
		dispatch(decreaseProductQty(id));
	},
	setFilter: (filter) => dispatch(setFilter(filter)),
	onSortEnd: ({oldIndex, newIndex }) => dispatch(sortProduct({oldIndex, newIndex}))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableProductList);