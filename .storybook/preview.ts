import type { Preview } from '@storybook/react';

import '../src/css/elements/anchor.css';
import '../src/css/elements/button.css';
import '../src/css/elements/figure.css';
import '../src/css/elements/image.css';
import '../src/css/elements/input.css';
import '../src/css/elements/list.css';
import '../src/css/elements/paragraph.css';
import '../src/css/elements/table.css';
import '../src/css/layout/base.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
