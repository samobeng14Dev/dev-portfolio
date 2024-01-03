import { links } from "../data";

const NavLinks = () => {
	return (
		<>
			{links.map((link) => {
				const { id, href, text } = link;
				return (
					<a
						key={id}
						href={href}
						className='capitalize text-lg text-white font-bold tracking-wide hover:text-black duration-300 mr-4 lg:mr-8'>
						{text}
					</a>
				);
			})}
		</>
	);
};

export default NavLinks;
