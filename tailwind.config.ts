import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        '1-oceanic': '#012E40',
        '2-teal': '#024959',
        '3-aquamarine': '#026773',
        '4-azure': '#3CA6A6',
        '5-sand': '#F2E3D5',

        '6-title': '#012E40',
        '7-description': '#6B7280',
        '8-border': '#E2E8F0',
        '9-hover': '#F3F4F6',
      },
    },
  },
  plugins: [],
};
export default config;
