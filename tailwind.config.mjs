/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF6F61',
				accent: '#FFD700',
			},
			fontFamily: {
				sans: ['jaro', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			boxShadow: {
				glow: '0 10px 50px rgba(255, 111, 97, 0.6)',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};