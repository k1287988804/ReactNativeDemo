module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./src",
            "rootPathPrefix": "@/"
          },
          {
            "rootPathSuffix": "./src/components",
            "rootPathPrefix": "@/comps/"
          },
          {
            "rootPathSuffix": "./src/utils",
            "rootPathPrefix": "@/utils/"
          },
        ]
      }
    ]
  ],
};
