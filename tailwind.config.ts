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
        primary: "var(--primary)",
        primary1: "var(--primary1)",
        secondary: "var(--secondary)",
        secondary1: "var(--secondary1)",
        secondary2: "var(--secondary2)",
        background: "(--bg)",
        text: "var(--text)",
        text1: "var(--text1)",
        text2: "var(--text2)",
        button: "var(--button)",
        button1: "var(--button1)",
        button2: "var(--button2)",
        buttonHover: "var(--buttonHover)",
        buttonHover1: "var(--buttonHover1)",
      },
    },
  },
  plugins: [],
};
export default config;
