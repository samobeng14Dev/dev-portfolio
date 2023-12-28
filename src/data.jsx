import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedux, SiReactquery, SiAxios } from "react-icons/si";
import cocktailImg from "./assets/cocktail.png";
import unsplashImg from "./assets/unsplash.png";
export const links = [
	{ id: nanoid(), href: "#home", text: "home" },
	{ id: nanoid(), href: "#skills", text: "skills" },
	{ id: nanoid(), href: "#about", text: "about" },
	{ id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
	{
		id: nanoid(),
		title: "HTML&CSS",
		icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
		text: "Skilled at creating aesthetically pleasing and responsive websites to provide the best possible user experiences, with proficiency in HTML and CSS",
	},
	{
		id: nanoid(),
		title: "Javascript",
		icon: <FaJs className='h-16 w-16 text-emerald-500' />,
		text: "Expertise in JavaScript, designing interactive and dynamic web apps with an emphasis on seamless user interactions and functionality.",
	},
	{
		id: nanoid(),
		title: "React",
		icon: <FaReact className='h-16 w-16 text-emerald-500' />,
		text: "Advanced React skills, including the ability to create efficient and dynamic front-end applications with a strong emphasis on component-based architecture..",
	},
];

export const projects = [
	{
		id: nanoid(),
		img: cocktailImg,
		url: "https://cocktailers-web-app.netlify.app/",
		github: "https://github.com/samobeng14Dev/cocktail-web-app",
		title: "Cocktail DB",
		text: "This project is a dynamic React API project featuring the Cocktail DB API, seamlessly integrating React Query, Axios, and React Router DOM. This project not only showcases the power of React in crafting engaging user interfaces but also leverages React Query for efficient data management, Axios for smooth API interactions, and React Router DOM for seamless navigation.",
	},
	{
		id: nanoid(),
		img: unsplashImg,
		url: "https://unsplash-images-web-app.netlify.app/",
		github: "https://github.com/samobeng14Dev/unsplash-images-project",
		title: "Unsplash Image",
		text: "This is a dynamic image search web app using React, Context API, React Query, Axios, and custom hooks, harnessing the Unsplash API's wealth of stunning visuals. The app ensures a seamless user experience with the Context API managing global state, React Query optimizing data fetching for real-time updates, and Axios handling asynchronous requests. Custom hooks enhance code maintainability, resulting in a responsive, innovative, and user-friendly exploration of captivating images.",
	},
	{
		id: nanoid(),
		img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
		url: "https://react-projects.netlify.app/",
		github: "https://github.com/john-smilga",
		title: "third project",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
	},
];
