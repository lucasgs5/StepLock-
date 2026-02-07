import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f0ff",
          100: "#e7ddff",
          200: "#d0beff",
          300: "#b194ff",
          400: "#9270f8",
          500: "#7956e6",
          600: "#6543c5",
          700: "#5237a1",
          800: "#443183",
          900: "#3a2d6c"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(34, 25, 66, 0.10)",
        glow: "0 0 0 1px rgba(121, 86, 230, 0.25), 0 14px 40px rgba(121, 86, 230, 0.22)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(80% 80% at 15% 10%, rgba(121, 86, 230, 0.22), transparent 70%), radial-gradient(60% 60% at 85% 30%, rgba(148, 201, 255, 0.18), transparent 65%)"
      }
    }
  },
  plugins: []
};

export default config;
