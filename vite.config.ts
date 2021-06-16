import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    clearScreen: false,
    plugins: [
        vue(),
        viteStylelint(),
        eslintPlugin(),
        {
            autoprefixer: {
                overrideBrowserslist: [
                    'Android 4.1',
                    'iOS 7.1',
                    'Chrome > 31',
                    'ff > 31',
                    'ie >= 8'
                ],
                grid: true
            }
        }
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
});
