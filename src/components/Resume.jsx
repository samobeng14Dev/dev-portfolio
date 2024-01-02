import ResumePDF from "../assets/resume.pdf";
const Resume = () => {
	const handleDownload = () => {
		window.open(ResumePDF, "_blank");
		// Alternatively, use window.location.href for download
		// window.location.href = ResumePDF;
	};

	return (
		<section
			id='resume'
			className='align-element mt-4 p-8 bg-white shadow-md rounded-md'>
			<h2 className='text-2xl font-bold mb-4'>Download Resume</h2>
			<button
				className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded'
				onClick={handleDownload}>
				Download PDF
			</button>
		</section>
	);
};

export default Resume;
