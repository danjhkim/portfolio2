import React, { useState, useEffect, useRef, useCallback } from 'react';

import '../../Sass/Socials.scss';

import resume from '../../images/icons/resume.svg';
import github from '../../images/icons/github.svg';
import linkedin from '../../images/icons/linked.svg';
import insta from '../../images/icons/insta.svg';

const Socials = () => {
	return (
		<div className='socialheader'>
			<div className='logoBar'>
				<div className='logoLinks'>
					<a
						href='https://drive.google.com/file/d/1wZMK_j8Hm5O1SEboyp8DOTslghSNNJnn/view?usp=sharing'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={resume} alt='resume' className='resume' />
						<div className='textsocial'>Resume</div>
					</a>
					<a
						href='https://github.com/danjhkim?tab=repositories'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={github} alt='github' className='github' />
						<div className='textsocial'></div>
					</a>
					<a
						href='https://www.linkedin.com/in/daniel-kim-443a431b7/'
						target='_blank'
						rel='noopener noreferrer'>
						<div className='textsocial linktext'>Linked</div>
						<img src={linkedin} alt='Linked' className='Linked' />
					</a>
					<a
						href='https://www.instagram.com/danielkim165/'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={insta} alt='insta' className='insta' />
						<div className='textsocial'></div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
