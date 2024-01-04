import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsVisible(scrollTop > 100);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed bottom-4 right-4 bg-emerald-500 text-white p-2 rounded-full cursor-pointer ${
				isVisible ? "visible" : "invisible"
			}`}
			onClick={scrollToTop}>
			<BsArrowUp size={24} />
		</div>
	);
};

export default ScrollToTop;
