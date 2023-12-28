import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
	return (
		<section
			className='bg-white py-20'
			id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16'>
				<img
					src={aboutSvg}
					className='w-full h-64'
				/>
				<article>
					<SectionTitle text='About Me' />

					<p className='text-slate-600 mt-8 leading-loose'>
						<span className='font-bold'>Introduction-</span> <br />
						Experienced Frontend Developer specializing in JavaScript, React,
						and TypeScript Technologies. Committed to creating seamless user
						experiences and collaborating with fellow developers to achieve
						outstanding results.
					</p>

					<p className='text-slate-600 mt-8 leading-loose'>
						<span className='font-bold'>Expertise-</span> <br />
						HTML/CSS, JavaScript, React, ReactQuery, Redux: Proficient in
						building dynamic, performant web applications using the latest
						frontend technologies. User-Centric Design: Dedicated to crafting
						interfaces that are both visually appealing and user-friendly.
					</p>
				</article>
			</div>
		</section>
	);
};
export default About;