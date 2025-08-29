import { Fragment } from 'react';

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
						Hello👋 , I'm Jateen Mourya, I am a Data Analyst skilled in SQL, Excel, Power BI, Python, and DevOps tools, with expertise in data
						visualization, trend analysis, and predictive modeling. I excel at transforming complex datasets into actionable insights to drive business decisions. 
						</p>
						<p>
						My experience includes working with large datasets, ML
						models, automated reporting, and interactive dashboards. Additionally, I have knowledge of DevOps
						practices to ensure smooth deployment and technical operations
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
