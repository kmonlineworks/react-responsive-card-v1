import {
	CardCategory,
	CardContainer,
	CardDesc,
	CardMedia,
	CardMediaContainer,
	CardTitle,
} from './CardStyle';

function Card({ products }) {
	console.log(products);
	if (products.description.length > 50) {
		products.description = products.description.substring(0, 50) + '...';
	}
	if (products.title.length > 25) {
		products.title = products.title.substring(0, 25) + '...';
	}

	return (
		<CardContainer>
			<CardMediaContainer>
				<CardMedia src={products.thumbnail} atl={products.title} />
				<CardCategory>{products.category}</CardCategory>
			</CardMediaContainer>
			<CardTitle>{products.title}</CardTitle>
			<CardDesc>{products.description}</CardDesc>
		</CardContainer>
	);
}

export default Card;
