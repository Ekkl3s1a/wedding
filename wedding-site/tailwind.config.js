/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        olive: "#6B8E23",
        lightOlive: "#A9BA9D",
        otherColors: "#95ae8a",
        cream: "#FFFDF5",
        gold: "#D4AF37",
        blush: "#FAD6D6",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "leaf-pattern": "url('/src/assets/olive-leaves-pattern.jpg')",
        "hero-gradient": "linear-gradient(to bottom, #436937, #A9BA9D)",
        "hero-gradient-to-top": "linear-gradient(to bottom, #A9BA9D,rgb(20, 54, 10))",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        "slide-up": "slideUp 1s ease-in",
        "zoom-in": "zoomIn 1s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
