import React from 'react';
import { Link } from 'react-router-dom';

import email from '../../images/icons/email.svg';

import '../../Sass/Contact.scss';

import { ReactComponent as Resume } from '../../images/icons/resumewhite.svg';
import { ReactComponent as GitSmall } from '../../images/icons/githubwhite.svg';
import { ReactComponent as Linkedin } from '../../images/icons/linkedwhite.svg';
import { ReactComponent as InstaSmall } from '../../images/icons/instawhite.svg';

const Contact = () => {
	const mailer = () => {
		window.open('mailto:danjhkim@gmail.com');
	};

	return (
		<div className='contact' id='contact'>
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
						<Resume className='resumelower' />
						<div className='textsociallower linktext fontweight'>
							Resume
						</div>
					</Link>
					<a
						href='https://github.com/danjhkim?tab=repositories'
						target='_blank'
						rel='noopener noreferrer'>
						<picture>
							<GitSmall className='githublower' />
						</picture>
						<div className='textsociallower linktext fontweight'>
							GitHub
						</div>
					</a>
					<a
						href='https://www.linkedin.com/in/daniel-kim-443a431b7/'
						target='_blank'
						rel='noopener noreferrer'>
						<Linkedin className='Linkedlower' />
						<div className='textsociallower linktext fontweight'>
							Linked
						</div>
					</a>
					<a
						href='https://www.instagram.com/danielkim165/'
						target='_blank'
						rel='noopener noreferrer'>
						<picture>
							<InstaSmall className='instalower' />
						</picture>
						<div className='textsociallower linktext fontweight'>
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
