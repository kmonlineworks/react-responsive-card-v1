import styled from 'styled-components';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

export const SliderContainer = styled.div`
	overflow: hidden;
	height: 100vh;
`;

export const Slides = styled.ul`
	width: auto;
	height: 100%;
	display: inline-flex;

	list-style: none;
`;

export const Slide = styled.li`
	width: 100vw;
	height: 100%;
	display: ${(props) => (props.current ? 'block' : 'none')};

	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-size: cover;

	transition: 0.5s ease-in-out;

	position: relative;

	animation: ${(props) =>
		props.current ? 'animTwo 0.5s linear forwards' : ''};

	@keyframes animTwo {
		0% {
			background-position: center -50px;
			opacity: 0.2;
		}
		100% {
			background-position: center center;
			opacity: 1;
		}
	}
`;

export const SlideContent = styled.div`
	max-width: 500px;
	padding: 30px;

	position: absolute;
	bottom: 50px;
	right: 50px;

	opacity: 0;

	background-color: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(5px);
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

	animation: ${(props) =>
		props.current ? 'animOne 0.4s linear 0.5s forwards' : ''};

	@keyframes animOne {
		0% {
			right: 0px;
			opacity: 0;
		}
		90% {
			right: 70px;
			opacity: 0.8;
		}
		100% {
			right: 50px;
			opacity: 1;
		}
	}

	@media only screen and (max-width: 768px) {
		width: calc(100% - 30px);
		right: 0px;
		bottom: 30px;
		margin: 0 15px;

		animation: ${(props) =>
			props.current ? 'animTwo 0.5s linear 0.3s forwards' : ''};
	}
`;

export const SlideTitle = styled.h3`
	color: #222;
	margin-bottom: 15px;
	text-transform: uppercase;
`;

export const SlideDesc = styled.p`
	color: #333;
`;

export const SliderControls = styled.div`
	width: calc(100% - 30px);
	margin: 0 15px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	position: absolute;
	top: 50%;
	left: 0;
	z-index: 2;

	transform: translateY(-50%);
`;

export const SlideNext = styled.div`
	padding: 5px;
	background-color: rgba(255, 255, 255, 0.5);

	transition: background-color 0.3s ease-in;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
	}
	&:hover > * {
		color: rgba(0, 0, 0, 0.9);
	}
`;

export const SlidePrev = styled.div`
	padding: 5px;
	background-color: rgba(255, 255, 255, 0.5);

	transition: background-color 0.3s ease-in;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
	}
	&:hover > * {
		color: rgba(0, 0, 0, 0.9);
	}
`;

export const ChevronRight = styled(BiChevronRight)`
	width: 42px;
	height: 42px;
	font-size: 42px;
	color: #333;
`;

export const ChevronLeft = styled(BiChevronLeft)`
	width: 42px;
	height: 42px;
	font-size: 42px;
	color: #333;
`;
