const path = require("path");

module.exports = {
  modify(config, { target, dev }, webpack) {
    for (const rule of config.module.rules) {
      if (rule.test && rule.test.toString() === "/\\.css$/") {
        const scss = { ...rule };

        scss.test = /\.scss$/;
        scss.exclude = /\.module\.scss$/;
        scss.include = path.join(__dirname, "src");
        scss.use.push({ loader: "sass-loader" });

        config.module.rules.push(scss);

        // break;
      }
      if (rule.test && rule.test.toString() === "/\\.module\\.css$/") {
        const scss = { ...rule };

        scss.test = /\.module\.scss$/;
        // scss.exclude = /\.scss$/;
        scss.include = path.join(__dirname, "src");
        scss.use.push({ loader: "sass-loader" });

        config.module.rules.push(scss);
        // break;
      }
      
    }

    return config;
  }
};
