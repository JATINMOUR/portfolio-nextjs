const ContactInfo = () => {
	return (
		<div className='content contacts'>
			{/* title */}
			<div className='title'>Get in Touch</div>
			{/* content */}
			<div className='row'>
				<div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
					<div className='map'>
						<iframe
						
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.0035913938593!2d72.8195417511382!3d19.193947416282164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b696251238f3%3A0x4b8859294e6f6d83!2s5RV9%2BHW5%2C%20Ali%20Talao%20Rd%2C%20Malad%2C%20Rathodi%2C%20Kharodi%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1737880080929!5m2!1sen!2sin"
							style={{ border: 0, width: '100%', height: '100%' }}
							allowFullScreen=''
							loading='jateen'
						/>
					</div>
					<div className='info-list'>
						<ul>
							<li>
								<strong>Address . . . .</strong> Mumbai, India
							</li>
							<li>
								<strong>Email . . . .</strong> Jateen1231@gmail.com
							</li>
							<li>
								<strong>Phone . . . .</strong> +91 9136332805
							</li>
							
						</ul>
					</div>
				</div>
				<div className='clear' />
			</div>
		</div>
	);
};
export default ContactInfo;
