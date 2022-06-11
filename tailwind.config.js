module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#3b444b",
          success: "#1BBB70",
          warning: "#F4BC1C",
          error: "#FA5C5C",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
};