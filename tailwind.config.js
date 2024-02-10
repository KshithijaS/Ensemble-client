/** @type {import('tailwindcss').Config} */
import { fontFamily }  from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				...fontFamily,
				'sans': ['var(--font-primary)', 'sans-serif'],
			},
			colors: {
				'raisin-black':'var(--color-raisin-black)',
			}
		}
	},
	plugins: []
};
