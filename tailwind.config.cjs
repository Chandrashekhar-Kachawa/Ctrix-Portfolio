/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-once": "spin 100ms linear",
      },
    },
  },
  plugins: [],
};
