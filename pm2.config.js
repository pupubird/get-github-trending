module.exports = {
  apps: [
    {
      name: "get-github-trending",
      script: "./src/index.js",
      env: {
        PORT: 7778,
      },
    },
  ],
};
