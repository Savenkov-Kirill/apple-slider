'use client';

import { useState } from 'react';
import './style.css';
import slidesData from './slides';
import IconPlus from './icons/IconPlus.jsx';

const SlideItem = ({ data, handler }) => {
	return (
		<li className="slide-list__item">
			<button onClick={() => handler(data.id)} className="button">
				{data.isActive ? (
					<span className='button__text'>
						<strong>{data.title}.</strong> {data.desc}
					</span>
				) : (
					<>
						<IconPlus /> <strong>{data.title}</strong>
					</>
				)}
			</button>
		</li>
	);
};

const Slider = () => {
	const [slides, setSlides] = useState(slidesData);

	const clickHandler = (id) => {
		console.log('Click!', id);

		setSlides((prev)=> {
			return prev.map((slide)=> {
				let isActive = false;

				if (slide.id === id) {
					isActive = true
				}

				return {
					...slide,
					isActive: isActive,
				};
			})
		});

	};

	return (
		<div className="slider">
			<div className="controls">
				<ul className="slide-list">
					{slides.map((slide, index) => (
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
