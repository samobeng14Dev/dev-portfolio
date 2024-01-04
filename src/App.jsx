import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
			<ScrollToTop />
			<Footer />
		</>
	);
};
export default App;
