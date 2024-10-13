/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        extend: {
          height: {
            "40px": "40px",
          },
        },
      },
    },
  },
  plugins: [],
};
