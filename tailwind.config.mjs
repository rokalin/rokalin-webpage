/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rokalin-teal': {
					300: '#b1ccc7',
					400: '#94bbb4',
					500: '#86b0a9',
				},
			}
		},
	},
	plugins: [],
}
