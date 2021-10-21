import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

import { ReactComponent as Javascript } from '../../images/icons/js.svg';
import { ReactComponent as ReactIcon } from '../../images/icons/reacticon.svg';
import { ReactComponent as AfterIcon } from '../../images/icons/aftereffects.svg';
import { ReactComponent as CSSIcon } from '../../images/icons/css.svg';
import { ReactComponent as GithubIcon } from '../../images/icons/githubSmall.svg';
import { ReactComponent as GreenIcon } from '../../images/icons/greensock.svg';
import { ReactComponent as MongoIcon } from '../../images/icons/mongo.svg';
import { ReactComponent as NodeIcon } from '../../images/icons/node.svg';

import '../../Sass/Skills.scss';

const Skills = () => {
	const Level = ({ min }) => {
		return (
			<div className='score'>
				<Rate
					size='300'
					count='6'
					defaultValue={min}
					disabled
					className='stars'
				/>
			</div>
		);
	};

	return (
		<div className='skills' id='stack'>
			<div className='skillsInner'>
				<div className='skillsTitle'>Skill Set</div>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date={<Level min='4' />}
						iconStyle={{
							background: 'rgb(243, 204, 74)',
							color: '#fff',
						}}
						icon={<Javascript className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							Javascript
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Up-to-date with the latest technologies.
							</p>
							<p className='timesmalltext'>
								ES5 code, Asynchronous programming,
								Object-oriented programming, Functional
								programming
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date={
							<div className='pushCloser'>
								<Level min='5' />
							</div>
						}
						iconStyle={{
							background: 'rgb(33, 150, 243)',
							color: '#fff',
						}}
						icon={<ReactIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							React
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Knowledgeable of React libraries and features
							</p>
							<p className='timesmalltext'>
								Responsive Design, Redux, Thunk, JSX, state,
								props, API
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date={<Level min='5' />}
						iconStyle={{
							background: '#c0dafb',
							color: '#fff',
						}}
						icon={<CSSIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							Cascading Style Sheets
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Adept with CSS and Preprocessors
							</p>
							<p className='timesmalltext'>
								SCSS, CSS Modules, Styled Components, Media
								queries
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date={
							<div className='pushCloser'>
								<Level min='4' />
							</div>
						}
						iconStyle={{
							background: '#45be96',
							color: '#fff',
						}}
						icon={<GreenIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							GreenSock
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Robust Javascript toolset for DOM manipulation
							</p>
							<p className='timesmalltext'>
								Scroll triggers, Animations, Transitions
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date={<Level min='3' />}
						iconStyle={{
							background: '#6ea0e2',
							color: '#fff',
						}}
						icon={<AfterIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							After Effects
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Create motion graphics in JSON vector form
							</p>
							<p className='timesmalltext'>
								Create animations from existing stil vectors
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date={
							<div className='pushCloser'>
								<Level min='4' />
							</div>
						}
						iconStyle={{
							background: '#05724e',
							color: '#fff',
						}}
						icon={<NodeIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							NodeJS
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Javascript runtime environment for code
								execution outside of browser
							</p>
							<p className='timesmalltext'>
								ExpressJS, backend routing, Google OAuth,
								PassportJS, Cookie authentication
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date={<Level min='3' />}
						iconStyle={{
							background: 'rgb(219, 236, 218)',
							color: '#fff',
						}}
						icon={<MongoIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							MongoDB
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								NoSQL database program
							</p>
							<p className='timesmalltext'>
								Schemas, CRUD operations
							</p>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date={
							<div className='pushCloser'>
								<Level min='6' />
							</div>
						}
						iconStyle={{
							background: 'rgb(177, 177, 177)',
							color: '#fff',
						}}
						icon={<GithubIcon className='largeIcon' />}>
						<h3 className='vertical-timeline-element-title skillSubTitle'>
							GitHub
						</h3>
						<div className='textBoxTime'>
							<p className='timebigtext'>
								Git repositories with understanding of source
								code management
							</p>
							<p className='timesmalltext'>
								Git, Push, Pull, Fetch, Fork, Branch, Merge
							</p>
						</div>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
			{/* <div className='skillsInner'>
				<div className='skillsTitle'>Skill Set</div>
				<div className='skillTimelineItem'>
					<div className='leftBox'>
						<div className='leftitem'></div>
					</div>
					<div className='dot'></div>
					<div className='rightBox'>
						<div className='rightitem'>sdfsdf</div>
					</div>
				</div>
				<div className='skillTimelineItem'>
					<div className='leftBox paddingRight'>
						<div className='rightitem'>sdfsdfdsfsdsd</div>
					</div>
					<div className='dot'></div>
					<div className='rightBox'>
						<div className='leftitem'></div>
					</div>
				</div>
				<div className='skillTimelineItem'>
					<div className='leftBox'>
						<div className='leftitem'></div>
					</div>
					<div className='dot'></div>
					<div className='rightBox'>
						<div className='rightitem'>sdfsdf</div>
					</div>
				</div>
				<div className='skillTimelineItem'>
					<div className='leftBox'>
						<div className='leftitem'></div>
					</div>
					<div className='dot'></div>
					<div className='rightBox'>
						<div className='rightitem'>sdfsdf</div>
					</div>
				</div>
				<div className='skillTimelineItem'>
					<div className='leftBox'>
						<div className='leftitem'></div>
					</div>
					<div className='dot'></div>
					<div className='rightBox'>
						<div className='rightitem'>sdfsdf</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Skills;
