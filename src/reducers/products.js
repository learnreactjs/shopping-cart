const initState = [
		{
			id: 1,
			name: "HTML",
			qty: 12,
			price: 13,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
			available: true,
			description: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
		},
		{
			id: 2,
			name: "ReactJS",
			qty: 0,
			price: 53,
			image: "https://cdn.auth0.com/blog/react-js/react.png",
			available: false,
			description: "A JavaScript library for building user interfaces"
		},
		{
			id: 3,
			name: "CSS",
			qty: 7,
			price: 19,
			image: "https://coryrylan.com/assets/images/posts/types/css.svg",
			available: true,
			description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
		},
		{
			id: 4,
			name: "JavaScript",
			qty: 9,
			price: 8,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
			available: true,
			description: "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
		}
	]

const products = (state = initState, { type, payload }) => {
	switch (type) {
		case 'DECREASE_PRODUCT_QTY': {
			const productIndex = state.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;
			else {
				if(state[productIndex].qty === 0) return state;
				--state[productIndex].qty;
				if(state[productIndex].qty === 0) state[productIndex].available = false;
				return [...state];
			}
		}
		case 'INCREASE_PRODUCT_QTY': {
			const productIndex = state.findIndex(product => product.id === payload.productId);

			if(productIndex === -1) return state;

			state[productIndex].qty++;
			state[productIndex].available = true;
			return [...state];
		}
		default: 
			return state;
	}
}

export default products;