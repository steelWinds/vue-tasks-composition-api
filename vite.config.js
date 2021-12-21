import { defineConfig } from 'vite';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => {
    return {
        plugins: [
            vue(),
            minifyHtml(),
            injectHtml({
                data: {
                    title: 'CompositionApi and Vite'
                }
            })
        ],

        base: command === 'serve' ? '/' : '/vue-tasks-composition-api/'
    };
});
