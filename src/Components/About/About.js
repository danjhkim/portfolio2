import React from 'react';

import '../../Sass/About.scss';

const About = () => {
	return (
		<div className='wrapper'>
			<div className='about'>
				<div className='aboutMe'>
					<h2>About Me</h2>
					<div className='aboutItem'>
						<div className='iconContainer'>
							<img src='' alt='' />
						</div>
						<div className='itemText'>
							<h3>Ryerson University</h3>
							<h4>Public Health and Safety</h4>
						</div>
					</div>
					<div className='aboutItem'></div>
					<div className='aboutItem'></div>
				</div>
				<div className='photoRight'></div>
			</div>
		</div>
	);
};

export default About;
