const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pwa: {
    assetsVersion: "0.1.0",
    themeColor: "#ffedb8",
    iconPaths: {
      faviconSVG: "img/icons/favicon.svg",
      favicon32: "img/icons/favicon32.png",
      favicon16: "img/icons/favicon16.png",
      appleTouchIcon: "img/icons/ios/152.png",
      maskIcon: "img/icons/android/android-launchericon-512-512.png",
      msTileImage: "img/icons/windows11/LargeTile.scale-400.png",
    },
    manifestOptions: {
      name: "Bienenzucht W.Durek",
      short_name: "Duris Bienchen",
      theme_color: "#ffedb8",
      icons: [
        {
          src: "./favicon.svg",
          sizes: "512x512",
          type: "image/svg+xml",
          purpose: "any maskable",
        },
        {
          src: "./img/icons/android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
});
