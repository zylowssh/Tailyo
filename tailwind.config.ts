import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F0",
        "cream-deep": "#F4EEE2",
        ink: "#16161F",
        "ink-soft": "#50505B",
        primary: { DEFAULT: "#5B54EE", deep: "#4038D6", soft: "#ECEBFC" },
        accent: { DEFAULT: "#F5C542", soft: "#FBEECB" },
        blob: {
          lavender: "#E5E1F8",
          sun: "#F8E9C0",
          rose: "#FADFDD",
          leaf: "#DFE9D3",
          sky: "#DAE6F4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        card: "0 2px 0 0 rgba(22,22,31,0.05), 0 12px 32px -12px rgba(22,22,31,0.14)",
        lift: "0 24px 48px -16px rgba(22,22,31,0.22)",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-100%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
