const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/api/?passage=random&type=json", {
      target: "http://labs.bible.org",
      changeOrigin: true
    })
  );
};
