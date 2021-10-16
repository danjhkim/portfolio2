import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../../Sass/Education.scss';

const Education = () => {
	return (
		<div className='edu'>
			<div className='innerEdu'>
				<div className='schoolImg'></div>
				<div className='eduRight'>
					<h2>Education</h2>
					<div className='pic'></div>
					<h3>Ryerson</h3>
					<h4>Public Health and Safety</h4>
					<h4>Bachelor's of Applied Science</h4>
					<h4>2017</h4>
				</div>
			</div>
		</div>
	);
};

export default Education;
