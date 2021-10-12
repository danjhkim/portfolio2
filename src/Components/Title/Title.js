import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import lottie from 'lottie-web';

import '../../Sass/Title.scss';
import danlogo from '../../images/animation/logo.json';

const Title = () => {
	gsap.registerPlugin(TextPlugin);

	const logo = useRef();

	useEffect(() => {
		gsap.to('.subtext', {
			y: 150,
			opacity: 0,
			duration: 0,
		});

		gsap.to('.subtext', {
			y: 0,
			opacity: 1,
			duration: 0.8,
		});
		gsap.to('.emailtext', {
			duration: 1,
			text: 'danjhkim@gmail.com',
			ease: 'none',
			delay: 2,
		});
	}, []);

	useEffect(() => {
		const danLogoAnimation = lottie.loadAnimation({
			container: logo.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: danlogo,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin slice',
			},
		});

		setTimeout(() => {
			danLogoAnimation.setSpeed(0.9);
			danLogoAnimation.play();
		}, 1000);
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
			<div className='emailtext'></div>

			<div className='title'></div>
			<div className='backdrop'></div>
		</div>
	);
};

export default Title;
