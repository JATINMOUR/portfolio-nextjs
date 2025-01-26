import dynamic from 'next/dynamic'; 
import Script from 'next/script';
import About from '../src/components/About';
// import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';
import Resume from '../src/components/Resume';
import AboutMe from '../src/components/sections/AboutMe';
// import BlogSection from '../src/components/sections/Blog';
import ContactForm from '../src/components/sections/ContactForm';
import ContactInfo from '../src/components/sections/ContactInfo';
import FunFact from '../src/components/sections/FunFact';
//import Pricing from "../src/components/sections/Pricing";

import ResumeSection from '../src/components/sections/Resume';
import Services from '../src/components/sections/Services';
import Skills from '../src/components/sections/Skills';

import TypingAnimation from '../src/components/TypingAnimation';
import Work from '../src/components/Work';
import ContentContainer from '../src/layout/ContentContainer';
import Header from '../src/layout/Header';
import Layout from '../src/layout/Layout';
import siteMetadata from '../src/utils/siteMetaData';

const RecentWorks = dynamic(
	() => import('../src/components/sections/RecentWorks'),
	{
		ssr: false,
	}
);

const bio = `<p>
👋 , 

</p>`;

const services = [
	{
		icon: 'fa fa-code',
		title: 'Web Development',
		desc: 'Can leverage my knowledge about JavaScript, HTML, CSS to create a robust & effective application.',
	},	
	
];

const animationText = [
	'Frontend Developer',
	'Blogger',
	'Freelancer',
	'Gamer',
];

const Index3 = () => {
	return (
		<Layout bg={'gradient'}>
			<Header noSideBarBtn animationText={animationText} />
			<Home>
				<Script src='https://kit.fontawesome.com/29b275fb0c.js'></Script>
				<div className='profile'>
					{/* profile image */}
					<img
						src='/images/avatar1.jpg' // Update with the correct path to your profile image
						alt='Profile'
						className='profile-image'
					/>

					{/* profile titles */}
					<div className='title'>Jateen Mourya</div>

					<TypingAnimation data={animationText} />
					{/* profile socials */}
					<div className='social'>
						<a target='_blank' rel='noreferrer' href={siteMetadata.twitter}>
							<span className='fa fa-twitter' />
						</a>
						<a target='_blank' rel='noreferrer' href={siteMetadata.github}>
							<span className='fa fa-github' />
						</a>
						<a target='_blank' rel='noreferrer' href={siteMetadata.linkedin}>
							<span className='fa fa-linkedin' />
						</a>
					</div>
					{/* profile buttons */}
					<div className='lnks'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://drive.google.com/file/d/175DnGKl7FkFViWM9ZDOe8e__Zb36kzam/view?usp=drive_link'
							className='lnk'
						>
							<span className='text'>Download CV</span>
							<span className='ion ion-android-download' />
						</a>
					</div>
				</div>
			</Home>
			<ContentContainer>
				<About>
					<AboutMe bio={bio} />
					<Services serviceList={services} />
					<FunFact />
				</About>
				<Resume>
					<ResumeSection />
					<Skills />
				</Resume>
				<Work>
					<RecentWorks />
				</Work>
				{/* <Blog>
					<BlogSection />
				</Blog> */}
				<Contact>
					<ContactInfo />
					<ContactForm />
				</Contact>
			</ContentContainer>
		</Layout>
	);
};
export default Index3;
