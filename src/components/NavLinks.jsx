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
						className='capitalize text-lg font-bold tracking-wide mr-4 lg:mr-8'>
						{text}
					</a>
				);
			})}
		</>
	);
};

export default NavLinks;
