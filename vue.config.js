const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pwa: {
    themeColor: "#ffedb8",
    iconPaths: {
      faviconSVG: "img/icons/favicon.svg",
      favicon32: "img/icons/favicon32.png",
      favicon16: "img/icons/favicon16.png",
      appleTouchIcon: "img/icons/ios/152.png",
      maskIcon: "img/icons/android/android-launchericon-512-512.png",
      msTileImage: "img/icons/windows11/LargeTile.scale-400.png",
    },
  },
});
