/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(0, 36, 50)',
				'secondary': 'rgb(255, 255, 255)',
				'accent': '#00ffc9',
				'thirdy': 'rgb(0, 186, 255)',
			}
		},
	},
	plugins: [],
}
