import { Fragment } from "react";

const FunFact = () => {
	return (
		<Fragment>
			<div className="content fuct">
				{/* title */}
				<div className="title">Most Notable</div>
				{/* content */}
				<div className="row fuct-items">
					{/* fuct item */}
					<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
						<div className="fuct-item">
							<div className="icon">
								<span className="fa fa-code" />
							</div>
							<div className="name">8+ Repo&apos;s Created</div>
						</div>
					</div>
					{/* fuct item */}
					<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
						<div className="fuct-item">
							<div className="icon">
								<span className="fa fa-stopwatch" />
							</div>
							<div className="name">100+ hrs coding</div>
						</div>
					</div>
					{/* fuct item */}
					<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
						<div className="fuct-item">
							<div className="icon">
								<span className="fa fa-plus" />
							</div>
							<div className="name">100+ Contributions on Github</div>
						</div>
					</div>
					{/* fuct item */}
					<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
						<div className="fuct-item">
							<div className="icon">
								<span className="fa fa-calendar-days" />
							</div>
							<div className="name">2+ years experience</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default FunFact;
