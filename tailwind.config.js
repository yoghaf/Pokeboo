/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gradient-primary": {
          DEFAULT: "linear-gradient(to bottom, #f2fbe6, #e5fbeb, #dff4fe, #dfedff)",
        },
      },
    },
  },
  plugins: [],
};
