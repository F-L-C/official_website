/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'flc-green': '#A8D39D',
				'flc-darkgreen': '#1A3702',
				'flc-blue': '#0073BB',
				'flc-white': '#F8FFF8'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'bg': 'url(\'/assets/bg.jpg\')',
			},
		},
	},
	plugins: [],
}
