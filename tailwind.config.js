/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js,tsx,ts}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
