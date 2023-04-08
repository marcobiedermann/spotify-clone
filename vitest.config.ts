/* eslint-disable import/no-unresolved */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'happy-dom',
  },
});
