// Navbar.js
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
	nord: "nord",
	retro: "retro",
};
const getThemeFromLocalStorage = () => {
	return localStorage.getItem("theme" || themes.nord);
};
const Navbar = () => {
	const [theme, setTheme] = useState(getThemeFromLocalStorage());
	const handleTheme = () => {
		const { nord, retro } = themes;
		const newTheme = theme === nord ? retro : nord;
		setTheme(newTheme);
	};
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<nav className='bg-emerald-500'>
			<div className='navbar align-element'>
				{/* Navbar Start */}
				<div className='navbar-start'>
					<button className='hidden lg:flex btn text-3xl items-center'>
						<span className='text-emerald-600'>SO</span>
					</button>
				</div>

				{/* DROPDOWN */}
				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<FaBarsStaggered className='h6 w-6 text-black' />
					</label>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-emerald-600 rounded-box w-52'>
						<NavLinks />
					</ul>
				</div>

				{/* NAV CENTER */}
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal'>
						<NavLinks />
					</ul>
				</div>

				<div className='navbar-end'>
					{/* THEME SETUP */}
					<label className='swap swap-rotate'>
						<input
							type='checkbox'
							onChange={handleTheme}
						/>
						{/* sun icon */}
						<BsSunFill className='swap-on h-4 w-4 text-black' />
						{/* moon icon */}
						<BsMoonFill className='swap-off h-4 w-4 text-black' />
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
