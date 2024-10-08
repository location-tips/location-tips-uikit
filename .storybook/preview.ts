export const parameters = {
  rootAttributes: [
    {
      root: 'html',
      attribute: 'data-brand',
      defaultState: {
        name: 'LocationTips',
        value: 'locationtips',
      },
      states: [
        {
          name: 'White Label',
          value: 'white-label',
        },
        {
          name: 'Brand01',
          value: 'brand01',
        },
        {
          name: 'Brand02',
          value: 'brand02',
        },
        {
          name: 'LocationTips',
          value: 'locationtips',
        },
      ],
    },
    {
      root: 'html',
      attribute: 'data-theme',
      defaultState: {
        name: 'Light',
        value: 'light',
      },
      states: [
        {
          name: 'Dark',
          value: 'dark',
        },
        {
          name: 'Light',
          value: 'light',
        },
      ],
    },
    {
      root: 'html',
      attribute: 'data-platform',
      defaultState: {
        name: 'Web Desktop',
        value: 'web-desktop',
      },
      states: [
        {
          name: 'IOS',
          value: 'ios',
        },
        {
          name: 'Android',
          value: 'android',
        },
        {
          name: 'Web Desktop',
          value: 'web-desktop',
        },
        {
          name: 'Web Mobile',
          value: 'web-mobile',
        },
        {
          name: 'Web Tablet',
          value: 'web-tablet',
        },
      ],
    },
  ],
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    ...parameters,
  },
};

import '../src/styles/index.css';

export default preview;
