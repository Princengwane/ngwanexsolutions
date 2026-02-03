import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["ui-sans-serif", "system-ui", "Space Grotesk", "Inter", "sans-serif"]
      },
      colors: {
        space: {
          950: "#060814",
          900: "#0B0F1A",
          800: "#101A2C",
          700: "#142447"
        },
        neon: {
          cyan: "#00FFE5",
          green: "#35FF7A"
        }
      },
      boxShadow: {
        glow: "0 0 0.75rem rgba(0, 255, 229, 0.25)",
        glowStrong: "0 0 1.5rem rgba(0, 255, 229, 0.35)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(800px circle at var(--mx, 50%) var(--my, 50%), rgba(0,255,229,0.18), transparent 55%)",
        "grid": "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
} satisfies Config;
