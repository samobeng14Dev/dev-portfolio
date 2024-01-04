/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"winter",
			"dracula",
			"cyberpunk",
			"retro",
			"forest",
			"valentine",
			"sunset",
			"aqua",
			"nord",
		],
	},
};
