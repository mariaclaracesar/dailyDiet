module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@styles": "./src/styles",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
          },
        },
      ],
    ],
  };
};
