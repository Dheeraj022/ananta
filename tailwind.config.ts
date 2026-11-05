import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#286B4D",
          hover: "#1E543C",
          dark: "#1B4733",
          light: "#358762",
          surface: "#F2F7F4",
        },
        earth: {
          DEFAULT: "#70452F",
          hover: "#5A3725",
          light: "#8C593E",
          surface: "#F7F2EF",
        },
        sand: {
          DEFAULT: "#E9DDC5",
          light: "#F7F3EB",
          warm: "#F1E8D9",
          cream: "#FAF8F5",
        },
        charcoal: {
          DEFAULT: "#17251F",
          dark: "#0F1A15",
          soft: "#2A3A32",
        },
        gold: {
          DEFAULT: "#C6A66B",
          hover: "#B59355",
          light: "#DFCA9B",
          subtle: "#F4EEDB",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

