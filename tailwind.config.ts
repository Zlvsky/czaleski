import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      fontSize: {
        '20': ['1.25rem', '1.875rem'],
        '40': ['2.5rem', '3.75rem']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        gray1: '#A1A1A1',
        gray2: '#606060',
        grayA1: '#A1A1A1',
        grayE8: '#E8E8E8',
        gray7B: '#7B7B7B',
        dark26: '#262626',
        dark48: '#484848',
        dark30: '#303030',
        darkbg: '#1F1F1F',
        darkborder: '#484848',
        green: '#2CA56B'
      },
      boxShadow: {
        block: '0px 0px 30px 1px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
}
export default config
