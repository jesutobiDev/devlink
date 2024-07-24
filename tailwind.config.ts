import type { Config } from "tailwindcss";

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
      colors:{
        "dev-purple" : "#633CFF",
        "dev-light-purple" : "#BEADFF",
        "dev-lilac" : "#EFEBFF",
        "dev-dark-gray" : "#333333",
        "dev-gray" : "#737373",
        "dev-light-gray" : "#D9D9D9",
        "dev-very-light-gray" : "#FAFAFA",
        "dev-red" : "#FF3939",
      }
    },
  },
  plugins: [],
};
export default config;
