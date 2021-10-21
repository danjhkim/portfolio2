import React from 'react';
import { Link } from 'react-router-dom';

import email from '../../images/icons/email.svg';

import '../../Sass/Contact.scss';

import resume from '../../images/icons/resume.svg';
import github from '../../images/icons/github.svg';
import gitSmall from '../../images/icons/githubSmall.svg';
import linkedin from '../../images/icons/linked.svg';
import insta from '../../images/icons/insta.svg';
import instaSmall from '../../images/icons/instaSmall.svg';

const Contact = () => {
	const mailer = () => {
		window.open('mailto:danjhkim@gmail.com');
	};

	return (
		<div className='contact'>
			<div className='titleBlock2'>Contact</div>
			<div className='emailBlock'>
				<div className='borderemail' onClick={mailer}>
					<div className='icon2'>
						<img src={email} alt='email'></img>
					</div>
					danjhkim@gmail.com
				</div>
			</div>
			<div className='endlinks'>
				<div className='logoLinkslower'>
					<Link
						to='/download/resume'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={resume}
							alt='resume'
							className='resumelower'
						/>
						<div className='textsociallower resumetext'>Resume</div>
					</Link>
					<a
						href='https://github.com/danjhkim?tab=repositories'
						target='_blank'
						rel='noopener noreferrer'>
						<picture>
							<img
								src={gitSmall}
								alt='github'
								className='githublower'
							/>
						</picture>
						<div className='textsociallower linktext'>GitHub</div>
					</a>
					<a
						href='https://www.linkedin.com/in/daniel-kim-443a431b7/'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={linkedin}
							alt='Linked'
							className='Linkedlower'
						/>
						<div className='textsociallower linktext'>Linked</div>
					</a>
					<a
						href='https://www.instagram.com/danielkim165/'
						target='_blank'
						rel='noopener noreferrer'>
						<picture>
							<img
								src={instaSmall}
								alt='insta'
								className='instalower'
							/>
						</picture>
						<div className='textsociallower linktext'>
							instagram
						</div>
					</a>
				</div>
			</div>
			<div className='footer'>© Dan Kim 2021</div>
		</div>
	);
};

export default Contact;
