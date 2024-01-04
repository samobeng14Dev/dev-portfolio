import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import Resume from "./Resume";
const About = () => {
	return (
		<section
			className='bg-emerald-600 py-20'
			id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16'>
				<img
					src={aboutSvg}
					className='w-full h-64 animate-bounce'
				/>
				<article>
					<SectionTitle text='About Me' />

					<p className='text-black mt-8 leading-loose'>
						<span className='font-bold'>Introduction-</span> <br />I am Samuel
						Obeng. A passionate Frontend Web Developer specializing in
						JavaScript, React, and TypeScript Technologies. Committed to
						creating seamless user experiences and collaborating with fellow
						developers to achieve outstanding results.
					</p>
					<p className='text-black mt-8 leading-loose'>
						<span className='font-bold'>Expertise-</span> <br />
						HTML/CSS, JavaScript, React, ReactQuery, Redux: Proficient in
						building dynamic, performant web applications using the latest
						frontend technologies. User-Centric Design: Dedicated to crafting
						interfaces that are both visually appealing and user-friendly.
					</p>
					<p className='text-black mt-8 leading-loose'>
						<span className='font-bold'>Key Attributes-</span> <br />
						Code Quality: Strong advocate of clean, maintainable code following
						industry best practices. Continuous Learning: Enthusiastic about
						staying up-to-date with evolving tech trends to integrate innovative
						solutions. Collaborative: Adept at working within cross-functional
						teams to deliver high-quality projects.
					</p>
					<div>
						<Resume />
					</div>
				</article>
			</div>
		</section>
	);
};
export default About;
