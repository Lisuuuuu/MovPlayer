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
      margin: 0,
      padding: 0,
      backgroundColor: '#1a1a1a',
      color: 'white'
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
