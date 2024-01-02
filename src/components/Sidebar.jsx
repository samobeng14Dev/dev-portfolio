// Sidebar.js

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaAlignJustify } from "react-icons/fa6";

const Sidebar = ({ links }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const sidebarAnimation = useSpring({
		transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
	});

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
			if (window.innerWidth <= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 h-full bg-emerald-600 w-64 z-50 ${
				isMobile ? "block" : "hidden"
			}`}>
			{isMobile && (
				<button
					className='p-4 md:hidden'
					onClick={toggleSidebar}>
					<FaAlignJustify />
				</button>
			)}
			<animated.div
				style={sidebarAnimation}
				className='h-full overflow-y-auto'>
				<div className='py-4'>
					{links.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className='block p-4 hover:bg-emerald-200 duration-300'>
							{link.text}
						</a>
					))}
				</div>
			</animated.div>
		</div>
	);
};

export default Sidebar;
