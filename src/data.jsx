import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedux, SiReactquery, SiTailwindcss } from "react-icons/si";
import cocktailImg from "./assets/cocktail.png";
import unsplashImg from "./assets/unsplash.png";
import estateImg from "./assets/estate.png";
import comfyImg from "./assets/comfy.png";
import comfySlothImg from "./assets/comfySloth.png";
export const links = [
	{ id: nanoid(), href: "#home", text: "home" },
	{ id: nanoid(), href: "#skills", text: "skills" },
	{ id: nanoid(), href: "#about", text: "about" },
	{ id: nanoid(), href: "#projects", text: "projects" },
	{ id: nanoid(), href: "#resume", text: "resume" },
];

export const skills = [
	{
		id: nanoid(),
		title: "React",
		icon: <FaReact className='h-16 w-16 text-emerald-500' />,
		text: "Advanced React skills, including the ability to create efficient and dynamic front-end applications with a strong emphasis on component-based architecture.",
	},
	{
		id: nanoid(),
		title: "ReactQuery",
		icon: <SiReactquery className='h-16 w-16 text-emerald-500' />,
		text: "Leveraging React Query's intuitive hooks and query caching mechanisms, I've seamlessly managed asynchronous data fetching, ensuring a seamless user experience by reducing unnecessary network requests and providing real-time updates. ",
	},
	{
		id: nanoid(),
		title: "Redux",
		icon: <SiRedux className='h-16 w-16 text-emerald-500' />,
		text: " Leveraging Redux Toolkit, I've architectured and maintained a robust and scalable state structure, fostering predictable and maintainable codebases.",
	},
	{
		id: nanoid(),
		title: "Javascript",
		icon: <FaJs className='h-16 w-16 text-emerald-500' />,
		text: "Expertise in JavaScript, designing interactive and dynamic web apps with an emphasis on seamless user interactions and functionality.",
	},
	{
		id: nanoid(),
		title: "Tailwind CSS",
		icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
		text: "I've mastered the art of crafting responsive and aesthetically pleasing user interfaces by leveraging the utility-first approach of this popular CSS framework.",
	},
	{
		id: nanoid(),
		title: "HTML&CSS",
		icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
		text: "Skilled at creating aesthetically pleasing and responsive websites to provide the best possible user experiences, with proficiency in HTML and CSS",
	},
];

export const projects = [
	{
		id: nanoid(),
		img: comfySlothImg,
		url: "https://comfysloth-ecomerce.netlify.app/",
		github: "https://github.com/samobeng14Dev/e-commerce-app",
		title: "Comfy Sloth",
		text: "Excited to share my latest project: a modern e-commerce web application using React, Context API, Styled Components, HTML, CSS, Auth0, Stripe, and React Router. The app features secure user authentication, dynamic product listings, efficient shopping cart management, and seamless payment processing with Stripe. Designed with responsive principles, it ensures an optimal user experience across all devices. This project highlights my skills in creating user-centric, scalable, and visually appealing web solutions. Explore my portfolio to see this and other projects in action.",
	},
	{
		id: nanoid(),
		img: estateImg,
		url: "https://react-firebase-real-estate-webapp.netlify.app/",
		github: "https://github.com/samobeng14Dev/real-estate-app",
		title: "Samo Estates",
		text: "Excited to share my latest project: a dynamic real estate web application built with ReactJS Firebase, OAuth, Tailwind CSS, and DaisyUI! This platform empowers users to effortlessly create, manage, and browse property listings. With seamless integration of Firebase for authentication and database management, users can securely log in, create personalized profiles, and even contact landlords directly through the platform.The application features a user-friendly interface and leverages React Router for smooth navigation, ensuring an intuitive browsing experience. Tailwind CSS and DaisyUI were instrumental in crafting a sleek and modern design, enhancing user engagement and satisfaction.From creating and editing listings to managing profiles and contacting landlords, this project embodies the intersection of cutting-edge technology and user-centric design, providing a seamless solution for real estate enthusiasts.",
	},
	{
		id: nanoid(),
		img: comfyImg,
		url: "https://comfy-store-online.netlify.app/",
		github: "https://github.com/samobeng14Dev/comfy-store",
		title: "Comfy Store",
		text: "Introducing my latest achievement: a cutting-edge Comfy Store Web App! Leveraging a powerhouse of technologies, including React, Axios, React Query, Redux Toolkit, React Router, Tailwind CSS, DaisyUI, React Toastify, and Strapi, this project redefines the online shopping experience. The front-end boasts a seamless blend of React's dynamic interface, efficient data handling with React Query, and state management simplicity via Redux Toolkit. Tailwind CSS and DaisyUI contribute to a sleek and modern design, while React Toastify ensures users stay informed with friendly notifications.",
	},

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
];
