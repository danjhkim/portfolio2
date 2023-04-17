import React, { useEffect, useState } from 'react';
import gsap, { TweenMax, ScrollToPlugin } from 'gsap/all';
// import clock from '../images/images/clock.jpg';
import weather from '../../images/weather.jpg';
import gotham from '../../images/gotham.jpg';
import wordle from '../../images/wordle.jpeg';
import tools from '../../images/tools.jpg';
// import calc from '../images/images/calc.jpg';
// import metro from '../images/images/metro.jpg';
import graphyq from '../../images/graphql.jpg';
import game from '../../images/GAME.jpg';
import survey from '../../images/surveydemo.jpg';
import robots from '../../images/robots.jpg';
import { isBrowser, isMobile } from 'react-device-detect';
import shipping from '../../images/shipping.jpg';
import gitSmall from '../../images/icons/githubSmall.svg';
import gitSmallHover from '../../images/icons/githubwhite.svg';

import '../../Sass/Projects.scss';

function ImgIcon({ alt }) {
	const [hovering, setHovering] = useState(false);
	const imgSrc = hovering ? gitSmallHover : gitSmall;

	function handleMouseEnter() {
		setHovering(true);
	}

	function handleMouseLeave() {
		setHovering(false);
	}

	return (
		<img
			src={imgSrc}
			alt={alt}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		/>
	);
}

