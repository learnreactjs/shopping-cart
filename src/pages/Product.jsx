import React from 'react';
import Product from '../components/Product';

function Products() {
	const products = [
		{
			id: 1,
			name: "HTML",
			qty: 12,
			price: 13,
			description: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
		},
		{
			id: 2,
			name: "CSS",
			qty: 7,
			price: 19,
			description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
		},
		{
			id: 3,
			name: "JavaScript",
			qty: 9,
			price: 8,
			description: "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
		}
	];

	return products.map(product => {
		return <Product product={product} />;
	})
}

export default Products;