import type { Preview } from '@storybook/react';
import '../src/index.css';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { GLayoutProvider } from '../src/context/layout';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story, context) => {
      const initialEntries = context.parameters.router?.initialEntries || ['/'];
      
      return React.createElement(MemoryRouter, { initialEntries }, 
        React.createElement(GLayoutProvider, null, 
          React.createElement(Story, null)
        )
      );
    },
  ],
};

export default preview;
