module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				breath: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 },
				},
			},
			animation: {
				breath: "breath 1s ease-in-out infinite",
			},
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			"ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
		},
		container: {
			center: true,
			padding: "2rem",
		},
	},
	plugins: [],
};
