require('ascii-chillah').printColor();
module.exports = function (env) {
  return require(`./webpack.${env}.config.js`);
};
