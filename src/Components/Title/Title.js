import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

import '../../Sass/Title.scss';

import email from '../../images/icons/email.svg';
import danlogo from '../../images/animation/logo.json';

const Title = () => {
	gsap.registerPlugin(TextPlugin, ScrollTrigger);
	const logo = useRef();

	const mailer = () => {
		window.open('mailto:danjhkim@gmail.com');
	};

	useEffect(() => {
		ScrollTrigger.create({
			trigger: '.panel2',
			start: 'top top',
			pin: true,
			pinSpacing: false,
		});

		gsap.to('.title', {
			scrollTrigger: {
				trigger: '.title',
				start: 'top top',
				scrub: 5,
				pinSpacing: false,
			},
			yPercent: -15,
		});
	}, []);

	useEffect(() => {
		gsap.to('.subtext', {
			y: 150,
			opacity: 0,
			duration: 0,
		});

		gsap.to('.flowupemail', {
			y: 150,
			opacity: 0,
			duration: 0,
		});

		gsap.to('.subtext', {
			y: 0,
			opacity: 1,
			duration: 0.9,
		});

		gsap.to('.flowupemail', {
			y: 0,
			opacity: 1,
			delay: 1.8,
		});

		gsap.to('.emailtext', {
			duration: 0.9,
			text: 'danjhkim@gmail.com',
			ease: 'none',
			delay: 2.7,
			onComplete: () => {
				gsap.to('.backdrop', {
					opacity: 0.1,
					duration: 8,
				});
			},
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
		}, 700);
	}, []);

	return (
		<div className='titleMain'>
			<div className='fullscreen'>
				<div className='centerBox'>
					{/* <a
						href='https://www.danjhkim.com'
						target='_blank'
						rel='noreferrer'
						className='construction'>
						Check out version 1 of my portfolio in the mean time.
						<img src={construct} alt='construction'></img>
					</a> */}
					<div className='logo' ref={logo}></div>
					<div className='subtext'>
						<span>Developer</span>
						<span>Technologist</span>
						<span>Cannoli fan</span>
					</div>
				</div>

				<div className='flowupemail'>
					<div className='emaillink' onClick={mailer}>
						<div className='icon'>
							<img src={email} alt='email'></img>
						</div>
						<div className='emailtext'></div>
					</div>
				</div>
			</div>
			<div className='background panel2'>
				<div className='backdrop'></div>
				<div className='title'></div>
			</div>
		</div>
	);
};

export default Title;
