/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
