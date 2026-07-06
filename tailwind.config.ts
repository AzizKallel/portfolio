import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",
        paper: "#F7F3EC",
        coral: "#FF4D2E",
        violet: "#7C3AED",
        yellow: "#FFC53D",
        mist: "#8A8A94",
        cream: "#F5F3EE",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grain: "url('/noise.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 46s linear infinite",
        "marquee-reverse": "marquee-reverse 34s linear infinite",
        blob: "blob 12s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
