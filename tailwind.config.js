/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			minWidth: {
				"main-content": "300px",
			},
			maxWidth: {
				"main-content": "1200px",
			},
			height: {
				header: "60px",
			},
			margin: {
				header: "60px",
			},
		},
	},
	plugins: [],
};
