import { Config } from '@stencil/core';
import { stylus } from '@stencil/stylus';

export const config: Config = {
  namespace: 'lcl',
  outputTargets: [
    {
      type: 'docs',
    },
    {
      type: 'dist',
    },
    {
      type: 'stats',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalScript: 'src/globals/app.ts',
  globalStyle: 'src/globals/variables.css',
  plugins: [
    stylus({
      includePaths: ['src/globals'],
      injectGlobalPaths: ['src/globals/app.styl', 'src/globals/mixins.styl'],
    }),
  ],
  devServer: {
    port: 3333,
    openBrowser: false,
  },
  tsconfig: './tsconfig.json',
  excludeSrc: ['**/.test*.*'],
};
