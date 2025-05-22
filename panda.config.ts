import { defineConfig } from "@pandacss/dev";



export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./lib/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  globalCss: {
    body: {
      backgroundColor: "#1a1a1a",
      color: "#fff",
      // fontFamily: "Inter, sans-serif",
      backgroundImage: 'radial-gradient(#383838 2px, transparent 2px)',
      backgroundSize: ' 32px 32px',


    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
