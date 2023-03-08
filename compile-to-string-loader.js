const { getRemainingRequest } = require("loader-utils");

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = function compileToStringLoader(content, map, meta) {
  const callback = this.async();

  if (/NOPE/.test(this.request)) {
    callback(null, content);
    return;
  }

  this.importModule(this.request + "?NOPE").then(source => {
    console.log(source);

    callback(null, `module.exports = ${JSON.stringify(source)};`);
  });
};
