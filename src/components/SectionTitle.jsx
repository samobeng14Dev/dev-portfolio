import { useSelector } from "react-redux";
const SectionTitle = ({ text }) => {
	const theme = useSelector((state) => state.toggleState.theme);
	return (
		<div className='border-b border-gray-200 pb-5'>
			<h2
				className={`text-3xl  font-medium tracking-wider capitalize ${
					theme === "sunset" ? "text-white" : "text-black"
				}`}>
				{text}
			</h2>
		</div>
	);
};
export default SectionTitle;
