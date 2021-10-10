import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import '../../Sass/Title.scss';
import danlogo from '../../images/animation/logo.json';

const Title = () => {
	const [animate, setAnimate] = useState();
	const logo = useRef();

	useEffect(() => {
		const danLogoAnimation = lottie.loadAnimation({
			container: logo.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: danlogo,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid',
			},
		});

		setTimeout(() => {
			danLogoAnimation.setSpeed(0.9);
			danLogoAnimation.play();
		}, 500);
	}, []);

	return (
		<div className='fullscreen'>
			<div className='centerBox'>
				<div className='logo' ref={logo}></div>
				<div className='subtext'>
					<span>Developer</span>
					<span>Technologist</span>
					<span>Cannoli fan</span>
				</div>
			</div>

			<div className='title'></div>
			<div className='backdrop'></div>
		</div>
	);
};

export default Title;
