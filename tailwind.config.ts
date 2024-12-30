import type { Config } from 'tailwindcss'
// eslint-disable-next-line
// @ts-ignore
import tailwindcssMotionPlugin from 'tailwindcss-motion'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [tailwindcssMotionPlugin],
} satisfies Config
