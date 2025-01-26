import { Fragment } from "react";

const ResumeSection = () => {
	return (
		<Fragment>
			<div className="content resume">
				{/* title */}
				<div className="title">Resume</div>
				{/* content */}
				<div className="row">
					{/* education */}
				<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="resume-title border-line-h">
							<div className="icon">
								<i className="fa fa-university" />
							</div>
							<div className="name">Education</div>
						</div>
						<div className="resume-items">
							<div className="resume-item border-line-h">
								<div className="date">2023 - 2026</div>
								<div className="name">B.E Information technology </div>
								<div className="company">Shree L R Tiwari College of Engineering</div>
							</div>
						</div>
					</div>
					{/* experience */}
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="resume-title border-line-h">
							<div className="icon">
								<i className="fa fa-briefcase" />
							</div>
							<div className="name">Experience</div>
						</div>
						<div className="resume-items">
							<div className="resume-item border-line-h active">
								<div className="date">April 2021 - Present</div>
								<div className="name">Web Developer</div>
								
							</div>

							<div className="resume-item border-line-h">
								<div className="date">June 2024 - July 2024</div>
								<div className="name">AWS Cloud Practitioner Essentials Certificate</div>
								<div className="Certificate"><a href="https://www.coursera.org/account/accomplishments/verify/54WHD7SUYURA?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse">View</a></div>
							</div>
							<div className="resume-item border-line-h">
								<div className="date">July 2024 - July 2024</div>
								<div className="name">
								Accenture North America - Data Analytics and Visualization Job Simulation Certificate</div>
								<div className="Certificate"><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_AKMgPEFQ7k69Jmzou_1722428735558_completion_certificate.pdf">View</a></div>
							</div>

							<div className="resume-item">
								<div className="date">Mar 2023</div>
								<div className="name">
								Getting Started with Data Analytics on AWS</div>
								<div className="Certificate"><a href="https://www.coursera.org/account/accomplishments/verify/F9WU68N6DJ3H">View</a></div>
								<p></p>
							</div>
							
						</div>
					</div>
					
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default ResumeSection;

