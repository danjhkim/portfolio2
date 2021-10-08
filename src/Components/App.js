import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../Sass/App.scss';

import Header from './Header/Header';
import Title from './Title/Title';
import About from './About/About';

function App() {
	useEffect(() => {
		gsap.utils.toArray('.panel').forEach((panel, i) => {
			ScrollTrigger.create({
				trigger: panel,
				start: 'top top',
				pin: true,
				pinSpacing: false,
			});
		});
	}, []);

	return (
		<Router>
			<div className='App'>
				<div className='content'>
					<Header />
					<section className='panel section0'>
						<Title />
					</section>
					<section className='panel section1'>
						<About />
					</section>
				</div>
			</div>
		</Router>
	);
}

export default App;
