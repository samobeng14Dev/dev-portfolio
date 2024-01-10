import { createSlice } from "@reduxjs/toolkit";

const themes = {
	nord: "nord",
	sunset: "sunset",
};
const getThemesFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.winter;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};
const initialState = {
	theme: getThemesFromLocalStorage(),
};

const toggleSlice = createSlice({
	name: "toggle",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			const { nord, sunset } = themes;
			state.theme = state.theme === nord ? sunset : nord;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { toggleTheme } = toggleSlice.actions;
export default toggleSlice.reducer;
