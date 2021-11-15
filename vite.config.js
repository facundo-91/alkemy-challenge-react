import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		proxy: {
			'/auth': 'http://localhost:8000',
			'/search': 'http://localhost:8000',
		},
	},
	base: './',
});
