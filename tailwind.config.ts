import { scopedPreflightStyles, isolateInsiderOfContainer } from 'tailwindcss-scoped-preflight';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extends: [],
  },
  plugins: {
    scopedPreflightStyles: {
      isolationStrategy: isolateInsiderOfContainer('.twd'),
    },
  },
};
