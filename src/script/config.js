tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#111111",
          secondary: "#666666",
          tertiary: "#999999",
          background: "#F4F5F5",
          background1: "#FFFFFF",
          background2: "#F4F5F5",
          text: "#000000",
        },
        dark: {
        primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.6)",
          tertiary: "#rgba(255, 255, 255, 0.4)",
          background: "#141414",
          background1: "#1a1a1a",
          background2: "#282828",
          text: "#ffffff",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
