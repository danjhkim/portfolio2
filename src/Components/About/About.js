import React from 'react';
import { ReactComponent as School } from '../../images/icons/school.svg';
import { ReactComponent as Web } from '../../images/icons/web.svg';
import { ReactComponent as Project } from '../../images/icons/project.svg';

import '../../Sass/About.scss';

const About = () => {
	return (
		<div className='about' id='introduction'>
			<div className='wrapper'>
				<div className='aboutinner'>
					<div className='aboutMe'>
						<h2>About Me</h2>
						<div className='aboutItem'>
							<div className='iconContainer'>
								<School className='school' />
							</div>
							<div className='itemText'>
								<h3>Ryerson University</h3>
								<h4>Public Health and Safety</h4>
							</div>
						</div>
						<div className='aboutItem'>
							<div className='iconContainer'>
								<Web className='webber' />
							</div>
							<div className='itemText'>
								<h3>Web Developer</h3>
								<h4>React, Javascript, Express</h4>
							</div>
						</div>
						<div className='aboutItem'>
							<div className='iconContainer'>
								<Project className='projects' />
							</div>
							<div className='itemText'>
								<h3>Personal Projects</h3>
								<h4>Github repo composed of past projects</h4>
							</div>
						</div>
					</div>
					<div className='photoRight'></div>
				</div>
			</div>
		</div>
	);
};

export default About;
