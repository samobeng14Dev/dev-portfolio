import webImg from "../assets/webdeveloper.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
	return (
		<div className='bg-emerald-700 py-24'>
			<div className='align-element grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-7xl text-black font-bold tracking-wider '>
						I'm Samuel
					</h1>
					<p className='mt-4 text-3xl text-white capitalize tracking-wide animate-pulse'>
						Front-End Web Developer
					</p>
					<p className='mt-2 text-lg text-white capitalize tracking-wide animate-pulse'>
						turning ideas into interactive frontend solutions
					</p>
					<div className='flex gap-x-4 mt-4'>
						<a href='https://github.com/samobeng14Dev'>
							<FaGithubSquare className='h-8 w-8 text-black hover:text-slate-500 duration-300' />
						</a>
						<a href='https://www.linkedin.com/in/samobeng14dev/'>
							<FaLinkedin className='h-8 w-8 text-black hover:text-slate-500 duration-300' />
						</a>
						<a href='https://twitter.com/samobeng14Dev'>
							<FaTwitterSquare className='h-8 w-8 text-black hover:text-slate-500  duration-300' />
						</a>
					</div>
				</article>
				<article className='hidden md:block'>
					<img
						src={webImg}
						className='h-80 lg:h-96'
					/>
				</article>
			</div>
		</div>
	);
};
export default Hero;
