import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../feature/toggle/toggleSlice";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Navbar = () => {
	const dispatch = useDispatch();
	const handleTheme = () => {
		dispatch(toggleTheme());
	};
	const theme = useSelector((state) => state.toggleState.theme);

	return (
		<nav
			className={`bg-emerald-500 h-15 sticky top-0 z-50 ${
				theme === "sunset"
					? "text-white hover:text-black font-mono duration-300"
					: "text-black hover:text-white font-mono duration-300"
			}`}>
			<div className='navbar align-element'>
				{/* Navbar Start */}
				<div className='navbar-start'>
					<button className='hidden lg:flex btn text-3xl items-center'>
						<span className='text-emerald-600'>SO</span>
					</button>
				</div>

				{/* DROPDOWN */}
				<div className='dropdown '>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<FaBarsStaggered className='h6 w-6 text-black animate-pulse' />
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
						<BsSunFill className='swap-on h-4 w-4 text-white' />
						{/* moon icon */}
						<BsMoonFill className='swap-off h-4 w-4 text-black' />
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
