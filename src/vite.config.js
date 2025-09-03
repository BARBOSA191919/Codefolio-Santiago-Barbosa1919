import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/layouts/Layout.astro'), // O el archivo principal
            },
        },
    },
    resolve: {
        alias: {
            '/src/scripts': resolve(__dirname, 'src/scripts'),
        },
    },
});