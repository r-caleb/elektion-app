/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-blue": "#025f9f",
        "app-filter-blue": "#0ba7d0",
        "app-focus-green": "#00d16f",
        "app-gray": "#8B8A8A",
      },
      boxShadow: {
        app: "0px 1.5px 3px rgba(2, 95, 159, 0.150784)",
      },
      backgroundImage: {
        home: "url('../public/assets/images/flag.jpg')",
        contact: "url('../public/assets/images/contact.jpg')",
      },
      screens: { elektion_md: "800px" },
    },
  },
  plugins: [],
};
