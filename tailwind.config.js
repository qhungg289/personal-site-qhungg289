module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('../public/img/bg-image.jpg')",
			},
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
