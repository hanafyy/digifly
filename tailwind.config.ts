import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Uses CSS variables
        foreground: "var(--foreground)", // Uses CSS variables
        defaultGreen: "#49BD88", // Custom color in hex format
        defaultPurple: "#6D5CBC", // Custom color in hex format
        defaultGrayBlack: "#666666",
        tableHeadingGray: "#999999",
      },
      boxShadow: {
        custom: "0px 4px 12px 0px #00000014", // Define your custom shadow here
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FCFCFE 7.26%, rgba(255, 255, 255, 0) 22.64%, rgba(255, 255, 255, 0) 50.21%, rgba(255, 255, 255, 0) 89.69%, #FFFFFF 97.68%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
