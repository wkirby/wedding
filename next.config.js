const withSass = require("@zeit/next-sass");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const env = process.env.NODE_ENV;

module.exports = withSass({
  webpack: function(config) {
    // DOTENV Support
    const envFile = env === "production" ? ".env" : ".env.local";

    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, envFile),
        systemvars: true
      })
    ];

    // YAML Support
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });

    return config;
  }
});
