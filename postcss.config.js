const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ["> 1%", "last 4 versions"]
    }),
    cssnano({
      preset: "default"
    })
  ]
};
