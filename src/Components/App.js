import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../Sass/App.scss';

import Header from './Header/Header';
import Title from './Title/Title';
import Socials from './Socials/Socials';
import About from './About/About';

const Skills = React.lazy(() => import('./Skills/Skills'));
const Education = React.lazy(() => import('./Education/Education'));
const Projects = React.lazy(() => import('./Projects/Projects'));
const Contact = React.lazy(() => import('./Contact/Contact'));

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
					<section className='panel section3'>
						<Suspense fallback={<div>Loading...</div>}>
							<Skills />
						</Suspense>
					</section>
					<section className='panel section4'>
						<Suspense fallback={<div>Loading...</div>}>
							<Education />
						</Suspense>
					</section>
					<section className='panel section5'>
						<Suspense fallback={<div>Loading...</div>}>
							<Projects />
						</Suspense>
					</section>
					<section className='panel section6'>
						<Suspense fallback={<div>Loading...</div>}>
							<Contact />
						</Suspense>
					</section>
				</div>
			</div>
		</Router>
	);
}

export default App;
