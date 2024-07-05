import type {StorybookConfig} from '@storybook/react-vite';
import {withoutVitePlugins} from "@storybook/builder-vite";
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
    stories: ['../src/lib/**/**/*.@(stories.@(js|jsx|ts|tsx))'],

    addons: [
        "@storybook/addon-essentials",
        "storybook-addon-root-attributes",
        "@storybook/addon-a11y",
        "@chromatic-com/storybook"
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: 'uikit-react/vite.config.ts',
            },
        },
    },

    async viteFinal(config) {
        return {
            ...config,
            plugins: [...(await withoutVitePlugins(config.plugins, ['vite:lib-inject-css', 'vite:dts'])), svgr()],
        }
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

// function value: string): any {
//     return dirname(require.resolve(join(value, "package.json")));
// }
