import { defineConfig } from 'vite';
import { ripple } from '@ripple-ts/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), ripple()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
