import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Content/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        white: {
          primary: '#FAFAFA',
          secondary: '#F5F5F5',
          default: '#fff'
        },
        orange: {
          secondary: '#DB4444',
          'secondary-hover': '#E07575'
        }
      },
      maxWidth: {
        container: '1170px',
        offer: 'calc(100vw - ((100vw - 1180px) / 2))'
      },
      screens: {
        md: '714px'
      }
    }
  },
  plugins: []
};
export default config;
