import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../Sass/App.scss';

import Header from './Header/Header';
import Title from './Title/Title';
import About from './About/About';
import Socials from './Socials/Socials';

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='content'>
					<Header />
					<section className='panel section0'>
						<Title />
					</section>
					<section className='panel section1'>
						<Socials />
					</section>
					<section className='panel section2'>
						<About />
					</section>
				</div>
			</div>
		</Router>
	);
}

export default App;
