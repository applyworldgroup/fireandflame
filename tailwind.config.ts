import type { Config } from "tailwindcss";

const colors = {
  primary: '#ED1F2A',
  secondary: '#F68B15',
  tertiary: '#4F4F4F',
  white: '#ffffff',
  black: '#000000',
  background:'#D9D9D9',
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:colors,
  },
  plugins: [],
};
export default config;
