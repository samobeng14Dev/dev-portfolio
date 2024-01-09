const Footer = () => {
	const currentYear = new Date().getFullYear();

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer
			className='bg-emerald-800 text-white py-4x'
			style={{ position: "fixed", bottom: 0, width: "100%" }}>
			<div className='container mx-auto text-center'>
				<p className='text-sm'>
					&copy; {currentYear} Samuel Obeng. All rights reserved.
				</p>
				<button
					className='btn btn-sm bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 mt-4 animate-bounce'
					onClick={handleScrollToTop}>
					Back to Top
				</button>
			</div>
		</footer>
	);
};

export default Footer;
