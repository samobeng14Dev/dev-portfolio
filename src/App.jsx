import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import { links } from "./data";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
			<Footer />
			<Sidebar links={links} />
		</>
	);
};
export default App;
