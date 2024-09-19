/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        blogLayout: "300px auto"
      },
      colors: {
        alt: "#f6bb19"
      },
      borderColor: {
        alt: "#f6bb19"
      }

    },
  },
  plugins: [],
}

