'use client';

import { useState } from 'react';
import './style.css';
import slidesData from './slides';
import IconPlus from './icons/IconPlus.jsx';

const SlideItem = ({ data, handler }) => {
	return (
		<li className="slide-list__item">
			<button onClick={handler} className="button">
				{data.isActive ? (
					<>
						{data.title} {data.desc}
					</>
				) : (
					<>
						<IconPlus /> {data.title}
					</>
				)}
			</button>
		</li>
	);
};

const Slider = () => {
	const [slides, setSlides] = useState(slidesData);

	const clickHandler = () => {
		console.log('Click!');
	};

	return (
		<div className="slider">
			<div className="controls">
				<ul className="slide-list">
					{slidesData.map((slide, index) => (
						<SlideItem
							data={slide}
							handler={clickHandler}
							key={index}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Slider;
