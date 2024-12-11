const plugin = require("tailwind-scrollbar-hide");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [plugin],
};
