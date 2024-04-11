module.exports = {
  plugins: {
    tailwindcss: {
      // 設定ファイルのパスを明示的に指定する
      config: "./tailwind.config.js",
    },
    autoprefixer: {
      // あるいは設定ファイルを`require()`して渡す
      config: require("./tailwind.config.js"),
    },
  },
};
