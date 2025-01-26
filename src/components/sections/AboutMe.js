import { Fragment } from 'react';
const bio_ = ` <p>
I am Lindsey, a Frontend Developer from Florida. Passionate about crafting captivating digital experiences through code, I am a skilled Frontend Web Developer with a keen eye for design & a knack for turning ideas into interactive web solutions.
</p>`;
const AboutMe = ({ bio }) => {
	return (
		<Fragment>
			<div className='content about'>
				{/* title */}
				<div className='title'>
					<span className='first-word'>About</span> Me
				</div>
				{/* content */}
				<div className='row'>
					<div className='col col-d-12 col-t-6 col-m-12 border-line-v'>
						<p>
						Hello👋 , I'm Jateen Mourya, a Web Developer with Two years of experience specializing in creating dynamic and responsive web applications. I have strong expertise in HTML, CSS, and JavaScript, and I am proficient in backend technologies like Node.js, Java, SQL, MongoDB and Python. 
						</p>
						<p>
						Passionate about improving my coding skills, I am currently expanding my knowledge in React and Data Analytics. I will be able to greatly benefit your organization by creating effective, scalable and user-friendly solutions.
						</p>
					</div>
					{/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="info-list">
							<ul>
								<li>
									<strong>Age . . . .</strong> 32
								</li>
								<li>
									<strong>Residence . . . .</strong> USA
								</li>
								<li>
									<strong>Freelance . . . .</strong> Available
								</li>
								<li>
									<strong>Address . . . .</strong> Fort Walton Beach, FL
								</li>
							</ul>
						</div>
					</div> */}
					<div className='clear' />
				</div>
			</div>
		</Fragment>
	);
};
export default AboutMe;