const Projects = () => {
	gsap.registerPlugin(ScrollToPlugin);

	useEffect(() => {
		const grey = document.querySelectorAll('.greybox');
		// eslint-disable-next-line
		if (isMobile) {
			TweenMax.set('.serviceBoxInner', { y: 0, opacity: 1 });
			for (let i of grey) {
				i.style.opacity = 0.5;
			}
		} else if (isBrowser) {
			TweenMax.set('.serviceBoxInner', { y: 100, opacity: 0 });

			for (let i of grey) {
				i.style.opacity = 0;
			}
		}
		window.addEventListener('resize', function () {
			if (isMobile) {
				TweenMax.set('.serviceBoxInner', { y: 0, opacity: 1 });
				for (let i of grey) {
					i.style.opacity = 0.5;
				}
			} else if (isBrowser) {
				TweenMax.set('.serviceBoxInner', { y: 100, opacity: 0 });
				for (let i of grey) {
					i.style.opacity = 0;
				}
			}
		});

		const serviceBox = document.querySelectorAll('.serviceBox');
		const title1 = document.querySelectorAll('.title1');
		if (isBrowser) {
			for (let i of title1) {
				i.addEventListener('mouseenter', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of title1) {
				i.addEventListener('mouseleave', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.addEventListener('mouseenter', e => {
					TweenMax.to(e.target.children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.addEventListener('mouseleave', e => {
					TweenMax.to(e.target.children[0], {
						y: 100,
						opacity: 0,
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0,
						duration: 0.03,
					});
				});
			}
		} else {
			for (let i of title1) {
				i.removeEventListener('mouseenter', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of title1) {
				i.removeEventListener('mouseleave', e => {
					TweenMax.to(e.target.parentNode.children[1].children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.removeEventListener('mouseenter', e => {
					TweenMax.to(e.target.children[0], {
						y: 0,
						opacity: 1,
						ease: 'Power2.easeOut',
						dutation: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0.5,
						duration: 0.03,
					});
				});
			}

			for (let i of serviceBox) {
				i.removeEventListener('mouseleave', e => {
					TweenMax.to(e.target.children[0], {
						y: 100,
						opacity: 0,
						duration: 0.3,
					});

					TweenMax.to(e.target.parentNode.children[0], {
						opacity: 0,
						duration: 0.03,
					});
				});
			}
		}
	}, []);

	useEffect(() => {
		let workLinks = document.querySelectorAll('.indent');

		const enterAnimation = (link, e, index) => {
			link.tl.tweenFromTo(0, 'midway');
		};

		// Mouseleave function
		const leaveAnimation = (link, e) => {
			link.tl.play();
		};

		workLinks.forEach((link, index, value) => {
			let underline = link.querySelector('.underline');
			link.tl = gsap.timeline({ paused: true });

			link.tl.fromTo(
				underline,
				{
					width: '0%',
					left: '0%',
				},
				{
					width: '100%',
					duration: 1,
				},
			);

			link.tl.add('midway');

			link.tl.fromTo(
				underline,
				{
					width: '100%',
					left: '0%',
				},
				{
					width: '0%',
					left: '100%',
					duration: 1,
					immediateRender: false,
				},
			);
			// Mouseenter
			link.addEventListener('mouseenter', e => {
				enterAnimation(link, e, index);
			});

			// Mouseleave
			link.addEventListener('mouseleave', e => {
				leaveAnimation(link, e);
			});
		});
	}, []);

	// const sampler = () => {
	// 	TweenMax.to(window, {
	// 		scrollTo: '#samples',
	// 	});
	// };

	const stop = e => {
		e.stopPropagation();
	};

	return (
		<div className='samples' id='samples'>
			<div className='titleBlock'>Samples</div>
			<div className='mainSectionSamples'>
				<div className='bodySample'>
					<div className='table'>
						<div
							className='tablewidth'
							onMouseEnter={e => {
								stop(e);
							}}
							onMouseLeave={e => {
								stop(e);
							}}>
							<a
								rel='noopener noreferrer'
								href='https://vigorous-leakey-1df838.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Responsive Design</h2>
											<p>
												This barebone's site showcases
												responsive design, using css and
												media queries!
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags:#Layout #CSS #Responsive
												#HTML
											</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/Gotham'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='Response Test App' />
										</a>
									</div>
									<div className='picture contain'>
										<img src={gotham} alt='gotham' />
									</div>
									<div className='title1'>CSS</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://graphql-app.adaptable.app/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>GraphQL Example Site</h2>
											<p>
												Simple site that uses GraphQl to
												filter and add data. (Free
												hosting please wait for site to
												Load.)
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #React #Redux #GraphQL</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/graphql-app'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon
												src={gitSmall}
												alt='GraphQl Book App'
											/>
										</a>
									</div>
									<div className='picture contain'>
										<img src={graphyq} alt='graphql' />
									</div>
									<div className='title1'>React</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://competent-gates-f65dbb.netlify.app/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Wordle Clone!</h2>
											<p>
												Game created with vanilla
												Javascript, CSS, and HTML. Play
												as much as you want!
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #JavaScript #CSS #HTML</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/wordle-clone'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='Wordle Clone' />
										</a>
									</div>
									<div className='picture contain'>
										<img src={wordle} alt='wordle' />
									</div>
									<div className='title1'>JS Game</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://danjhkim.github.io/updated-robot-filter-list/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Filter and Search</h2>
											<p>
												State changes in deeply nested
												Objects and complex search and
												filter Logic.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #State, #Filters,
												#Callbacks
											</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/updated-robot-filter-list'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='Robot Filter' />
										</a>
									</div>
									<div className='picture contain'>
										<img src={robots} alt='robots' />
									</div>
									<div className='title1'>Search</div>
								</div>
							</a>
							{/* <a
								rel='noopener noreferrer'
								href='https://danjhkim.com/Projects/clocker/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>API Clock</h2>
											<p>
												Written in Vanilla JS, an API
												clock that fetches 3 different
												times from all over the world.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #CSS #JavaScript #Axios
												#REST
											</p>
										</div>
									</div>

									<div className='picture contain'>
										<img src={clock} alt='clockApp' />
									</div>
									<div className='title1'>Javascript</div>
								</div>
							</a> */}
							<a
								rel='noopener noreferrer'
								href='https://dreamy-bardeen-9c2d60.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>API Weather</h2>
											<p>
												Weather App that uses the
												AccuWeather API endpoint to
												establish current weather
												patterns for specfic cities.
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #React #Axios #REST</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/weatherapp'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='Weather App' />
										</a>
									</div>
									<div className='picture contain'>
										<img src={weather} alt='weatherApp' />
									</div>
									<div className='title1'>REST API</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://competent-swanson-954803.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>React Widgets</h2>
											<p>
												Four simple React widgets, that
												can be used as components for
												different apps!
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #JavaScript #Axios
												#REST
											</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/React-Hook-Widgets'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='React Widgets' />
										</a>
									</div>
									<div className='picture cover'>
										<img src={tools} alt='tools' />
									</div>
									<div className='title1'>Widget</div>
								</div>
							</a>

							{/* <a
								rel='noopener noreferrer'
								href='https://nervous-archimedes-3e32a4.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Calculator</h2>
											<p>
												This calculator was created
												using React and Context API.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #JavaScript
												#Context-API
											</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={calc} alt='calc' />
									</div>
									<div className='title1'>Calc</div>
								</div>
							</a>

							<a
								rel='noopener noreferrer'
								href='https://affectionate-lamport-76560b.netlify.app'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Metronome</h2>
											<p>
												This metronome App was created
												using React Hooks and Context
												API.
											</p>
										</div>
										<div className='divtags'>
											<p>
												Tags: #React #JavaScript
												#Context-API
											</p>
										</div>
									</div>
									<div className='picture contain'>
										<img src={metro} alt='metro' />
									</div>
									<div className='title1'>Metronome</div>
								</div>
							</a> */}

							<a
								rel='noopener noreferrer'
								href='https://boring-fermat-3d1a0e.netlify.app/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Game!</h2>
											<p>
												Vanilla JS game that manipulates
												positonal properties with
												setInterval!
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #JavaScript</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/gamer'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='Game' />
										</a>
									</div>
									<div className='picture contain'>
										<img src={game} alt='game' />
									</div>
									<div className='title1'>JS Game</div>
								</div>
							</a>
							<a
								rel='noopener noreferrer'
								href='https://whimsical-dragon-6e6ad9.netlify.app/'
								target='_blank'>
								<div className='column'>
									<div className='greybox'></div>
									<div className='serviceBox'>
										<div className='serviceBoxInner'>
											<h2>Shipment App</h2>
											<p>
												A concept application for
												tracking shipments. Using React
												and TypeScript!
											</p>
										</div>
										<div className='divtags'>
											<p>Tags: #React-Saga #TypeScript</p>
										</div>
										<a
											className='gitProjectLink'
											href='https://github.com/danjhkim/shippingapp'
											target='_blank'
											rel='noopener noreferrer'>
											<ImgIcon alt='Shipping App' />
										</a>
									</div>
									<div className='picture contain'>
										<img
											src={shipping}
											alt='shipping app'
										/>
									</div>
									<div className='title1'>
										Concept Shipping App!
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
