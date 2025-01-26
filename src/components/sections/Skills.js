import { Fragment } from "react";

const Slice = () => (
	<div className="slice">
		<div className="bar" />
		<div className="fill" />
	</div>
);

const Skills = () => {
	return (
		<Fragment>
			<div className="content skills">
				{/* title */}
				<div className="title">My Skills</div>
				{/* content */}
				<div className="row">
					{/* skill item */}
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="skills-list">
							<div className="skill-title border-line-h">
								<div className="icon">
									<i className="fa fa-toolbox" />
								</div>
								<div className="name">Tech</div>
							</div>
							<ul>
								<li className="border-line-h">
									<div className="name">HTML/CSS</div>
									<div className="progress">
										<div className="percentage" style={{ width: "95%" }} />
									</div>
								</li>
								<li className="border-line-h">
									<div className="name">JavaScript</div>
									<div className="progress">
										<div className="percentage" style={{ width: "70%" }} />
									</div>
								</li>
								<li>
									<div className="name">React</div>
									<div className="progress">
										<div className="percentage" style={{ width: "50%" }} />
									</div>
								</li>
								<li className="border-line-h">
									<div className="name">MongoDB</div>
									<div className="progress">
										<div className="percentage" style={{ width: "65%" }} />
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* skill item */}
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="skills-list">
							<div className="skill-title border-line-h">
								<div className="icon">
									<i className="fa fa-user-tie" />
								</div>
								<div className="name">Soft Skills</div>
							</div>
							<ul>
								<li className="border-line-h">
									<div className="name">Problem-Solving</div>
									<div className="progress">
										<div className="percentage" style={{ width: "70%" }} />
									</div>
								</li>

								<li>
									<div className="name">Communication</div>
									<div className="progress ">
										<div className="percentage" style={{ width: "70%" }} />
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* skill item */}
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="skills-list circles">
							<div className="skill-title border-line-h">
								<div className="icon">
									<i className="fa fa-code" />
								</div>
								<div className="name">Coding</div>
							</div>
							<ul>
								<li>
									<div className="name">NodeJS / Express</div>
									<div className="progress p50">
										<span>50%</span>{" "}
										<div className="slice">
											<div className="bar" />
											<div className="fill" />
										</div>
									</div>
								</li>
								<li>
									<div className="name">CSS / SCSS</div>
									<div className="progress p75">
										<span>90%</span>{" "}
										<div className="slice">
											<div className="bar" />
											<div className="fill" />
										</div>
									</div>
								</li>
								<li>
									<div className="name">React / JavaScript</div>
									<div className="progress p60">
										<span>80%</span>{" "}
										<div className="slice">
											<div className="bar" />
											<div className="fill" />
										</div>
									</div>
								</li>
								<li>
									<div className="name">PostgreSQL / MongoDB</div>
									<div className="progress p85">
										<span>85%</span>{" "}
										<div className="slice">
											<div className="bar" />
											<div className="fill" />
										</div>
									</div>
								</li>
								<li>
									<div className="name">Power BI</div>
									<div className="progress p85">
										<span>70%</span>{" "}
										<div className="slice">
											<div className="bar" />
											<div className="fill" />
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* skill item */}
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="skills-list list">
							<div className="skill-title border-line-h">
								<div className="icon">
									<i className="fa fa-list" />
								</div>
								<div className="name">Knowledge</div>
							</div>
							<ul>
								<li>
									<div className="name">Website hosting</div>
								</li>
								<li>
									<div className="name">Databases Implementation</div>
								</li>
								<li>
									<div className="name">API Integration</div>
								</li>
								<li>
									<div className="name">Version Control / Git</div>
								</li>
								<li>
									<div className="name">
										Build Tools: Gulp, Webpack & Parcel
									</div>
								</li>

							</ul>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default Skills;
