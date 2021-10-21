/* eslint-disable array-callback-return */
import React, { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../../Sass/Header.scss';

const Header = () => {
	gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

	const goAbout = () => {
		gsap.to(window, {
			scrollTo: '#introduction',
		});
	};

	const goStack = () => {
		gsap.to(window, {
			scrollTo: '#stack',
		});
	};

	const goContact = () => {
		gsap.to(window, {
			scrollTo: '#contact',
		});
	};

	const goSamples = () => {
		gsap.to(window, {
			scrollTo: '#samples',
		});
	};

	const enter = useCallback(() => {
		const texthead = gsap.utils.toArray('.navMenu span');

		gsap.to('.bar_container', {
			backgroundColor: '#f6f6f6',
			boxShadow: '0 -1px 6px 0 rgb(0 0 0 / 35%)',
		});

		texthead.map(text => {
			gsap.to(text, {
				color: '#2f2f2f',
			});
		});
	}, []);

	const leave = useCallback(() => {
		const texthead = gsap.utils.toArray('.navMenu span');

		gsap.to('.bar_container', {
			backgroundColor: 'transparent',
			boxShadow: 'none',
		});

		texthead.map(text => {
			gsap.to(text, {
				color: '#f6f6f6',
			});
		});
	}, []);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: '.about',
			start: 'top 90%',
			toggleActions: 'play reverse play reverse',
			onEnter: () => enter(),
			onLeaveBack: () => leave(),
		});
	}, [enter, leave]);

	return (
		<div className='bar_container'>
			<div className='innerBar'>
				<div className='navMenu'>
					<span onClick={goAbout}>About</span>
					<span onClick={goStack}>Stack</span>
					<span onClick={goSamples}>Samples</span>
					<span onClick={goContact}>Contact</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
