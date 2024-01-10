import { useSelector } from "react-redux";

const SkillsCard = ({ icon, title, text }) => {
	const theme = useSelector((state) => state.toggleState.theme);

	return (
		<article className={theme === "sunset" ? "text-white" : "text-black"}>
			<span>{icon}</span>
			<h4 className='mt-6 font-bold'>{title}</h4>
			<p className='mt'>{text}</p>
		</article>
	);
};

export default SkillsCard;
