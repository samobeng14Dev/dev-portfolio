import ResumePDF from "../assets/resume.pdf";
const Resume = () => {
	const handleDownload = () => {
		window.open(ResumePDF, "_blank");
		
	};

	return (
		<section
			id='resume'
			className='align-element mt-4 p-8  shadow-md rounded-md'>
			<h2 className='text-2xl text-black font-bold mb-4'>Download Resume</h2>
			<button
				className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded'
				onClick={handleDownload}>
				Download PDF
			</button>
		</section>
	);
};

export default Resume;
