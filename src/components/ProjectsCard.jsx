import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useSelector } from "react-redux";

const ProjectsCard = ({ url, img, github, title, text }) => {
	const theme = useSelector((state) => state.toggleState.theme);
	return (
		<article
			className={`card ${theme === "sunset" ? "text-white" : "text-black"}`}>
			<img
				src={img}
				alt={title}
				className='w-full object-cover rounded-t-lg h-64'
			/>
			<div className=' p-8'>
				<h2 className='text-xl tracking-wide font-medium'>{title}</h2>
				<p className='mt-4  leading-loose'>{text}</p>
				<div className='mt-4 flex gap-x-4'>
					<a href={url}>
						<TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
					</a>
					<a href={github}>
						<FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
					</a>
				</div>
			</div>
		</article>
	);
};
export default ProjectsCard;
