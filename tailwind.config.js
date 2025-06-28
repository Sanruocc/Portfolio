const { nextui } = require("@nextui-org/react")
const defaultConfig = require("shadcn/ui/tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        "divine-pink": "#ec4899",
        "divine-purple": "#8b5cf6",
      },
      fontFamily: {
        divine: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backdropBlur: {
        divine: "20px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(236, 72, 153, 0.6)" },
        },
      },
    },
  },
  plugins: [
    ...defaultConfig.plugins,
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#fdf2f8",
              100: "#fce7f3",
              200: "#fbcfe8",
              300: "#f9a8d4",
              400: "#f472b6",
              500: "#ec4899",
              600: "#db2777",
              700: "#be185d",
              800: "#9d174d",
              900: "#831843",
              DEFAULT: "#ec4899",
            },
            secondary: {
              50: "#faf5ff",
              100: "#f3e8ff",
              200: "#e9d5ff",
              300: "#d8b4fe",
              400: "#c084fc",
              500: "#a855f7",
              600: "#9333ea",
              700: "#7c3aed",
              800: "#6b21a8",
              900: "#581c87",
              DEFAULT: "#8b5cf6",
            },
          },
        },
      },
    }),
  ],
}
