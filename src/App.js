import Card from './Card/Card';
import { useEffect, useState } from 'react';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const data = () => {
			fetch('https://dummyjson.com/products?skip=5&limit=10')
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setProducts(data.products);
				});
		};
		data();
	}, []);

	return (
		<div className="container">
			{products?.map((item, index) => (
				<Card key={index} products={item} />
			))}
		</div>
	);
}

export default App;
