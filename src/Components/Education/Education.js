import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RyersonLogo from '../../images/ryerson.png';

import '../../Sass/Education.scss';

const Education = () => {
	return (
		<div className='edu'>
			<div className='innerEdu'>
				<div className='schoolImg'></div>
				<div className='eduRight'>
					<h2>Education</h2>
					<div className='logo'>
						<img src={RyersonLogo} alt='Ryerson'></img>
					</div>
					<h3>Ryerson</h3>
					<h4>Public Health and Safety</h4>
					<h4>Bachelor's of Applied Science</h4>
					<h4 style={{ margin: '10px 0px 60px' }}>2017</h4>
					<div className='onlineCourses'>
						<h3>Course Certifications</h3>
						<h4>Node with React: Fullstack Web</h4>
						<h4>Modern React with Redux Certificate</h4>
						<h4>Modern JavaScript Certificate</h4>
						<h4>
							The Result-Oriented Web Developer Course - BOOTCAMP
							2021
						</h4>
						<h4>JavaScript{`:`} The Advanced Concepts</h4>
						<h4>After Effects CC{`:`} The Complete Motion</h4>
						<h4>JavaScript Animations with GreenSock</h4>
						<h4>Learn Figma - UI/UX Design</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
