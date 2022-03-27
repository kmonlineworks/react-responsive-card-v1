import { useEffect, useState } from 'react';
import { sliderData } from './SliderData';
import {
	ChevronLeft,
	ChevronRight,
	Slide,
	SlideContent,
	SlideDesc,
	SlideNext,
	SlidePrev,
	SliderContainer,
	SliderControls,
	Slides,
	SlideTitle,
} from './SliderStyle';

function Slider() {
	const [current, setCurrent] = useState(0);
	const speed = 5000;
	const auto = true;
	let interval;

	const nextSlide = () => {
		clearInterval(interval);
		if (current === sliderData.length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};

	const prevSlide = () => {
		clearInterval(interval);
		if (current === 0) {
			setCurrent(sliderData.length - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	const autoplay = () => {
		interval = setInterval(nextSlide, speed);
	};

	useEffect(() => {
		if (auto) autoplay();

		return () => {
			return () => clearInterval(interval);
		};
	}, [auto, speed, autoplay]);

	return (
		<div>
			<SliderContainer>
				<Slides>
					{sliderData.map((item, index) => (
						<Slide
							key={index}
							image={item.image}
							current={current === index ? true : false}
						>
							<SlideContent current={current === index ? true : false}>
								<SlideTitle>{item.title}</SlideTitle>
								<SlideDesc>{item.desc}</SlideDesc>
							</SlideContent>
						</Slide>
					))}
				</Slides>
				<SliderControls>
					<SlidePrev onClick={() => prevSlide()}>
						<ChevronLeft />
					</SlidePrev>
					<SlideNext onClick={() => nextSlide()}>
						<ChevronRight />
					</SlideNext>
				</SliderControls>
			</SliderContainer>
		</div>
	);
}

export default Slider;
