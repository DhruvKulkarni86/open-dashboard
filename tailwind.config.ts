import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"blue-gr": "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
			},
			fontFamily: {
				main: ["var(--font-mont)"],
				comp: ["var(--font-lato)"],
			},
			colors: {
				"main-w": "#FFFFFF",
				background: "#F8FAFF",
			},
		},
	},
	plugins: [],
};
export default config;
