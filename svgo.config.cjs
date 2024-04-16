module.exports = {
  multipass: false, // boolean
  js2svg: {
    indent: 2, // number
    pretty: false, // boolean
  },
  plugins: [
    "preset-default", // built-in plugins enabled by default
    "prefixIds", // enable built-in plugins by name
    "cleanupIds",
    "collapseGroups",
    "removeDesc",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "removeRasterImages",
    "removeStyleElement",
    "removeTitle",
    "removeUselessDefs",
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    // enable built-in plugins with an object to configure plugins
    {
      name: "cleanupNumericValues",
      params: {
        floatPrecision: 1,
      },
    },
  ],
};