/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			colors: {
				"neutral-dark-400": "#292831",
				"neutral-dark-500": "#1c1b20",
				"neutral-dark-600": "#161519",
				"neutral-dark-700": "#100f12",
			},
			minWidth: {
				"main-content": "300px",
			},
			maxWidth: {
				"main-content": "1200px",
			},
			height: {
				body: "calc(100% - var(--header-height))",
				header: "var(--header-height)",
			},
			margin: {
				header: "var(--header-height)",
			},
		},
	},
	plugins: [],
};
